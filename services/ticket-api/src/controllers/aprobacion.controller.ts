import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../services/prisma';
import { liberarAsiento } from '../services/busApiClient';
import { confirmarPagoYOcuparAsientos } from '../services/confirmarPago';
import * as emailService from '../services/emailService';

const aprobarBodySchema = z.object({
  observacion: z.string().max(500).optional(),
});

const rechazarBodySchema = z.object({
  // E5: motivo obligatorio mínimo 5 caracteres.
  motivo: z.string().trim().min(5, 'El motivo debe tener al menos 5 caracteres').max(500),
});

/**
 * E6: leemos oficinistaId del header `X-User-Id`; default 1 si falta o inválido.
 * Auth real llegará en US21.
 */
function getOficinistaId(req: Request): number {
  const raw = req.header('x-user-id');
  const id = Number(raw);
  return Number.isInteger(id) && id > 0 ? id : 1;
}

/**
 * US12 CA #2: Aprobar comprobante.
 * Pasos: registrar Aprobacion, marcar PagoTransferencia APROBADO, delegar al
 * helper compartido para cascada (pago, compra, boleto, ocupar asientos), email stub.
 */
export const aprobar = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'id inválido' });
  }

  const parse = aprobarBodySchema.safeParse(req.body ?? {});
  if (!parse.success) {
    return res.status(400).json({ error: 'body inválido', detalles: parse.error.flatten() });
  }
  const { observacion } = parse.data;
  const oficinistaId = getOficinistaId(req);

  try {
    const transferencia = await prisma.pagoTransferencia.findUnique({
      where: { id },
      include: { pago: true, aprobacion: true },
    });
    if (!transferencia) {
      return res.status(404).json({ error: 'Transferencia no encontrada' });
    }
    if (transferencia.estado !== 'PENDIENTE') {
      return res
        .status(409)
        .json({ error: `Transferencia ya está en estado ${transferencia.estado}` });
    }

    await prisma.$transaction(async (tx: any) => {
      await tx.aprobacion.create({
        data: {
          pagoTransferenciaId: id,
          oficinistaId,
          estado: 'APROBADO',
          observacion: observacion ?? null,
        },
      });
      await tx.pagoTransferencia.update({
        where: { id },
        data: { estado: 'APROBADO' },
      });
    });

    const compraId = transferencia.pago.compraId;
    const pagoId = transferencia.pagoId;

    await confirmarPagoYOcuparAsientos(compraId, pagoId);
    await emailService.enviarConfirmacion(compraId);

    return res.json({
      ok: true,
      transferenciaId: id,
      estado: 'APROBADO',
      oficinistaId,
    });
  } catch (err) {
    if ((err as any)?.code === 'P2002') {
      return res.status(409).json({ error: 'Esta transferencia ya fue procesada' });
    }
    console.error('Error al aprobar transferencia:', err);
    return res.status(500).json({ error: 'Error interno al aprobar' });
  }
};

/**
 * US12 CA #3: Rechazar comprobante con motivo obligatorio.
 * Pasos: validar motivo, registrar Aprobacion(RECHAZADO), marcar todo en cascada
 * como anulado, liberar asientos en bus-api, email stub.
 */
export const rechazar = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'id inválido' });
  }

  const parse = rechazarBodySchema.safeParse(req.body ?? {});
  if (!parse.success) {
    return res.status(400).json({ error: 'body inválido', detalles: parse.error.flatten() });
  }
  const motivo = parse.data.motivo.trim();
  const oficinistaId = getOficinistaId(req);

  try {
    const transferencia = await prisma.pagoTransferencia.findUnique({
      where: { id },
      include: {
        pago: { include: { compra: { include: { asientos: true } } } },
        aprobacion: true,
      },
    });
    if (!transferencia) {
      return res.status(404).json({ error: 'Transferencia no encontrada' });
    }
    if (transferencia.estado !== 'PENDIENTE') {
      return res
        .status(409)
        .json({ error: `Transferencia ya está en estado ${transferencia.estado}` });
    }

    const compraId = transferencia.pago.compraId;
    const pagoId = transferencia.pagoId;
    const asientos = transferencia.pago.compra.asientos;

    await prisma.$transaction(async (tx: any) => {
      await tx.aprobacion.create({
        data: {
          pagoTransferenciaId: id,
          oficinistaId,
          estado: 'RECHAZADO',
          observacion: motivo,
        },
      });
      await tx.pagoTransferencia.update({
        where: { id },
        data: { estado: 'RECHAZADO' },
      });
      await tx.pagoPasajero.update({
        where: { id: pagoId },
        data: { estado: 'RECHAZADO' },
      });
      await tx.compra.update({
        where: { id: compraId },
        data: { estado: 'ANULADA' },
      });
      await tx.boleto.updateMany({
        where: { compraId },
        data: { estado: 'ANULADO' },
      });
    });

    for (const ca of asientos) {
      try {
        await liberarAsiento(ca.turnoId, ca.asientoId);
        await prisma.compraAsiento.update({
          where: { id: ca.id },
          data: { estado: 'LIBERADO' },
        });
      } catch (err) {
        console.error(`[aprobacion] no se pudo liberar asiento ${ca.asientoId}:`, err);
      }
    }

    await emailService.enviarRechazo(compraId, motivo);

    return res.json({
      ok: true,
      transferenciaId: id,
      estado: 'RECHAZADO',
      motivo,
      oficinistaId,
    });
  } catch (err) {
    if ((err as any)?.code === 'P2002') {
      return res.status(409).json({ error: 'Esta transferencia ya fue procesada' });
    }
    console.error('Error al rechazar transferencia:', err);
    return res.status(500).json({ error: 'Error interno al rechazar' });
  }
};

// Mejora US13 (Sprint): filtros operativos para el historial.
// Mantiene la respuesta como array; total/paginación viajan en headers
// X-Total-Count, X-Page, X-Limit para no romper consumidores actuales.
const historialFiltrosSchema = z.object({
  estado: z.enum(['APROBADO', 'RECHAZADO', 'TODOS']).optional(),
  cedula: z.string().trim().min(1).max(20).optional(),
  nombrePasajero: z.string().trim().min(1).max(120).optional(),
  compraId: z.coerce.number().int().positive().optional(),
  pagoTransferenciaId: z.coerce.number().int().positive().optional(),
  oficinistaId: z.coerce.number().int().positive().optional(),
  fechaDesde: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  fechaHasta: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(200).default(50),
});

function buildHistorialWhere(f: z.infer<typeof historialFiltrosSchema>) {
  const where: Record<string, any> = {};
  if (f.estado && f.estado !== 'TODOS') where.estado = f.estado;
  if (f.oficinistaId) where.oficinistaId = f.oficinistaId;
  if (f.pagoTransferenciaId) where.pagoTransferenciaId = f.pagoTransferenciaId;

  const boletoSome: Record<string, any> = {};
  if (f.cedula) boletoSome.cedulaPasajero = f.cedula;
  if (f.nombrePasajero) boletoSome.nombrePasajero = { contains: f.nombrePasajero, mode: 'insensitive' };

  const compraWhere: Record<string, any> = {};
  if (Object.keys(boletoSome).length) compraWhere.boletos = { some: boletoSome };
  if (f.compraId) compraWhere.id = f.compraId;

  if (Object.keys(compraWhere).length) {
    where.pagoTransferencia = { pago: { compra: compraWhere } };
  }

  if (f.fechaDesde || f.fechaHasta) {
    where.revisadoEn = {} as Record<string, Date>;
    if (f.fechaDesde) where.revisadoEn.gte = new Date(`${f.fechaDesde}T00:00:00.000Z`);
    if (f.fechaHasta) where.revisadoEn.lte = new Date(`${f.fechaHasta}T23:59:59.999Z`);
  }
  return where;
}

/**
 * US12 CA #5: Historial de decisiones (fecha, hora, oficinista responsable, motivo).
 * Mejora Sprint US13: acepta query params opcionales (estado, cedula,
 * nombrePasajero, compraId, pagoTransferenciaId, oficinistaId, fechaDesde,
 * fechaHasta, page, limit). Sin query params el comportamiento es idéntico al
 * original. La forma de respuesta sigue siendo un array; total y paginación se
 * exponen en headers.
 */
export const listarHistorial = async (req: Request, res: Response) => {
  const parsed = historialFiltrosSchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Filtros inválidos', detalles: parsed.error.flatten() });
  }
  const filtros = parsed.data;
  const where = buildHistorialWhere(filtros);
  const hasFiltros = Object.keys(where).length > 0;

  try {
    const include = {
      pagoTransferencia: {
        include: {
          pago: {
            include: {
              compra: {
                select: { id: true, total: true, fechaViaje: true, turnoId: true },
              },
            },
          },
        },
      },
    };
    const skip = (filtros.page - 1) * filtros.limit;
    const take = filtros.limit;

    const historial = hasFiltros
      ? await prisma.aprobacion.findMany({
          where: where as any,
          orderBy: { revisadoEn: 'desc' },
          include,
          skip,
          take,
        })
      : await prisma.aprobacion.findMany({
          orderBy: { revisadoEn: 'desc' },
          include,
          skip,
          take,
        });
    const total = hasFiltros
      ? await prisma.aprobacion.count({ where: where as any })
      : await prisma.aprobacion.count();

    res.setHeader('X-Total-Count', String(total));
    res.setHeader('X-Page', String(filtros.page));
    res.setHeader('X-Limit', String(filtros.limit));
    return res.json(historial);
  } catch (err) {
    console.error('Error al listar historial:', err);
    return res.status(500).json({ error: 'Error interno al listar historial' });
  }
};
