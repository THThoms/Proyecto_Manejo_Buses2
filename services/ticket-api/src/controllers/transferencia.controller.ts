import fs from 'fs/promises';
import path from 'path';
import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../services/prisma';
import { validarMagicBytes } from '../services/fileTypeGuard';

const crearTransferenciaSchema = z.object({
  compraId: z.coerce.number().int().positive(),
  banco: z.string().min(1).max(120),
  referencia: z.string().min(1).max(60),
});

/**
 * US11: el cliente sube un comprobante de transferencia.
 * Multipart/form-data: { compraId, banco, referencia, file: <archivo> }.
 *
 * Reglas (decisiones cerradas con el Tech Lead):
 *  - 415 si MIME header no es jpg/png/pdf (multer lo rechaza antes).
 *  - 413 si archivo > 5MB (multer corta el stream).
 *  - 415 si magic bytes no coinciden con MIME — el archivo se BORRA del disco.
 *  - 400 si body inválido o archivo faltante.
 *  - 409 si la compra no está PENDIENTE, ya tiene pago APROBADO o ya tiene
 *    PagoTransferencia pendiente.
 *  - El boleto queda PENDIENTE; el asiento sigue RESERVADO (24h TTL).
 */
export const crearPagoTransferencia = async (req: Request, res: Response) => {
  const file = req.file;
  const bodyParse = crearTransferenciaSchema.safeParse(req.body);

  if (!bodyParse.success) {
    if (file?.path) await fs.unlink(file.path).catch(() => {});
    return res.status(400).json({ error: 'Body inválido', detalles: bodyParse.error.flatten() });
  }

  if (!file) {
    return res.status(400).json({ error: 'Archivo de comprobante requerido (campo "file")' });
  }

  const { compraId, banco, referencia } = bodyParse.data;

  // Validar magic bytes y borrar archivo si no es realmente JPEG/PNG/PDF.
  const magic = await validarMagicBytes(file.path);
  if (!magic.ok) {
    return res.status(415).json({
      error: 'El contenido del archivo no coincide con un JPEG/PNG/PDF válido',
      mimeDetectado: magic.detectedMime ?? 'desconocido',
    });
  }

  try {
    const compra = await prisma.compra.findUnique({
      where: { id: compraId },
      include: { pago: { include: { pagoTransferencia: true } } },
    });

    if (!compra) {
      await fs.unlink(file.path).catch(() => {});
      return res.status(404).json({ error: 'Compra no encontrada' });
    }
    if (compra.estado !== 'PENDIENTE') {
      await fs.unlink(file.path).catch(() => {});
      return res.status(409).json({ error: `La compra está en estado ${compra.estado}` });
    }
    if (compra.pago?.estado === 'APROBADO') {
      await fs.unlink(file.path).catch(() => {});
      return res.status(409).json({ error: 'La compra ya tiene un pago aprobado' });
    }
    if (compra.pago?.pagoTransferencia && compra.pago.pagoTransferencia.estado === 'PENDIENTE') {
      await fs.unlink(file.path).catch(() => {});
      return res.status(409).json({ error: 'Ya existe una transferencia pendiente para esta compra' });
    }

    // URL relativa que solo se sirve via GET /pagos/transferencia/:id/comprobante.
    const comprobanteUrl = path.posix.join('/comprobantes', path.basename(file.path));

    const resultado = await prisma.$transaction(async (tx: any) => {
      const pago = compra.pago
        ? await tx.pagoPasajero.update({
            where: { id: compra.pago.id },
            data: { metodo: 'TRANSFERENCIA', estado: 'PENDIENTE', monto: compra.total },
          })
        : await tx.pagoPasajero.create({
            data: {
              compraId: compra.id,
              monto: compra.total,
              metodo: 'TRANSFERENCIA',
              estado: 'PENDIENTE',
            },
          });

      const transferencia = await tx.pagoTransferencia.create({
        data: {
          pagoId: pago.id,
          banco,
          referencia,
          comprobanteUrl,
          estado: 'PENDIENTE',
        },
      });

      return { pago, transferencia };
    });

    return res.status(201).json({
      compraId,
      pagoId: resultado.pago.id,
      transferenciaId: resultado.transferencia.id,
      estado: resultado.transferencia.estado,
      comprobanteUrl: resultado.transferencia.comprobanteUrl,
    });
  } catch (error) {
    console.error('Error al crear pago transferencia:', error);
    await fs.unlink(file.path).catch(() => {});
    return res.status(500).json({ error: 'Error interno al registrar la transferencia' });
  }
};

/**
 * US11 CA #3: lista de comprobantes pendientes para el oficinista.
 * Solo rol OFICINISTA (middleware aparte).
 */
export const listarPendientes = async (_req: Request, res: Response) => {
  try {
    const pendientes = await prisma.pagoTransferencia.findMany({
      where: { estado: 'PENDIENTE' },
      orderBy: { creadoEn: 'asc' },
      include: {
        pago: {
          include: {
            compra: {
              select: { id: true, usuarioId: true, total: true, fechaViaje: true, turnoId: true },
            },
          },
        },
      },
    });

    return res.json(pendientes);
  } catch (error) {
    console.error('Error al listar transferencias pendientes:', error);
    return res.status(500).json({ error: 'Error interno al listar pendientes' });
  }
};

/**
 * US12: detalle del comprobante para la pantalla de revisión del oficinista.
 * Devuelve la transferencia con su pago, compra (con asientos+boletos) y
 * aprobación si ya fue procesada. Solo rol OFICINISTA.
 */
export const getDetalle = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'id inválido' });
  }

  try {
    const transferencia = await prisma.pagoTransferencia.findUnique({
      where: { id },
      include: {
        aprobacion: true,
        pago: {
          include: {
            compra: { include: { asientos: true, boletos: true } },
          },
        },
      },
    });
    if (!transferencia) {
      return res.status(404).json({ error: 'Transferencia no encontrada' });
    }
    return res.json(transferencia);
  } catch (error) {
    console.error('Error al obtener detalle de transferencia:', error);
    return res.status(500).json({ error: 'Error interno al obtener el detalle' });
  }
};

/**
 * US11 CA #4: sirve el archivo del comprobante. Solo rol OFICINISTA.
 * Recibe el ID del PagoTransferencia (no el del PagoPasajero).
 */
export const descargarComprobante = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'id inválido' });
  }

  try {
    const transferencia = await prisma.pagoTransferencia.findUnique({ where: { id } });
    if (!transferencia || !transferencia.comprobanteUrl) {
      return res.status(404).json({ error: 'Comprobante no encontrado' });
    }

    const uploadDir = path.resolve(process.env.UPLOAD_DIR || './uploads/comprobantes');
    const filename = path.basename(transferencia.comprobanteUrl);
    const rutaArchivo = path.join(uploadDir, filename);

    // Defensa adicional: el archivo resuelto tiene que estar dentro del upload dir.
    if (!rutaArchivo.startsWith(uploadDir + path.sep) && rutaArchivo !== uploadDir) {
      return res.status(400).json({ error: 'Ruta de archivo inválida' });
    }

    try {
      await fs.access(rutaArchivo);
    } catch {
      return res.status(404).json({ error: 'Archivo del comprobante no existe en disco' });
    }

    return res.sendFile(rutaArchivo);
  } catch (error) {
    console.error('Error al servir comprobante:', error);
    return res.status(500).json({ error: 'Error interno al servir el comprobante' });
  }
};
