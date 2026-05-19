import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../services/prisma';
import {
  reservarAsiento,
  liberarAsiento,
  BusApiError,
} from '../services/busApiClient';

const asientoSchema = z.object({
  asientoTurnoId: z.number().int().positive(),
  asientoId: z.number().int().positive(),
  cedulaPasajero: z.string().min(6).max(20),
  nombrePasajero: z.string().min(1).max(120),
  tipoTarifa: z.enum(['NORMAL', 'TERCERA_EDAD', 'DISCAPACIDAD', 'MENOR']).default('NORMAL'),
});

const crearCompraSchema = z.object({
  usuarioId: z.number().int().positive(),
  frecuenciaId: z.number().int().positive(),
  turnoId: z.number().int().positive(),
  fechaViaje: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'fechaViaje debe ser YYYY-MM-DD'),
  // TODO Sprint 2: recalcular total contra bus-api en vez de confiar en el cliente.
  total: z.number().positive(),
  canal: z.enum(['APP', 'WEB', 'OFICIAL', 'OFICINISTA']).default('WEB'),
  asientos: z.array(asientoSchema).min(1).max(10),
  origen: z.string().optional(),
  destino: z.string().optional(),
});

const EXPIRACION_BOLETO_HORAS = 24;

/**
 * US10: Crear una Compra en estado PENDIENTE.
 *
 * Flujo (saga):
 *  1. Reservar todos los asientos en bus-api. Si alguno falla, libera los ya reservados.
 *  2. Solo si todas las reservas pasaron, abre transacción y crea Compra + Boletos + CompraAsiento.
 *  3. Si la transacción falla, libera los asientos para no dejar reservas huérfanas.
 */
export const crearCompra = async (req: Request, res: Response) => {
  const parsed = crearCompraSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Body inválido', detalles: parsed.error.flatten() });
  }
  const body = parsed.data;

  const reservados: { turnoId: number; asientoId: number }[] = [];

  try {
    for (const a of body.asientos) {
      try {
        await reservarAsiento(body.turnoId, a.asientoId);
        reservados.push({ turnoId: body.turnoId, asientoId: a.asientoId });
      } catch (err) {
        await Promise.allSettled(
          reservados.map((r) => liberarAsiento(r.turnoId, r.asientoId))
        );
        if (err instanceof BusApiError) {
          return res.status(err.status === 409 ? 409 : 502).json({
            error: 'No se pudo reservar uno o más asientos',
            asientoId: a.asientoId,
            detalle: err.body,
          });
        }
        throw err;
      }
    }

    const expiraEn = new Date(Date.now() + EXPIRACION_BOLETO_HORAS * 60 * 60 * 1000);

    const compra = await prisma.$transaction(async (tx: any) => {
      const nuevaCompra = await tx.compra.create({
        data: {
          usuarioId: body.usuarioId,
          frecuenciaId: body.frecuenciaId,
          turnoId: body.turnoId,
          fechaViaje: new Date(body.fechaViaje),
          cantidad: body.asientos.length,
          total: body.total,
          canal: body.canal,
          estado: 'PENDIENTE',
          origen: body.origen || null,
          destino: body.destino || null,
        },
      });

      for (const a of body.asientos) {
        const boleto = await tx.boleto.create({
          data: {
            compraId: nuevaCompra.id,
            cedulaPasajero: a.cedulaPasajero,
            nombrePasajero: a.nombrePasajero,
            tipoTarifa: a.tipoTarifa,
            expiraEn,
          },
        });
        await tx.compraAsiento.create({
          data: {
            compraId: nuevaCompra.id,
            asientoTurnoId: a.asientoTurnoId,
            asientoId: a.asientoId,
            turnoId: body.turnoId,
            estado: 'RESERVADO',
          },
        });
        // Asociamos boleto ↔ asiento por orden de creación (no hay FK persistida).
        void boleto;
      }

      return tx.compra.findUnique({
        where: { id: nuevaCompra.id },
        include: { boletos: true, asientos: true },
      });
    });

    return res.status(201).json(compra);
  } catch (error) {
    console.error('Error al crear compra:', error);
    await Promise.allSettled(
      reservados.map((r) => liberarAsiento(r.turnoId, r.asientoId))
    );
    return res.status(500).json({ error: 'Error interno al crear la compra' });
  }
};

/**
 * US10: Devuelve el estado actual de una compra para que el frontend haga polling
 * mientras espera la confirmación del webhook de Stripe.
 */
export const obtenerCompra = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'id inválido' });
  }

  try {
    const compra = await prisma.compra.findUnique({
      where: { id },
      include: {
        boletos: true,
        asientos: true,
        pago: { include: { pagoTarjeta: true } },
      },
    });
    if (!compra) {
      return res.status(404).json({ error: 'Compra no encontrada' });
    }
    return res.json(compra);
  } catch (error) {
    console.error('Error al obtener compra:', error);
    return res.status(500).json({ error: 'Error interno al obtener la compra' });
  }
};

/**
 * US12 (soporte visual): resumen sanitizado para que el cliente vea su boleto.
 * Devuelve solo datos NO sensibles. Omite:
 *  - referenciaPasarela (Stripe paymentIntent id)
 *  - comprobanteUrl (ruta server-side del archivo)
 *
 * Usado por la pantalla /boleto/[compraId] tras pago con tarjeta o transferencia.
 */
export const obtenerResumen = async (req: Request, res: Response) => {
  const id = Number(req.params.compraId);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'compraId inválido' });
  }

  try {
    const compra = await prisma.compra.findUnique({
      where: { id },
      include: {
        boletos: true,
        asientos: true,
        pago: {
          include: { pagoTarjeta: true, pagoTransferencia: true },
        },
      },
    });
    if (!compra) {
      return res.status(404).json({ error: 'Compra no encontrada' });
    }

    const resumen = {
      compraId: compra.id,
      estadoCompra: compra.estado,
      total: compra.total,
      canal: compra.canal,
      fechaCompra: compra.creadoEn,
      fechaViaje: compra.fechaViaje,
      turnoId: compra.turnoId,
      frecuenciaId: compra.frecuenciaId,
      boletos: compra.boletos.map((b: any) => ({
        id: b.id,
        estado: b.estado,
        nombrePasajero: b.nombrePasajero,
        cedulaPasajero: b.cedulaPasajero,
        tipoTarifa: b.tipoTarifa,
        uuidQr: b.uuidQr,
        expiraEn: b.expiraEn,
      })),
      asientos: compra.asientos.map((a: any) => ({
        id: a.id,
        asientoId: a.asientoId,
        turnoId: a.turnoId,
        estado: a.estado,
      })),
      pago: compra.pago
        ? {
            estado: compra.pago.estado,
            monto: compra.pago.monto,
            pagadoEn: compra.pago.pagadoEn,
            metodo: compra.pago.metodo,
            tarjeta: compra.pago.pagoTarjeta
              ? {
                  marca: compra.pago.pagoTarjeta.marca,
                  ultimos4: compra.pago.pagoTarjeta.ultimos4,
                }
              : null,
            transferencia: compra.pago.pagoTransferencia
              ? {
                  id: compra.pago.pagoTransferencia.id,
                  banco: compra.pago.pagoTransferencia.banco,
                  referencia: compra.pago.pagoTransferencia.referencia,
                  estado: compra.pago.pagoTransferencia.estado,
                  creadoEn: compra.pago.pagoTransferencia.creadoEn,
                }
              : null,
          }
        : null,
    };

    return res.json(resumen);
  } catch (error) {
    console.error('Error al obtener resumen de compra:', error);
    return res.status(500).json({ error: 'Error interno al obtener el resumen' });
  }
};
