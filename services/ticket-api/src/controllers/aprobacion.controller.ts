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

/**
 * US12 CA #5: Historial de decisiones (fecha, hora, oficinista responsable, motivo).
 */
export const listarHistorial = async (_req: Request, res: Response) => {
  try {
    const historial = await prisma.aprobacion.findMany({
      orderBy: { revisadoEn: 'desc' },
      include: {
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
      },
    });
    return res.json(historial);
  } catch (err) {
    console.error('Error al listar historial:', err);
    return res.status(500).json({ error: 'Error interno al listar historial' });
  }
};
