// US22: configuración visual de la app (logo, colores, redes, radio GPS).
// Tabla single-row (id=1) con upsert para que el primer GET siempre devuelva
// algo aunque la tabla esté vacía.

import { Request, Response } from 'express';
import { PrismaClient } from '../../../../packages/database/prisma/generated/bus-client';

const prisma = new PrismaClient();
const CONFIG_ID = 1;

const HEX_REGEX = /^#[0-9A-Fa-f]{6}$/;
const URL_REGEX = /^https?:\/\/[^\s]+$/;

const DEFAULTS = {
  colorPrimario: '#2563eb',
  colorSecundario: '#1f2937',
  radioAlertaGpsKm: 0.5,
};

function safeRequireAdmin(req: Request, res: Response): boolean {
  if (req.header('x-user-role') !== 'ADMIN') {
    res.status(403).json({ error: 'Acceso restringido al rol ADMIN' });
    return false;
  }
  return true;
}

async function ensureConfig() {
  return prisma.configuracionApp.upsert({
    where: { id: CONFIG_ID },
    update: {},
    create: {
      id: CONFIG_ID,
      colorPrimario: DEFAULTS.colorPrimario,
      colorSecundario: DEFAULTS.colorSecundario,
      radioAlertaGpsKm: DEFAULTS.radioAlertaGpsKm,
    },
  });
}

// GET /config/app — público (el frontend lo lee al cargar para aplicar tema).
export const getConfigApp = async (_req: Request, res: Response) => {
  try {
    const cfg = await ensureConfig();
    return res.json(cfg);
  } catch (err) {
    console.error('Error en getConfigApp:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
};

// PUT /config/app — solo ADMIN.
export const updateConfigApp = async (req: Request, res: Response) => {
  if (!safeRequireAdmin(req, res)) return;

  const {
    logoUrl, colorPrimario, colorSecundario,
    facebookUrl, instagramUrl, whatsapp,
    radioAlertaGpsKm,
  } = req.body ?? {};

  const data: Record<string, unknown> = {};

  if (logoUrl !== undefined) {
    if (logoUrl !== null && (typeof logoUrl !== 'string' || (logoUrl !== '' && !URL_REGEX.test(logoUrl)))) {
      return res.status(400).json({ error: 'logoUrl inválido' });
    }
    data.logoUrl = logoUrl || null;
  }
  if (colorPrimario !== undefined) {
    if (typeof colorPrimario !== 'string' || !HEX_REGEX.test(colorPrimario)) {
      return res.status(400).json({ error: 'colorPrimario debe ser HEX (#RRGGBB)' });
    }
    data.colorPrimario = colorPrimario;
  }
  if (colorSecundario !== undefined) {
    if (typeof colorSecundario !== 'string' || !HEX_REGEX.test(colorSecundario)) {
      return res.status(400).json({ error: 'colorSecundario debe ser HEX (#RRGGBB)' });
    }
    data.colorSecundario = colorSecundario;
  }
  for (const [k, v] of [['facebookUrl', facebookUrl], ['instagramUrl', instagramUrl]] as const) {
    if (v !== undefined) {
      if (v !== null && v !== '' && (typeof v !== 'string' || !URL_REGEX.test(v))) {
        return res.status(400).json({ error: `${k} inválido (debe ser http/https)` });
      }
      data[k] = v || null;
    }
  }
  if (whatsapp !== undefined) {
    if (whatsapp !== null && typeof whatsapp !== 'string') {
      return res.status(400).json({ error: 'whatsapp inválido' });
    }
    data.whatsapp = whatsapp || null;
  }
  if (radioAlertaGpsKm !== undefined) {
    const v = Number(radioAlertaGpsKm);
    if (!Number.isFinite(v) || v < 0.1 || v > 50) {
      return res.status(400).json({ error: 'radioAlertaGpsKm debe ser >= 0.1 y <= 50' });
    }
    data.radioAlertaGpsKm = v;
  }

  try {
    const cfg = await prisma.configuracionApp.upsert({
      where: { id: CONFIG_ID },
      update: data,
      create: {
        id: CONFIG_ID,
        colorPrimario: typeof data.colorPrimario === 'string' ? data.colorPrimario : DEFAULTS.colorPrimario,
        colorSecundario: typeof data.colorSecundario === 'string' ? data.colorSecundario : DEFAULTS.colorSecundario,
        radioAlertaGpsKm: typeof data.radioAlertaGpsKm === 'number' ? data.radioAlertaGpsKm : DEFAULTS.radioAlertaGpsKm,
        ...data,
      },
    });
    return res.json(cfg);
  } catch (err) {
    console.error('Error en updateConfigApp:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
};
