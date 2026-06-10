import express from 'express';
import request from 'supertest';
import prisma from '../src/services/prisma';
import * as busApi from '../src/services/busApiClient';
import liquidacionRouter from '../src/routes/liquidacion.routes';

jest.mock('../src/services/prisma', () => ({
  __esModule: true,
  default: {
    eventoWebhook: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    compra: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
    },
    pagoPasajero: { update: jest.fn() },
    pagoTarjeta: { upsert: jest.fn() },
    boleto: { findMany: jest.fn(), updateMany: jest.fn() },
    compraAsiento: { update: jest.fn() },
    $transaction: jest.fn(),
  },
}));

jest.mock('../src/services/busApiClient', () => ({
  __esModule: true,
  reservarAsiento: jest.fn(),
  liberarAsiento: jest.fn(),
  ocuparAsiento: jest.fn(),
  getCooperativasMap: jest.fn(),
  getCooperativaById: jest.fn(),
  BusApiError: class extends Error {
    constructor(public status: number, public body: unknown, message: string) {
      super(message);
      this.name = 'BusApiError';
    }
  },
}));

const prismaMock = prisma as unknown as Record<string, any>;
const busApiMock = busApi as unknown as Record<string, jest.Mock>;

const app = express();
app.use(express.json());
app.use('/liquidaciones', liquidacionRouter);

function getPreviousMonth() {
  const now = new Date();
  const currentMonth = now.getUTCMonth() + 1;
  const year = currentMonth === 1 ? now.getUTCFullYear() - 1 : now.getUTCFullYear();
  const month = currentMonth === 1 ? 12 : currentMonth - 1;
  return { year, month };
}

function getCurrentMonth() {
  const now = new Date();
  return { year: now.getUTCFullYear(), month: now.getUTCMonth() + 1 };
}

function getFutureMonth() {
  const now = new Date();
  const currentMonth = now.getUTCMonth() + 1;
  return currentMonth === 12
    ? { year: now.getUTCFullYear() + 1, month: 1 }
    : { year: now.getUTCFullYear(), month: currentMonth + 1 };
}

function isoDate(year: number, month: number, day: number) {
  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0, 0));
}

function makeBoleto(params: {
  boletoId: number;
  compraId: number;
  turnoId: number;
  frecuenciaId: number;
  total: number;
  tipoTarifa: string;
  estado: string;
  compraEstado?: string;
  pagoEstado?: string;
  pagadoEn?: Date | null;
  creadoEn?: Date;
  fechaViaje?: Date;
}) {
  return {
    id: params.boletoId,
    tipoTarifa: params.tipoTarifa,
    estado: params.estado,
    compra: {
      id: params.compraId,
      turnoId: params.turnoId,
      frecuenciaId: params.frecuenciaId,
      total: params.total,
      fechaViaje: params.fechaViaje ?? params.creadoEn ?? new Date(),
      creadoEn: params.creadoEn ?? new Date(),
      estado: params.compraEstado ?? 'CONFIRMADA',
      pago: {
        estado: params.pagoEstado ?? 'APROBADO',
        pagadoEn: params.pagadoEn ?? params.creadoEn ?? new Date(),
        pagoEfectivo: null,
      },
      boletos: [{ id: params.boletoId }],
    },
  };
}

function seedBoletos() {
  const previous = getPreviousMonth();
  const current = getCurrentMonth();

  return [
    makeBoleto({
      boletoId: 101,
      compraId: 1,
      turnoId: 11,
      frecuenciaId: 21,
      total: 10,
      tipoTarifa: 'NORMAL',
      estado: 'VIGENTE',
      pagadoEn: isoDate(previous.year, previous.month, 4),
      creadoEn: isoDate(previous.year, previous.month, 3),
    }),
    makeBoleto({
      boletoId: 102,
      compraId: 2,
      turnoId: 12,
      frecuenciaId: 22,
      total: 12,
      tipoTarifa: 'TERCERA_EDAD',
      estado: 'UTILIZADO',
      pagadoEn: isoDate(previous.year, previous.month, 9),
      creadoEn: isoDate(previous.year, previous.month, 8),
    }),
    makeBoleto({
      boletoId: 103,
      compraId: 3,
      turnoId: 13,
      frecuenciaId: 23,
      total: 8,
      tipoTarifa: 'DISCAPACIDAD',
      estado: 'VIGENTE',
      pagadoEn: null,
      creadoEn: isoDate(previous.year, previous.month, 12),
    }),
    makeBoleto({
      boletoId: 104,
      compraId: 4,
      turnoId: 14,
      frecuenciaId: 24,
      total: 7,
      tipoTarifa: 'NORMAL',
      estado: 'PENDIENTE',
      pagadoEn: isoDate(previous.year, previous.month, 13),
      creadoEn: isoDate(previous.year, previous.month, 13),
    }),
    makeBoleto({
      boletoId: 105,
      compraId: 5,
      turnoId: 15,
      frecuenciaId: 25,
      total: 9,
      tipoTarifa: 'NORMAL',
      estado: 'ANULADO',
      pagadoEn: isoDate(previous.year, previous.month, 14),
      creadoEn: isoDate(previous.year, previous.month, 14),
    }),
    makeBoleto({
      boletoId: 106,
      compraId: 6,
      turnoId: 16,
      frecuenciaId: 26,
      total: 11,
      tipoTarifa: 'NORMAL',
      estado: 'VIGENTE',
      pagadoEn: isoDate(previous.year, previous.month, 18),
      creadoEn: isoDate(previous.year, previous.month, 18),
    }),
    makeBoleto({
      boletoId: 107,
      compraId: 7,
      turnoId: 17,
      frecuenciaId: 27,
      total: 13,
      tipoTarifa: 'NORMAL',
      estado: 'VIGENTE',
      pagadoEn: isoDate(current.year, current.month, 2),
      creadoEn: isoDate(previous.year, previous.month, 20),
    }),
  ];
}

function authHeaders() {
  return {
    'X-User-Role': 'ADMIN',
    'X-User-Id': '1',
    'X-Cooperativas-Ids': '1,2,3',
  };
}

function queryForPreviousMonth(cooperativaId = 1) {
  const previous = getPreviousMonth();
  return `cooperativaId=${cooperativaId}&year=${previous.year}&month=${previous.month}`;
}

beforeEach(() => {
  jest.clearAllMocks();
  prismaMock.$transaction.mockImplementation(async (cb: any) => cb(prismaMock));
  prismaMock.boleto.findMany.mockResolvedValue(seedBoletos());
  busApiMock.getCooperativasMap.mockResolvedValue({
    cooperativas: [{ id: 1, nombre: 'Cooperativa Demo' }, { id: 2, nombre: 'Otra Coop' }],
    turnos: [
      { turnoId: 11, cooperativaId: 1, cooperativaNombre: 'Cooperativa Demo', rutaId: 101, rutaNombre: 'Ruta 1', precioPasaje: 10 },
      { turnoId: 12, cooperativaId: 1, cooperativaNombre: 'Cooperativa Demo', rutaId: 102, rutaNombre: 'Ruta 2', precioPasaje: 12 },
      { turnoId: 13, cooperativaId: 1, cooperativaNombre: 'Cooperativa Demo', rutaId: 103, rutaNombre: 'Ruta 3', precioPasaje: 8 },
      { turnoId: 14, cooperativaId: 1, cooperativaNombre: 'Cooperativa Demo', rutaId: 104, rutaNombre: 'Ruta 4', precioPasaje: 7 },
      { turnoId: 15, cooperativaId: 1, cooperativaNombre: 'Cooperativa Demo', rutaId: 105, rutaNombre: 'Ruta 5', precioPasaje: 9 },
      { turnoId: 16, cooperativaId: 2, cooperativaNombre: 'Otra Coop', rutaId: 106, rutaNombre: 'Ruta 6', precioPasaje: 11 },
      { turnoId: 17, cooperativaId: 1, cooperativaNombre: 'Cooperativa Demo', rutaId: 107, rutaNombre: 'Ruta 7', precioPasaje: 13 },
    ],
    frecuencias: [],
  });
  busApiMock.getCooperativaById.mockResolvedValue({
    id: 1,
    nombre: 'Cooperativa Demo',
    ruc: '1791234567001',
    cuentaBancaria: '1234567890',
  });
});

describe('liquidacion mensual por cooperativa', () => {
  it('sin rol ADMIN -> 401', async () => {
    const res = await request(app).get(`/liquidaciones/cooperativa?${queryForPreviousMonth()}`);

    expect(res.status).toBe(401);
  });

  it('cooperativaId faltante -> 400', async () => {
    const previous = getPreviousMonth();
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?year=${previous.year}&month=${previous.month}`)
      .set(authHeaders());

    expect(res.status).toBe(400);
  });

  it('year o month invalidos -> 400', async () => {
    const res = await request(app)
      .get('/liquidaciones/cooperativa?cooperativaId=1&year=2026&month=13')
      .set(authHeaders());

    expect(res.status).toBe(400);
  });

  it('mes futuro -> 400', async () => {
    const future = getFutureMonth();
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=1&year=${future.year}&month=${future.month}`)
      .set(authHeaders());

    expect(res.status).toBe(400);
  });

  it('mes actual no cerrado -> 400', async () => {
    const current = getCurrentMonth();
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?cooperativaId=1&year=${current.year}&month=${current.month}`)
      .set(authHeaders());

    expect(res.status).toBe(400);
  });

  it('cooperativa no asignada al admin -> 403', async () => {
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?${queryForPreviousMonth(99)}`)
      .set(authHeaders());

    expect(res.status).toBe(403);
  });

  it('liquidacion JSON devuelve estructura correcta', async () => {
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?${queryForPreviousMonth()}`)
      .set(authHeaders());

    expect(res.status).toBe(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        cooperativa: expect.objectContaining({
          id: 1,
          nombre: 'Cooperativa Demo',
          cuentaBancaria: expect.any(Object),
        }),
        periodo: expect.objectContaining({
          year: expect.any(Number),
          month: expect.any(Number),
        }),
        totales: expect.objectContaining({
          cantidadBoletos: 3,
          montoTotal: 30,
        }),
        desglosePorTipoPasajero: expect.any(Array),
        detalle: expect.any(Array),
      })
    );
  });

  it('calculo de total suma boletos validos', async () => {
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?${queryForPreviousMonth()}`)
      .set(authHeaders());

    expect(res.status).toBe(200);
    expect(res.body.totales).toEqual({
      cantidadBoletos: 3,
      montoTotal: 30,
    });
  });

  it('excluye boletos PENDIENTE y ANULADO', async () => {
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?${queryForPreviousMonth()}`)
      .set(authHeaders());

    expect(res.status).toBe(200);
    expect(res.body.detalle.some((item: { boletoId: number }) => item.boletoId === 104)).toBe(false);
    expect(res.body.detalle.some((item: { boletoId: number }) => item.boletoId === 105)).toBe(false);
  });

  it('desglose por tipo de pasajero calcula cantidad y monto', async () => {
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?${queryForPreviousMonth()}`)
      .set(authHeaders());

    expect(res.status).toBe(200);
    expect(res.body.desglosePorTipoPasajero).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ tipoPasajero: 'NORMAL', cantidadBoletos: 1, montoTotal: 10 }),
        expect.objectContaining({ tipoPasajero: 'TERCERA_EDAD', cantidadBoletos: 1, montoTotal: 12 }),
        expect.objectContaining({ tipoPasajero: 'DISCAPACIDAD', cantidadBoletos: 1, montoTotal: 8 }),
      ])
    );
  });

  it('incluye cuenta bancaria de cooperativa', async () => {
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?${queryForPreviousMonth()}`)
      .set(authHeaders());

    expect(res.status).toBe(200);
    expect(res.body.cooperativa.cuentaBancaria).toEqual({
      banco: 'NO_REGISTRADO',
      tipo: 'NO_REGISTRADO',
      numero: '****7890',
    });
  });

  it('no devuelve cedula completa ni datos sensibles', async () => {
    const res = await request(app)
      .get(`/liquidaciones/cooperativa?${queryForPreviousMonth()}`)
      .set(authHeaders());

    expect(res.status).toBe(200);
    expect(res.body.detalle[0]).not.toHaveProperty('cedulaPasajero');
    expect(res.body.detalle[0]).not.toHaveProperty('comprobanteUrl');
    expect(res.body.detalle[0]).not.toHaveProperty('referenciaPasarela');
    expect(res.body.detalle[0]).not.toHaveProperty('bancoCliente');
  });

  it('PDF devuelve application/pdf', async () => {
    const res = await request(app)
      .get(`/liquidaciones/cooperativa/pdf?${queryForPreviousMonth()}`)
      .set(authHeaders());

    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain('application/pdf');
  });

  it('PDF tiene content-disposition correcto', async () => {
    const previous = getPreviousMonth();
    const res = await request(app)
      .get(`/liquidaciones/cooperativa/pdf?${queryForPreviousMonth()}`)
      .set(authHeaders());

    expect(res.status).toBe(200);
    expect(res.headers['content-disposition']).toContain(
      `liquidacion-cooperativa-1-${previous.year}-${String(previous.month).padStart(2, '0')}.pdf`
    );
  });

  it('si bus-api no responde cooperativa -> 502', async () => {
    busApiMock.getCooperativaById.mockRejectedValueOnce(new Error('downstream'));

    const res = await request(app)
      .get(`/liquidaciones/cooperativa?${queryForPreviousMonth()}`)
      .set(authHeaders());

    expect(res.status).toBe(502);
  });
});
