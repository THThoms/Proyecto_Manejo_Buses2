// US19: handlers de los 3 endpoints de reporte. Comparten parser de filtros y
// validación de permisos sobre la cooperativa solicitada.

import { Request, Response } from 'express';
import {
  generarReporte,
  CANALES_REPORTE,
  TIPOS_PASAJERO_VALIDOS,
  type FiltrosReporte,
  type CanalReporte,
  type TipoPasajero,
} from '../services/reportesService';
import { generarPdfReporte } from '../services/pdfReporteService';
import { generarExcelReporte } from '../services/excelReporteService';

interface FiltrosParseados {
  ok: true;
  filtros: FiltrosReporte;
}
interface FiltrosError {
  ok: false;
  status: number;
  body: Record<string, unknown>;
}

function parseFiltros(req: Request): FiltrosParseados | FiltrosError {
  const admin = req.adminUser!; // garantizado por requireAdmin

  // Rango por defecto: mes calendario actual.
  const ahora = new Date();
  const inicioMes = new Date(ahora.getFullYear(), ahora.getMonth(), 1, 0, 0, 0, 0);
  const finMes = new Date(ahora.getFullYear(), ahora.getMonth() + 1, 0, 23, 59, 59, 999);

  const fechaDesdeStr = req.query.fechaDesde as string | undefined;
  const fechaHastaStr = req.query.fechaHasta as string | undefined;

  let fechaDesde: Date;
  let fechaHasta: Date;
  if (fechaDesdeStr || fechaHastaStr) {
    if (!fechaDesdeStr || !fechaHastaStr) {
      return { ok: false, status: 400, body: { error: 'fechaDesde y fechaHasta van juntas' } };
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaDesdeStr) || !/^\d{4}-\d{2}-\d{2}$/.test(fechaHastaStr)) {
      return { ok: false, status: 400, body: { error: 'fechas deben ser YYYY-MM-DD' } };
    }
    fechaDesde = new Date(`${fechaDesdeStr}T00:00:00.000Z`);
    fechaHasta = new Date(`${fechaHastaStr}T23:59:59.999Z`);
    if (Number.isNaN(fechaDesde.getTime()) || Number.isNaN(fechaHasta.getTime())) {
      return { ok: false, status: 400, body: { error: 'fechas inválidas' } };
    }
    if (fechaDesde > fechaHasta) {
      return { ok: false, status: 400, body: { error: 'fechaDesde no puede ser mayor que fechaHasta' } };
    }
  } else {
    fechaDesde = inicioMes;
    fechaHasta = finMes;
  }

  // cooperativaId
  const coopRaw = (req.query.cooperativaId as string | undefined)?.toUpperCase();
  let cooperativaId: number | 'TODOS';
  if (!coopRaw || coopRaw === 'TODOS') {
    cooperativaId = 'TODOS';
  } else {
    const n = Number(req.query.cooperativaId);
    if (!Number.isInteger(n) || n <= 0) {
      return { ok: false, status: 400, body: { error: 'cooperativaId inválido' } };
    }
    if (!admin.cooperativasIds.includes(n)) {
      return { ok: false, status: 403, body: { error: 'cooperativaId fuera del scope asignado' } };
    }
    cooperativaId = n;
  }

  // canal
  const canalRaw = ((req.query.canal as string | undefined) ?? 'TODOS').toUpperCase();
  let canal: CanalReporte | 'TODOS';
  if (canalRaw === 'TODOS') canal = 'TODOS';
  else if ((CANALES_REPORTE as readonly string[]).includes(canalRaw)) canal = canalRaw as CanalReporte;
  else return { ok: false, status: 400, body: { error: 'canal inválido (WEB|OFICINA|BUS|TODOS)' } };

  // tipoPasajero
  const tipoRaw = ((req.query.tipoPasajero as string | undefined) ?? 'TODOS').toUpperCase();
  let tipoPasajero: TipoPasajero | 'TODOS';
  if (tipoRaw === 'TODOS') tipoPasajero = 'TODOS';
  else if ((TIPOS_PASAJERO_VALIDOS as readonly string[]).includes(tipoRaw)) tipoPasajero = tipoRaw as TipoPasajero;
  else return { ok: false, status: 400, body: { error: 'tipoPasajero inválido' } };

  return {
    ok: true,
    filtros: {
      fechaDesde,
      fechaHasta,
      cooperativaId,
      canal,
      tipoPasajero,
      cooperativasPermitidas: admin.cooperativasIds,
    },
  };
}

// GET /reportes/boletos
export const reporteBoletosJson = async (req: Request, res: Response) => {
  const parsed = parseFiltros(req);
  if (!parsed.ok) return res.status(parsed.status).json(parsed.body);
  try {
    const reporte = await generarReporte(parsed.filtros);
    return res.json(reporte);
  } catch (err) {
    console.error('Error en reporteBoletosJson:', err);
    return res.status(500).json({ error: 'Error interno generando reporte' });
  }
};

// GET /reportes/boletos/pdf
export const reporteBoletosPdf = async (req: Request, res: Response) => {
  const parsed = parseFiltros(req);
  if (!parsed.ok) return res.status(parsed.status).json(parsed.body);
  try {
    const reporte = await generarReporte(parsed.filtros);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="reporte-boletos.pdf"');
    const stream = generarPdfReporte(reporte);
    stream.pipe(res);
  } catch (err) {
    console.error('Error en reporteBoletosPdf:', err);
    return res.status(500).json({ error: 'Error interno generando PDF' });
  }
};

// GET /reportes/boletos/excel
export const reporteBoletosExcel = async (req: Request, res: Response) => {
  const parsed = parseFiltros(req);
  if (!parsed.ok) return res.status(parsed.status).json(parsed.body);
  try {
    const reporte = await generarReporte(parsed.filtros);
    const buffer = await generarExcelReporte(reporte);
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', 'attachment; filename="reporte-boletos.xlsx"');
    return res.send(buffer);
  } catch (err) {
    console.error('Error en reporteBoletosExcel:', err);
    return res.status(500).json({ error: 'Error interno generando Excel' });
  }
};
