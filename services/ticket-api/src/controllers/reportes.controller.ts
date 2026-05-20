import { Request, Response } from 'express';
import { z } from 'zod';
import PDFDocument from 'pdfkit';
import ExcelJS from 'exceljs';
import prisma from '../services/prisma';
import { getCooperativasMap } from '../services/busApiClient';

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const CHANNELS = ['WEB', 'OFICINA', 'BUS'] as const;
const PASSENGER_TYPES = ['NORMAL', 'TERCERA_EDAD', 'DISCAPACIDAD', 'MENOR', 'ESTUDIANTE'] as const;
const FILTER_PASSENGER_TYPES = ['NORMAL', 'TERCERA_EDAD', 'DISCAPACIDAD', 'MENOR', 'ESTUDIANTE', 'TODOS'] as const;

type CanalReporte = (typeof CHANNELS)[number];
type TipoPasajeroFiltro = (typeof FILTER_PASSENGER_TYPES)[number];

const reportesQuerySchema = z.object({
  fechaDesde: z.string().regex(DATE_REGEX).optional(),
  fechaHasta: z.string().regex(DATE_REGEX).optional(),
  cooperativaId: z.string().optional(),
  canal: z.enum(['WEB', 'OFICINA', 'BUS', 'TODOS']).default('TODOS'),
  tipoPasajero: z.enum(FILTER_PASSENGER_TYPES).default('TODOS'),
  groupBy: z.string().optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(10000).default(50),
});

type ReporteQuery = z.infer<typeof reportesQuerySchema>;

type ReportRow = {
  compraId: number;
  boletoId: number;
  fechaCompra: string;
  fechaViaje: string;
  cooperativaId: number;
  cooperativaNombre: string;
  canal: CanalReporte;
  tipoPasajero: string;
  estadoBoleto: string;
  monto: number;
};

function startOfCurrentMonth(): string {
  const now = new Date();
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-01`;
}

function endOfCurrentMonth(): string {
  const now = new Date();
  const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0));
  return `${end.getUTCFullYear()}-${String(end.getUTCMonth() + 1).padStart(2, '0')}-${String(end.getUTCDate()).padStart(2, '0')}`;
}

function parseAdminContext(req: Request) {
  const role = (req.header('x-user-role') || '').trim().toUpperCase();
  const userId = Number(req.header('x-user-id') || '0');
  const cooperativasIds = (req.header('x-cooperativas-ids') || '')
    .split(',')
    .map((value) => Number(value.trim()))
    .filter((value, index, arr) => Number.isInteger(value) && value > 0 && arr.indexOf(value) === index);

  return { role, userId, cooperativasIds };
}

function parseCooperativaId(raw: string | undefined): number | 'TODOS' {
  if (!raw || raw === 'TODOS') return 'TODOS';
  const parsed = Number(raw);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error('cooperativaId invalido');
  }
  return parsed;
}

function toUtcRange(date: string, endOfDay = false): Date {
  return new Date(`${date}T${endOfDay ? '23:59:59.999' : '00:00:00.000'}Z`);
}

function isValidDateString(date: string): boolean {
  if (!DATE_REGEX.test(date)) return false;
  const [year, month, day] = date.split('-').map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day
  );
}

function normalizeCanal(compraCanal: string, canalVenta: string | null | undefined): CanalReporte {
  if (canalVenta === 'BUS' || compraCanal === 'OFICIAL') return 'BUS';
  if (canalVenta === 'OFICINA' || compraCanal === 'OFICINISTA') return 'OFICINA';
  return 'WEB';
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

function formatDate(value: Date | string): string {
  const date = value instanceof Date ? value : new Date(value);
  return date.toISOString().slice(0, 10);
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

function createEmptyResponse(filtros: {
  fechaDesde: string;
  fechaHasta: string;
  cooperativaId: number | 'TODOS';
  canal: string;
  tipoPasajero: string;
  page: number;
  limit: number;
}) {
  return {
    filtros,
    criterioEstadosBoleto: ['VIGENTE', 'UTILIZADO'],
    pagination: {
      page: filtros.page,
      limit: filtros.limit,
      total: 0,
      totalPages: 0,
    },
    totales: {
      cantidadBoletos: 0,
      montoTotal: 0,
    },
    agrupadoPorCanal: [] as Array<{ canal: string; cantidadBoletos: number; montoTotal: number }>,
    agrupadoPorTipoPasajero: [] as Array<{ tipoPasajero: string; cantidadBoletos: number; montoTotal: number }>,
    detalle: [] as ReportRow[],
  };
}

async function buildReporte(rawQuery: Request['query'], headers: ReturnType<typeof parseAdminContext>) {
  if (headers.role !== 'ADMIN') {
    return { error: { status: 403, body: { error: 'Acceso restringido al rol ADMIN' } } };
  }

  const parse = reportesQuerySchema.safeParse(rawQuery);
  if (!parse.success) {
    return { error: { status: 400, body: { error: 'Query invalida', detalles: parse.error.flatten() } } };
  }

  const query = parse.data;
  const fechaDesde = query.fechaDesde ?? startOfCurrentMonth();
  const fechaHasta = query.fechaHasta ?? endOfCurrentMonth();

  if (!isValidDateString(fechaDesde) || !isValidDateString(fechaHasta)) {
    return { error: { status: 400, body: { error: 'fechaDesde y fechaHasta deben usar YYYY-MM-DD' } } };
  }

  if (toUtcRange(fechaDesde).getTime() > toUtcRange(fechaHasta, true).getTime()) {
    return { error: { status: 400, body: { error: 'fechaDesde no puede ser mayor que fechaHasta' } } };
  }

  let cooperativaId: number | 'TODOS';
  try {
    cooperativaId = parseCooperativaId(query.cooperativaId);
  } catch {
    return { error: { status: 400, body: { error: 'cooperativaId invalido' } } };
  }

  if (cooperativaId !== 'TODOS' && !headers.cooperativasIds.includes(cooperativaId)) {
    return { error: { status: 403, body: { error: 'La cooperativa solicitada no pertenece al administrador' } } };
  }

  if (query.tipoPasajero === 'ESTUDIANTE') {
    return {
      data: createEmptyResponse({
        fechaDesde,
        fechaHasta,
        cooperativaId,
        canal: query.canal,
        tipoPasajero: query.tipoPasajero,
        page: query.page,
        limit: query.limit,
      }),
    };
  }

  const boletos = await prisma.boleto.findMany({
    where: {
      estado: { in: ['VIGENTE', 'UTILIZADO'] },
      ...(query.tipoPasajero !== 'TODOS' && String(query.tipoPasajero) !== 'ESTUDIANTE'
        ? { tipoTarifa: query.tipoPasajero }
        : {}),
      compra: {
        creadoEn: {
          gte: toUtcRange(fechaDesde),
          lte: toUtcRange(fechaHasta, true),
        },
      },
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

  if (!boletos.length || headers.cooperativasIds.length === 0) {
    return {
      data: createEmptyResponse({
        fechaDesde,
        fechaHasta,
        cooperativaId,
        canal: query.canal,
        tipoPasajero: query.tipoPasajero,
        page: query.page,
        limit: query.limit,
      }),
    };
  }

  const turnoIds = boletos
    .map((boleto: any) => boleto.compra.turnoId)
    .filter((value: number | null) => Number.isInteger(value));
  const frecuenciaIds = boletos
    .map((boleto: any) => boleto.compra.frecuenciaId)
    .filter((value: number | null) => Number.isInteger(value));

  const cooperativasMap = await getCooperativasMap({
    turnoIds: turnoIds as number[],
    frecuenciaIds: frecuenciaIds as number[],
    cooperativaIds: headers.cooperativasIds,
  });

  const turnosLookup = new Map(cooperativasMap.turnos.map((item) => [item.turnoId, item]));
  const frecuenciasLookup = new Map(
    cooperativasMap.frecuencias.map((item) => [item.frecuenciaId, item])
  );
  const amountForBoleto = buildAmountAllocator();

  const rows: ReportRow[] = [];

  for (const boleto of boletos as any[]) {
    const compra = boleto.compra;
    const canal = normalizeCanal(compra.canal, compra.pago?.pagoEfectivo?.canalVenta);
    const cooperativaInfo =
      (compra.turnoId ? turnosLookup.get(compra.turnoId) : undefined) ??
      frecuenciasLookup.get(compra.frecuenciaId);

    if (!cooperativaInfo) continue;
    if (!headers.cooperativasIds.includes(cooperativaInfo.cooperativaId)) continue;
    if (cooperativaId !== 'TODOS' && cooperativaInfo.cooperativaId !== cooperativaId) continue;
    if (query.canal !== 'TODOS' && canal !== query.canal) continue;
    if (query.tipoPasajero !== 'TODOS' && boleto.tipoTarifa !== query.tipoPasajero) continue;

    const monto = amountForBoleto(
      compra.id,
      Number(compra.total),
      compra.boletos.map((item: { id: number }) => item.id),
      boleto.id
    );

    rows.push({
      compraId: compra.id,
      boletoId: boleto.id,
      fechaCompra: formatDate(compra.creadoEn),
      fechaViaje: formatDate(compra.fechaViaje),
      cooperativaId: cooperativaInfo.cooperativaId,
      cooperativaNombre: cooperativaInfo.cooperativaNombre,
      canal,
      tipoPasajero: String(boleto.tipoTarifa),
      estadoBoleto: String(boleto.estado),
      monto: round2(monto),
    });
  }

  const byCanal = new Map<string, { canal: string; cantidadBoletos: number; montoTotal: number }>();
  const byTipo = new Map<
    string,
    { tipoPasajero: string; cantidadBoletos: number; montoTotal: number }
  >();

  let montoTotal = 0;
  for (const row of rows) {
    montoTotal += row.monto;

    const canalActual = byCanal.get(row.canal) ?? {
      canal: row.canal,
      cantidadBoletos: 0,
      montoTotal: 0,
    };
    canalActual.cantidadBoletos += 1;
    canalActual.montoTotal = round2(canalActual.montoTotal + row.monto);
    byCanal.set(row.canal, canalActual);

    const tipoActual = byTipo.get(row.tipoPasajero) ?? {
      tipoPasajero: row.tipoPasajero,
      cantidadBoletos: 0,
      montoTotal: 0,
    };
    tipoActual.cantidadBoletos += 1;
    tipoActual.montoTotal = round2(tipoActual.montoTotal + row.monto);
    byTipo.set(row.tipoPasajero, tipoActual);
  }

  const total = rows.length;
  const totalPages = total === 0 ? 0 : Math.ceil(total / query.limit);
  const start = (query.page - 1) * query.limit;
  const detalle = rows.slice(start, start + query.limit);

  return {
    data: {
      filtros: {
        fechaDesde,
        fechaHasta,
        cooperativaId,
        canal: query.canal,
        tipoPasajero: query.tipoPasajero,
        groupBy: query.groupBy ?? 'canal,tipoPasajero',
      },
      criterioEstadosBoleto: ['VIGENTE', 'UTILIZADO'],
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages,
      },
      totales: {
        cantidadBoletos: total,
        montoTotal: round2(montoTotal),
      },
      agrupadoPorCanal: CHANNELS.map((canal) => byCanal.get(canal))
        .filter(Boolean)
        .map((item) => item as { canal: string; cantidadBoletos: number; montoTotal: number }),
      agrupadoPorTipoPasajero: PASSENGER_TYPES.map((tipo) => byTipo.get(tipo))
        .filter(Boolean)
        .map(
          (item) =>
            item as { tipoPasajero: string; cantidadBoletos: number; montoTotal: number }
        ),
      detalle,
    },
  };
}

async function pdfBufferFromReport(report: Awaited<ReturnType<typeof buildReporte>>['data']) {
  const doc = new PDFDocument({ margin: 40, size: 'A4' });
  const chunks: Buffer[] = [];

  const buffer = await new Promise<Buffer>((resolve, reject) => {
    doc.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    doc.fontSize(18).text('Reporte de boletos por cooperativa y canal');
    doc.moveDown(0.4);
    doc.fontSize(10).text(`Sistema: Proyecto SaaS - Ticket API`);
    doc.text(`Fecha de generacion: ${new Date().toISOString()}`);
    doc.text(
      `Filtros: ${report?.filtros.fechaDesde} a ${report?.filtros.fechaHasta} | Cooperativa: ${report?.filtros.cooperativaId} | Canal: ${report?.filtros.canal} | Tipo: ${report?.filtros.tipoPasajero}`
    );
    doc.text(`Criterio de boletos: ${report?.criterioEstadosBoleto.join(', ')}`);
    doc.moveDown();

    doc.fontSize(12).text('Totales generales', { underline: true });
    doc.fontSize(10).text(`Cantidad de boletos: ${report?.totales.cantidadBoletos}`);
    doc.text(`Monto total: $${report?.totales.montoTotal.toFixed(2)}`);
    doc.moveDown();

    doc.fontSize(12).text('Subtotales por canal', { underline: true });
    report?.agrupadoPorCanal.forEach((item) => {
      doc.fontSize(10).text(
        `${item.canal}: ${item.cantidadBoletos} boletos | $${item.montoTotal.toFixed(2)}`
      );
    });
    doc.moveDown();

    doc.fontSize(12).text('Subtotales por tipo de pasajero', { underline: true });
    report?.agrupadoPorTipoPasajero.forEach((item) => {
      doc.fontSize(10).text(
        `${item.tipoPasajero}: ${item.cantidadBoletos} boletos | $${item.montoTotal.toFixed(2)}`
      );
    });
    doc.moveDown();

    doc.fontSize(12).text('Detalle resumido', { underline: true });
    doc.moveDown(0.5);
    report?.detalle.forEach((item) => {
      doc
        .fontSize(9)
        .text(
          `Compra #${item.compraId} | Boleto #${item.boletoId} | ${item.cooperativaNombre} | ${item.canal} | ${item.tipoPasajero} | ${item.estadoBoleto} | $${item.monto.toFixed(2)}`
        );
    });

    doc.end();
  });

  return buffer;
}

async function excelBufferFromReport(report: Awaited<ReturnType<typeof buildReporte>>['data']) {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Codex';
  workbook.created = new Date();

  const resumen = workbook.addWorksheet('Resumen');
  resumen.addRows([
    ['Reporte de boletos por cooperativa y canal'],
    ['Fecha de generacion', new Date().toISOString()],
    ['Fecha desde', report?.filtros.fechaDesde ?? ''],
    ['Fecha hasta', report?.filtros.fechaHasta ?? ''],
    ['Cooperativa', String(report?.filtros.cooperativaId ?? '')],
    ['Canal', report?.filtros.canal ?? ''],
    ['Tipo pasajero', report?.filtros.tipoPasajero ?? ''],
    [],
    ['Cantidad boletos', report?.totales.cantidadBoletos ?? 0],
    ['Monto total', report?.totales.montoTotal ?? 0],
  ]);

  const porCanal = workbook.addWorksheet('Por canal');
  porCanal.columns = [
    { header: 'Canal', key: 'canal', width: 16 },
    { header: 'Cantidad boletos', key: 'cantidadBoletos', width: 18 },
    { header: 'Monto total', key: 'montoTotal', width: 16 },
  ];
  porCanal.addRows(report?.agrupadoPorCanal ?? []);

  const porTipo = workbook.addWorksheet('Por tipo pasajero');
  porTipo.columns = [
    { header: 'Tipo pasajero', key: 'tipoPasajero', width: 20 },
    { header: 'Cantidad boletos', key: 'cantidadBoletos', width: 18 },
    { header: 'Monto total', key: 'montoTotal', width: 16 },
  ];
  porTipo.addRows(report?.agrupadoPorTipoPasajero ?? []);

  const detalle = workbook.addWorksheet('Detalle');
  detalle.columns = [
    { header: 'Compra ID', key: 'compraId', width: 12 },
    { header: 'Boleto ID', key: 'boletoId', width: 12 },
    { header: 'Fecha compra', key: 'fechaCompra', width: 14 },
    { header: 'Fecha viaje', key: 'fechaViaje', width: 14 },
    { header: 'Cooperativa ID', key: 'cooperativaId', width: 16 },
    { header: 'Cooperativa', key: 'cooperativaNombre', width: 28 },
    { header: 'Canal', key: 'canal', width: 14 },
    { header: 'Tipo pasajero', key: 'tipoPasajero', width: 18 },
    { header: 'Estado boleto', key: 'estadoBoleto', width: 16 },
    { header: 'Monto', key: 'monto', width: 12 },
  ];
  detalle.addRows(report?.detalle ?? []);

  return Buffer.from(await workbook.xlsx.writeBuffer());
}

export const obtenerReporteBoletos = async (req: Request, res: Response) => {
  try {
    const result = await buildReporte(req.query, parseAdminContext(req));
    const maybeError = (result as { error?: { status: number; body: unknown } }).error;
    if (maybeError) {
      return res.status(maybeError.status).json(maybeError.body);
    }
    const reportData = (result as { data?: unknown }).data;
    return res.json(reportData);
  } catch (error) {
    console.error('Error al obtener reporte de boletos:', error);
    return res.status(500).json({ error: 'Error interno al generar el reporte' });
  }
};

export const exportarReporteBoletosPdf = async (req: Request, res: Response) => {
  try {
    const result = await buildReporte(
      { ...req.query, page: '1', limit: '10000' },
      parseAdminContext(req)
    );
    const maybeError = (result as { error?: { status: number; body: unknown } }).error;
    if (maybeError) {
      return res.status(maybeError.status).json(maybeError.body);
    }
    const reportData = (result as { data?: any }).data;
    const pdf = await pdfBufferFromReport(reportData);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="reporte-boletos.pdf"');
    return res.send(pdf);
  } catch (error) {
    console.error('Error al exportar reporte PDF:', error);
    return res.status(500).json({ error: 'Error interno al exportar PDF' });
  }
};

export const exportarReporteBoletosExcel = async (req: Request, res: Response) => {
  try {
    const result = await buildReporte(
      { ...req.query, page: '1', limit: '10000' },
      parseAdminContext(req)
    );
    const maybeError = (result as { error?: { status: number; body: unknown } }).error;
    if (maybeError) {
      return res.status(maybeError.status).json(maybeError.body);
    }
    const reportData = (result as { data?: any }).data;
    const excel = await excelBufferFromReport(reportData);
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader('Content-Disposition', 'attachment; filename="reporte-boletos.xlsx"');
    return res.send(excel);
  } catch (error) {
    console.error('Error al exportar reporte Excel:', error);
    return res.status(500).json({ error: 'Error interno al exportar Excel' });
  }
};
