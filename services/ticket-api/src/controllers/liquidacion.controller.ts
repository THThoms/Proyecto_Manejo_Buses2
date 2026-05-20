import { Request, Response } from 'express';
import PDFDocument from 'pdfkit';
import { z } from 'zod';
import prisma from '../services/prisma';
import {
  BusApiError,
  getCooperativaById,
  getCooperativasMap,
} from '../services/busApiClient';

const VALID_BOLETO_STATES = ['VIGENTE', 'UTILIZADO'] as const;

const liquidacionQuerySchema = z.object({
  cooperativaId: z.coerce.number().int().positive(),
  year: z.coerce.number().int().min(2000).max(9999),
  month: z.coerce.number().int().min(1).max(12),
});

type LiquidacionDetailRow = {
  compraId: number;
  boletoId: number;
  fechaVenta: string;
  fechaViaje: string;
  tipoPasajero: string;
  estadoBoleto: string;
  monto: number;
};

type LiquidacionResponse = {
  cooperativa: {
    id: number;
    nombre: string;
    ruc: string | null;
    cuentaBancaria: {
      banco: string;
      tipo: string;
      numero: string;
    };
  };
  periodo: {
    year: number;
    month: number;
    desde: string;
    hasta: string;
  };
  criterioBoletos: string[];
  criterioFecha: string;
  totales: {
    cantidadBoletos: number;
    montoTotal: number;
  };
  desglosePorTipoPasajero: Array<{
    tipoPasajero: string;
    cantidadBoletos: number;
    montoTotal: number;
  }>;
  detalle: LiquidacionDetailRow[];
};

type LiquidacionResult =
  | { data: LiquidacionResponse }
  | { error: { status: number; body: Record<string, unknown> } };

function parseAdminContext(req: Request) {
  const role = (req.header('x-user-role') || '').trim().toUpperCase();
  const userId = Number(req.header('x-user-id') || '0');
  const cooperativasIds = (req.header('x-cooperativas-ids') || '')
    .split(',')
    .map((value) => Number(value.trim()))
    .filter((value, index, arr) => Number.isInteger(value) && value > 0 && arr.indexOf(value) === index);

  return { role, userId, cooperativasIds };
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

function formatDate(value: Date | string): string {
  const date = value instanceof Date ? value : new Date(value);
  return date.toISOString().slice(0, 10);
}

function maskAccountNumber(value: string | null | undefined): string {
  if (!value) return 'NO_REGISTRADA';
  const compact = value.replace(/\s+/g, '');
  if (compact.length <= 4) return compact;
  return `****${compact.slice(-4)}`;
}

function normalizeCuentaBancaria(value: string | null | undefined) {
  if (!value) {
    return {
      banco: 'NO_REGISTRADO',
      tipo: 'NO_REGISTRADO',
      numero: 'NO_REGISTRADA',
    };
  }

  const parsed = value
    .split(/[|;/]/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parsed.length >= 3) {
    return {
      banco: parsed[0] || 'NO_REGISTRADO',
      tipo: parsed[1] || 'NO_REGISTRADO',
      numero: maskAccountNumber(parsed.slice(2).join(' ')),
    };
  }

  return {
    banco: 'NO_REGISTRADO',
    tipo: 'NO_REGISTRADO',
    numero: maskAccountNumber(value),
  };
}

function getPeriodoMensual(year: number, month: number) {
  const desde = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0));
  const hasta = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));
  const now = new Date();
  const inicioMesActual = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1, 0, 0, 0, 0));

  if (desde.getTime() >= inicioMesActual.getTime()) {
    throw new Error('Solo se permiten meses calendario pasados');
  }

  return { desde, hasta };
}

function buildAmountAllocator() {
  const cache = new Map<number, Map<number, number>>();

  return (compraId: number, total: number, boletoIds: number[], boletoId: number): number => {
    let purchaseMap = cache.get(compraId);
    if (!purchaseMap) {
      const ids = [...boletoIds].sort((a, b) => a - b);
      const totalCents = Math.round(total * 100);
      const base = ids.length > 0 ? Math.floor(totalCents / ids.length) : totalCents;
      const remainder = ids.length > 0 ? totalCents - base * ids.length : 0;
      purchaseMap = new Map<number, number>();
      ids.forEach((id, index) => {
        const cents = base + (index < remainder ? 1 : 0);
        purchaseMap!.set(id, cents / 100);
      });
      cache.set(compraId, purchaseMap);
    }
    return purchaseMap.get(boletoId) ?? 0;
  };
}

async function buildLiquidacion(rawQuery: Request['query'], headers: ReturnType<typeof parseAdminContext>): Promise<LiquidacionResult> {
  if (headers.role !== 'ADMIN') {
    return { error: { status: 403, body: { error: 'Acceso restringido al rol ADMIN' } } };
  }

  const parse = liquidacionQuerySchema.safeParse(rawQuery);
  if (!parse.success) {
    return {
      error: {
        status: 400,
        body: { error: 'Query invalida', detalles: parse.error.flatten() },
      },
    };
  }

  const { cooperativaId, year, month } = parse.data;

  if (!headers.cooperativasIds.includes(cooperativaId)) {
    return {
      error: {
        status: 403,
        body: { error: 'La cooperativa solicitada no pertenece al administrador' },
      },
    };
  }

  let periodo: { desde: Date; hasta: Date };
  try {
    periodo = getPeriodoMensual(year, month);
  } catch (error) {
    return {
      error: {
        status: 400,
        body: { error: error instanceof Error ? error.message : 'Periodo invalido' },
      },
    };
  }

  let cooperativaDetalle: Awaited<ReturnType<typeof getCooperativaById>>;
  try {
    cooperativaDetalle = await getCooperativaById(cooperativaId);
  } catch (error) {
    const status = error instanceof BusApiError ? error.status : 502;
    return {
      error: {
        status: status >= 500 ? 502 : 502,
        body: { error: 'No se pudo obtener la cooperativa desde bus-api' },
      },
    };
  }

  const boletos = await prisma.boleto.findMany({
    where: {
      estado: { in: [...VALID_BOLETO_STATES] },
      compra: { estado: 'CONFIRMADA' },
    },
    include: {
      compra: {
        include: {
          pago: {
            include: {
              pagoEfectivo: true,
            },
          },
          boletos: {
            select: { id: true },
          },
        },
      },
    },
    orderBy: [{ creadoEn: 'desc' }, { id: 'desc' }],
  });

  const turnoIds = boletos
    .map((boleto: any) => boleto.compra.turnoId)
    .filter((value: number | null) => Number.isInteger(value));
  const frecuenciaIds = boletos
    .map((boleto: any) => boleto.compra.frecuenciaId)
    .filter((value: number | null) => Number.isInteger(value));

  const cooperativasMap = await getCooperativasMap({
    turnoIds: turnoIds as number[],
    frecuenciaIds: frecuenciaIds as number[],
    cooperativaIds: [cooperativaId],
  });

  const turnosLookup = new Map(cooperativasMap.turnos.map((item) => [item.turnoId, item]));
  const frecuenciasLookup = new Map(
    cooperativasMap.frecuencias.map((item) => [item.frecuenciaId, item])
  );
  const amountForBoleto = buildAmountAllocator();
  const detalle: LiquidacionDetailRow[] = [];

  for (const boleto of boletos as any[]) {
    if (!VALID_BOLETO_STATES.includes(boleto.estado)) continue;

    const compra = boleto.compra;
    const cooperativaInfo =
      (compra.turnoId ? turnosLookup.get(compra.turnoId) : undefined) ??
      frecuenciasLookup.get(compra.frecuenciaId);

    if (!cooperativaInfo || cooperativaInfo.cooperativaId !== cooperativaId) {
      continue;
    }

    if (compra.pago && compra.pago.estado !== 'APROBADO') {
      continue;
    }

    const fechaVentaBase =
      compra.pago?.estado === 'APROBADO' && compra.pago?.pagadoEn
        ? new Date(compra.pago.pagadoEn)
        : new Date(compra.creadoEn);

    if (
      fechaVentaBase.getTime() < periodo.desde.getTime() ||
      fechaVentaBase.getTime() > periodo.hasta.getTime()
    ) {
      continue;
    }

    const monto = amountForBoleto(
      compra.id,
      Number(compra.total),
      compra.boletos.map((item: { id: number }) => item.id),
      boleto.id
    );

    detalle.push({
      compraId: compra.id,
      boletoId: boleto.id,
      fechaVenta: formatDate(fechaVentaBase),
      fechaViaje: formatDate(compra.fechaViaje),
      tipoPasajero: String(boleto.tipoTarifa),
      estadoBoleto: String(boleto.estado),
      monto: round2(monto),
    });
  }

  const desgloseMap = new Map<
    string,
    { tipoPasajero: string; cantidadBoletos: number; montoTotal: number }
  >();
  let montoTotal = 0;

  for (const item of detalle) {
    montoTotal += item.monto;
    const actual = desgloseMap.get(item.tipoPasajero) ?? {
      tipoPasajero: item.tipoPasajero,
      cantidadBoletos: 0,
      montoTotal: 0,
    };
    actual.cantidadBoletos += 1;
    actual.montoTotal = round2(actual.montoTotal + item.monto);
    desgloseMap.set(item.tipoPasajero, actual);
  }

  return {
    data: {
      cooperativa: {
        id: cooperativaDetalle.id,
        nombre: cooperativaDetalle.nombre,
        ruc: cooperativaDetalle.ruc ?? null,
        cuentaBancaria: normalizeCuentaBancaria(cooperativaDetalle.cuentaBancaria ?? null),
      },
      periodo: {
        year,
        month,
        desde: formatDate(periodo.desde),
        hasta: formatDate(periodo.hasta),
      },
      criterioBoletos: [...VALID_BOLETO_STATES],
      criterioFecha: 'Se usa pago.pagadoEn cuando existe; si no, compra.creadoEn.',
      totales: {
        cantidadBoletos: detalle.length,
        montoTotal: round2(montoTotal),
      },
      desglosePorTipoPasajero: Array.from(desgloseMap.values()),
      detalle,
    },
  };
}

async function pdfBufferFromLiquidacion(liquidacion: LiquidacionResponse, cooperativaId: number) {
  const doc = new PDFDocument({ margin: 40, size: 'A4' });
  const chunks: Buffer[] = [];

  return new Promise<Buffer>((resolve, reject) => {
    doc.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    doc.fontSize(10).text('Proyecto SaaS - Sistema de Tickets de Bus');
    doc.moveDown(0.4);
    doc.fontSize(18).text('Liquidacion mensual por cooperativa');
    doc.moveDown(0.4);
    doc.fontSize(10).text(`Fecha de generacion: ${new Date().toISOString()}`);
    doc.text(`Cooperativa #${cooperativaId}`);
    doc.moveDown();

    doc.fontSize(12).text('Cooperativa', { underline: true });
    doc.fontSize(10).text(`Nombre: ${liquidacion.cooperativa.nombre}`);
    doc.text(`RUC: ${liquidacion.cooperativa.ruc ?? 'No registrado'}`);
    doc.text(
      `Cuenta bancaria: ${liquidacion.cooperativa.cuentaBancaria.banco} | ${liquidacion.cooperativa.cuentaBancaria.tipo} | ${liquidacion.cooperativa.cuentaBancaria.numero}`
    );
    doc.moveDown();

    doc.fontSize(12).text('Periodo liquidado', { underline: true });
    doc.fontSize(10).text(
      `${liquidacion.periodo.desde} a ${liquidacion.periodo.hasta} (${liquidacion.periodo.year}-${String(liquidacion.periodo.month).padStart(2, '0')})`
    );
    doc.moveDown();

    doc.fontSize(12).text('Totales', { underline: true });
    doc.fontSize(10).text(`Boletos vendidos: ${liquidacion.totales.cantidadBoletos}`);
    doc.text(`Monto total: $${liquidacion.totales.montoTotal.toFixed(2)}`);
    doc.moveDown();

    doc.fontSize(12).text('Desglose por tipo de pasajero', { underline: true });
    liquidacion.desglosePorTipoPasajero.forEach((item) => {
      doc
        .fontSize(10)
        .text(
          `${item.tipoPasajero}: ${item.cantidadBoletos} boletos | $${item.montoTotal.toFixed(2)}`
        );
    });
    doc.moveDown();

    doc.fontSize(12).text('Tabla resumen de ventas', { underline: true });
    liquidacion.detalle.forEach((item) => {
      doc
        .fontSize(9)
        .text(
          `Compra #${item.compraId} | Boleto #${item.boletoId} | ${item.fechaVenta} | ${item.tipoPasajero} | ${item.estadoBoleto} | $${item.monto.toFixed(2)}`
        );
    });
    doc.moveDown();
    doc.fontSize(10).text('Revision: ______________________________');
    doc.text('Documento generado automaticamente');

    doc.end();
  });
}

export const obtenerLiquidacionCooperativa = async (req: Request, res: Response) => {
  try {
    const result = await buildLiquidacion(req.query, parseAdminContext(req));
    if ('error' in result) {
      return res.status(result.error.status).json(result.error.body);
    }
    return res.json(result.data);
  } catch (error) {
    console.error('Error al generar liquidacion:', error);
    return res.status(500).json({ error: 'Error interno al generar la liquidacion' });
  }
};

export const exportarLiquidacionCooperativaPdf = async (req: Request, res: Response) => {
  try {
    const result = await buildLiquidacion(req.query, parseAdminContext(req));
    if ('error' in result) {
      return res.status(result.error.status).json(result.error.body);
    }

    const pdf = await pdfBufferFromLiquidacion(
      result.data,
      Number(req.query.cooperativaId || result.data.cooperativa.id)
    );
    const year = String(result.data.periodo.year);
    const month = String(result.data.periodo.month).padStart(2, '0');
    const filename = `liquidacion-cooperativa-${result.data.cooperativa.id}-${year}-${month}.pdf`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    return res.send(pdf);
  } catch (error) {
    console.error('Error al exportar liquidacion PDF:', error);
    return res.status(500).json({ error: 'Error interno al exportar la liquidacion' });
  }
};
