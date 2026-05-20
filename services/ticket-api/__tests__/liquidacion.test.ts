// US20: tests de los endpoints /liquidaciones/cooperativa (JSON y PDF).

import express from 'express';
import request from 'supertest';

jest.mock('../src/services/prisma', () => ({
  __esModule: true,
  default: {
    compra: { findMany: jest.fn() },
  },
}));

jest.mock('../src/services/busApiClient', () => ({
  __esModule: true,
  resolverCooperativasPorFrecuencias: jest.fn(),
  getCooperativaById: jest.fn(),
  BusApiError: class extends Error {
    constructor(public status: number, public body: unknown, msg: string) { super(msg); }
  },
}));

import prisma from '../src/services/prisma';
import * as busApi from '../src/services/busApiClient';
import liquidacionRoutes from '../src/routes/liquidacion.routes';

const p = prisma as unknown as Record<string, any>;
const bus = busApi as unknown as Record<string, jest.Mock>;
const { BusApiError } = busApi as any;

const app = express();
app.use(express.json());
app.use('/liquidaciones', liquidacionRoutes);

const HEADERS_ADMIN = {
  'X-User-Role': 'ADMIN',
  'X-User-Id': '1',
  'X-Cooperativas-Ids': '1,2,3',
};

// Helper: armar fechas seguras dentro de un mes ya pasado.
const PAST_YEAR = 2024;
const PAST_MONTH = 1;

function compraMock(over: Partial<any> = {}) {
  return {
    id: 100,
    frecuenciaId: 5,
    total: 20,
    creadoEn: new Date(Date.UTC(PAST_YEAR, PAST_MONTH - 1, 15, 10, 0, 0)),
    fechaViaje: new Date(Date.UTC(PAST_YEAR, PAST_MONTH - 1, 20, 8, 0, 0)),
    boletos: [
      { id: 1001, tipoTarifa: 'NORMAL', estado: 'VIGENTE' },
      { id: 1002, tipoTarifa: 'TERCERA_EDAD', estado: 'UTILIZADO' },
    ],
    ...over,
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, 'error').mockImplementation(() => {});

  bus.getCooperativaById.mockResolvedValue({
    id: 1,
    nombre: 'Coop Andina',
    ruc: '1790123456001',
    cuentaBancaria: '1234567890',
    banco: 'Banco Demo',
    estado: 'ACTIVO',
  });
  bus.resolverCooperativasPorFrecuencias.mockResolvedValue({
    '5': { cooperativaId: 1, cooperativaNombre: 'Coop Andina' },
  });
});

describe('Auth/validación (US20)', () => {
  it('1) sin ADMIN → 403', async () => {
    const res = await request(app).get('/liquidaciones/cooperativa?cooperativaId=1&year=2024&month=1');
    expect(res.status).toBe(403);
  });

  it('2) cooperativaId faltante → 400', async () => {
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?year=${PAST_YEAR}&month=${PAST_MONTH}`)
      .set(HEADERS_ADMIN);
    expect(res.status).toBe(400);
  });

  it('3) year/month inválidos → 400', async () => {
    const res = await request(app)
      .get('/liquidaciones/cooperativa?cooperativaId=1&year=abc&month=99')
      .set(HEADERS_ADMIN);
    expect(res.status).toBe(400);
  });

  it('4) mes futuro → 400', async () => {
    const futuro = new Date();
    futuro.setMonth(futuro.getMonth() + 2);
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=1&year=${futuro.getFullYear()}&month=${futuro.getMonth() + 1}`)
      .set(HEADERS_ADMIN);
    expect(res.status).toBe(400);
  });

  it('5) mes actual no cerrado → 400', async () => {
    const hoy = new Date();
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=1&year=${hoy.getFullYear()}&month=${hoy.getMonth() + 1}`)
      .set(HEADERS_ADMIN);
    expect(res.status).toBe(400);
  });

  it('6) cooperativa no asignada → 403', async () => {
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=999&year=${PAST_YEAR}&month=${PAST_MONTH}`)
      .set(HEADERS_ADMIN);
    expect(res.status).toBe(403);
  });
});

describe('Estructura y cálculos (US20)', () => {
  it('7) JSON tiene estructura correcta', async () => {
    p.compra.findMany.mockResolvedValue([compraMock()]);
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=1&year=${PAST_YEAR}&month=${PAST_MONTH}`)
      .set(HEADERS_ADMIN);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('cooperativa');
    expect(res.body).toHaveProperty('periodo');
    expect(res.body).toHaveProperty('totales');
    expect(res.body).toHaveProperty('desglosePorTipoPasajero');
    expect(res.body).toHaveProperty('detalle');
  });

  it('8) calcula totales sumando boletos válidos', async () => {
    p.compra.findMany.mockResolvedValue([
      compraMock({ total: 20 }),     // 2 boletos
      compraMock({ id: 101, total: 10, boletos: [{ id: 9, tipoTarifa: 'NORMAL', estado: 'VIGENTE' }] }),
    ]);
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=1&year=${PAST_YEAR}&month=${PAST_MONTH}`)
      .set(HEADERS_ADMIN);
    expect(res.body.totales.cantidadBoletos).toBe(3);
    expect(res.body.totales.montoTotal).toBeCloseTo(30, 2);
  });

  it('9) la query Prisma excluye PENDIENTE y ANULADO', async () => {
    p.compra.findMany.mockResolvedValue([]);
    await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=1&year=${PAST_YEAR}&month=${PAST_MONTH}`)
      .set(HEADERS_ADMIN);
    const call = p.compra.findMany.mock.calls[0][0];
    expect(call.where.estado).toBe('CONFIRMADA');
    expect(call.select.boletos.where.estado.in).toEqual(['VIGENTE', 'UTILIZADO']);
  });

  it('10) desglose por tipo de pasajero correcto', async () => {
    p.compra.findMany.mockResolvedValue([compraMock()]);
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=1&year=${PAST_YEAR}&month=${PAST_MONTH}`)
      .set(HEADERS_ADMIN);
    const normal = res.body.desglosePorTipoPasajero.find((g: any) => g.tipoPasajero === 'NORMAL');
    const tercera = res.body.desglosePorTipoPasajero.find((g: any) => g.tipoPasajero === 'TERCERA_EDAD');
    expect(normal.cantidadBoletos).toBe(1);
    expect(tercera.cantidadBoletos).toBe(1);
  });

  it('11) incluye cuenta bancaria de la cooperativa (enmascarada)', async () => {
    p.compra.findMany.mockResolvedValue([compraMock()]);
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=1&year=${PAST_YEAR}&month=${PAST_MONTH}`)
      .set(HEADERS_ADMIN);
    expect(res.body.cooperativa.cuentaBancaria.banco).toBe('Banco Demo');
    expect(res.body.cooperativa.cuentaBancaria.numero).toBe('****7890');
  });

  it('12) no expone cédula ni datos sensibles del pasajero', async () => {
    p.compra.findMany.mockResolvedValue([compraMock()]);
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=1&year=${PAST_YEAR}&month=${PAST_MONTH}`)
      .set(HEADERS_ADMIN);
    const txt = JSON.stringify(res.body);
    expect(txt).not.toMatch(/cedula/i);
    expect(txt).not.toMatch(/nombrePasajero/);
    expect(txt).not.toMatch(/comprobanteUrl/);
    expect(txt).not.toMatch(/referenciaPasarela/);
  });
});

describe('Export PDF (US20)', () => {
  it('13) PDF devuelve application/pdf', async () => {
    p.compra.findMany.mockResolvedValue([compraMock()]);
    const res = await request(app)
      .get(`/liquidaciones/cooperativa/pdf?cooperativaId=1&year=${PAST_YEAR}&month=${PAST_MONTH}`)
      .set(HEADERS_ADMIN);
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain('application/pdf');
  });

  it('14) PDF tiene content-disposition correcto', async () => {
    p.compra.findMany.mockResolvedValue([compraMock()]);
    const res = await request(app)
      .get(`/liquidaciones/cooperativa/pdf?cooperativaId=1&year=${PAST_YEAR}&month=${PAST_MONTH}`)
      .set(HEADERS_ADMIN);
    expect(res.headers['content-disposition']).toContain(`liquidacion-cooperativa-1-${PAST_YEAR}-01.pdf`);
  });
});

describe('Resiliencia (US20)', () => {
  it('15) si bus-api falla 500 → respondemos 502', async () => {
    bus.getCooperativaById.mockRejectedValue(new BusApiError(500, { msg: 'down' }, 'down'));
    p.compra.findMany.mockResolvedValue([]);
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=1&year=${PAST_YEAR}&month=${PAST_MONTH}`)
      .set(HEADERS_ADMIN);
    expect(res.status).toBe(502);
  });

  it('15b) si bus-api dice 404 cooperativa → respondemos 404', async () => {
    bus.getCooperativaById.mockRejectedValue(new BusApiError(404, {}, 'no'));
    p.compra.findMany.mockResolvedValue([]);
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=1&year=${PAST_YEAR}&month=${PAST_MONTH}`)
      .set(HEADERS_ADMIN);
    expect(res.status).toBe(404);
  });
});
