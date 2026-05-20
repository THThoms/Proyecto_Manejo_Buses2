// US20: handlers JSON y PDF de la liquidación mensual por cooperativa.

import { Request, Response } from 'express';
import { generarLiquidacion, mesEstaCerrado, type FiltrosLiquidacion } from '../services/liquidacionService';
import { generarPdfLiquidacion } from '../services/pdfLiquidacionService';
import { BusApiError } from '../services/busApiClient';

interface ParseOK { ok: true; filtros: FiltrosLiquidacion; }
interface ParseErr { ok: false; status: number; body: Record<string, unknown>; }

function parseFiltros(req: Request): ParseOK | ParseErr {
  const admin = req.adminUser!;

  const cooperativaId = Number(req.query.cooperativaId);
  if (!Number.isInteger(cooperativaId) || cooperativaId <= 0) {
    return { ok: false, status: 400, body: { error: 'cooperativaId obligatorio' } };
  }
  if (!admin.cooperativasIds.includes(cooperativaId)) {
    return { ok: false, status: 403, body: { error: 'cooperativa no asignada al admin' } };
  }

  const year = Number(req.query.year);
  const month = Number(req.query.month);
  if (!Number.isInteger(year) || year < 2000 || year > 2100) {
    return { ok: false, status: 400, body: { error: 'year inválido' } };
  }
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    return { ok: false, status: 400, body: { error: 'month inválido (1..12)' } };
  }
  if (!mesEstaCerrado(year, month)) {
    return { ok: false, status: 400, body: { error: 'solo se permiten meses calendario pasados' } };
  }

  return {
    ok: true,
    filtros: { cooperativaId, year, month, cooperativasPermitidas: admin.cooperativasIds },
  };
}

// GET /liquidaciones/cooperativa
export const liquidacionJson = async (req: Request, res: Response) => {
  const parsed = parseFiltros(req);
  if (!parsed.ok) return res.status(parsed.status).json(parsed.body);
  try {
    const liq = await generarLiquidacion(parsed.filtros);
    return res.json(liq);
  } catch (err) {
    if (err instanceof BusApiError) {
      if (err.status === 404) {
        return res.status(404).json({ error: 'cooperativa no encontrada en bus-api' });
      }
      return res.status(502).json({ error: 'bus-api falló', detalle: err.body });
    }
    console.error('Error en liquidacionJson:', err);
    return res.status(500).json({ error: 'Error interno generando liquidación' });
  }
};

// GET /liquidaciones/cooperativa/pdf
export const liquidacionPdf = async (req: Request, res: Response) => {
  const parsed = parseFiltros(req);
  if (!parsed.ok) return res.status(parsed.status).json(parsed.body);
  try {
    const liq = await generarLiquidacion(parsed.filtros);
    const filename = `liquidacion-cooperativa-${parsed.filtros.cooperativaId}-${parsed.filtros.year}-${String(parsed.filtros.month).padStart(2, '0')}.pdf`;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    const stream = generarPdfLiquidacion(liq);
    stream.pipe(res);
  } catch (err) {
    if (err instanceof BusApiError) {
      if (err.status === 404) {
        return res.status(404).json({ error: 'cooperativa no encontrada en bus-api' });
      }
      return res.status(502).json({ error: 'bus-api falló', detalle: err.body });
    }
    console.error('Error en liquidacionPdf:', err);
    return res.status(500).json({ error: 'Error interno generando PDF' });
  }
};
