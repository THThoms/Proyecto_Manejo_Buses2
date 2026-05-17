import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../services/prisma';
import { confirmarPagoYOcuparAsientos } from '../services/confirmarPago';

const cobrarOficinaSchema = z.object({
  compraId: z.number().int().positive(),
  montoRecibido: z.number().positive(),
});

function getVendedorId(req: Request): number {
  const raw = req.header('x-user-id');
  const id = Number(raw);
  return Number.isInteger(id) && id > 0 ? id : 1;
}

function redondear2(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * US13: Cobro en efectivo en oficina (rol OFICINISTA).
 *
 * Asume que la compra ya fue creada vía POST /compras con canal=OFICINISTA.
 * Acá registramos el pago en efectivo con canalVenta=OFICINA y disparamos la
 * misma cascada de confirmación que US10/US12 (boleto VIGENTE, asiento OCUPADO).
 *
 * CA mapping:
 *  #1 canal_venta OFICINA → PagoEfectivo.canalVenta = 'OFICINA'.
 *  #2 boleto VIGENTE inmediato → confirmarPagoYOcuparAsientos marca VIGENTE.
 *  #3 ligado al turno activo → PagoEfectivo.turnoId = Compra.turnoId.
 *  #4 QR generado → Boleto.uuidQr ya existe por default(uuid()); se devuelve.
 *  #5 solo OFICINISTA → middleware requireOficinista en la ruta.
 */
export const cobrarEnOficina = async (req: Request, res: Response) => {
  const parsed = cobrarOficinaSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Body inválido', detalles: parsed.error.flatten() });
  }
  const { compraId, montoRecibido } = parsed.data;
  const vendedorId = getVendedorId(req);

  try {
    const compra = await prisma.compra.findUnique({
      where: { id: compraId },
      include: { pago: true },
    });
    if (!compra) {
      return res.status(404).json({ error: 'Compra no encontrada' });
    }
    if (compra.estado !== 'PENDIENTE') {
      return res.status(409).json({ error: `La compra está en estado ${compra.estado}` });
    }
    if (compra.pago && compra.pago.estado === 'APROBADO') {
      return res.status(409).json({ error: 'La compra ya tiene un pago aprobado' });
    }

    const total = Number(compra.total);
    if (montoRecibido < total) {
      return res.status(400).json({
        error: 'Monto recibido insuficiente',
        montoRecibido,
        total,
      });
    }
    const cambio = redondear2(montoRecibido - total);

    const { pago, pagoEfectivo } = await prisma.$transaction(async (tx: any) => {
      const pagoBase = compra.pago
        ? await tx.pagoPasajero.update({
            where: { id: compra.pago.id },
            data: { metodo: 'EFECTIVO', estado: 'PENDIENTE', monto: compra.total },
          })
        : await tx.pagoPasajero.create({
            data: {
              compraId: compra.id,
              monto: compra.total,
              metodo: 'EFECTIVO',
              estado: 'PENDIENTE',
            },
          });

      const pagoEf = await tx.pagoEfectivo.create({
        data: {
          pagoId: pagoBase.id,
          vendedorId,
          montoRecibido,
          cambio,
          canalVenta: 'OFICINA',
          turnoId: compra.turnoId,
        },
      });

      return { pago: pagoBase, pagoEfectivo: pagoEf };
    });

    const resultado = await confirmarPagoYOcuparAsientos(compra.id, pago.id);

    const boletos = await prisma.boleto.findMany({
      where: { compraId: compra.id },
      select: {
        id: true,
        uuidQr: true,
        nombrePasajero: true,
        cedulaPasajero: true,
        tipoTarifa: true,
        estado: true,
      },
    });

    return res.status(201).json({
      compraId: compra.id,
      pagoId: pago.id,
      pagoEfectivoId: pagoEfectivo.id,
      vendedorId,
      canalVenta: 'OFICINA',
      turnoId: compra.turnoId,
      total,
      montoRecibido,
      cambio,
      asientosOcupados: resultado?.asientosOcupados ?? 0,
      boletos,
    });
  } catch (error) {
    console.error('Error al cobrar efectivo en oficina:', error);
    return res.status(500).json({ error: 'Error interno al registrar el cobro' });
  }
};
