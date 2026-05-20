import express from 'express';
import request from 'supertest';
import prisma from '../src/services/prisma';
import * as busApi from '../src/services/busApiClient';
import reportesRouter from '../src/routes/reportes.routes';

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
  BusApiError: class extends Error {},
}));

const prismaMock = prisma as unknown as Record<string, any>;
const busApiMock = busApi as unknown as Record<string, jest.Mock>;

const app = express();
app.use(express.json());
app.use('/reportes', reportesRouter);

function currentIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function makeBoleto(params: {
  boletoId: number;
  compraId: number;
  turnoId: number;
  frecuenciaId: number;
  canal: string;
  canalVenta?: string | null;
  tipoTarifa: string;
  total: number;
  estado?: string;
}) {
  return {
    id: params.boletoId,
    tipoTarifa: params.tipoTarifa,
    estado: params.estado ?? 'VIGENTE',
    creadoEn: new Date(),
    compra: {
      id: params.compraId,
      turnoId: params.turnoId,
      frecuenciaId: params.frecuenciaId,
      canal: params.canal,
      total: params.total,
      creadoEn: new Date(`${currentIsoDate()}T10:00:00.000Z`),
      fechaViaje: new Date(`${currentIsoDate()}T00:00:00.000Z`),
      pago: params.canalVenta
        ? {
            pagoEfectivo: {
              canalVenta: params.canalVenta,
            },
          }
        : null,
      boletos: [{ id: params.boletoId }],
    },
  };
}

function seedBoletos() {
  return [
    makeBoleto({
      boletoId: 101,
      compraId: 1,
      turnoId: 11,
      frecuenciaId: 21,
      canal: 'WEB',
      tipoTarifa: 'NORMAL',
      total: 10,
    }),
    makeBoleto({
      boletoId: 102,
      compraId: 2,
      turnoId: 12,
      frecuenciaId: 22,
      canal: 'OFICINISTA',
      canalVenta: 'OFICINA',
      tipoTarifa: 'TERCERA_EDAD',
      total: 12,
    }),
    makeBoleto({
      boletoId: 103,
      compraId: 3,
      turnoId: 13,
      frecuenciaId: 23,
      canal: 'OFICIAL',
      canalVenta: 'BUS',
      tipoTarifa: 'DISCAPACIDAD',
      total: 8,
      estado: 'UTILIZADO',
    }),
  ];
}

beforeEach(() => {
  jest.clearAllMocks();
  prismaMock.$transaction.mockImplementation(async (cb: any) => cb(prismaMock));
  prismaMock.boleto.findMany.mockResolvedValue(seedBoletos());
  busApiMock.getCooperativasMap.mockResolvedValue({
    cooperativas: [
      { id: 1, nombre: 'Coop Uno' },
      { id: 2, nombre: 'Coop Dos' },
    ],
    turnos: [
      { turnoId: 11, cooperativaId: 1, cooperativaNombre: 'Coop Uno', rutaId: 101, rutaNombre: 'Ruta 1', precioPasaje: 10 },
      { turnoId: 12, cooperativaId: 1, cooperativaNombre: 'Coop Uno', rutaId: 102, rutaNombre: 'Ruta 2', precioPasaje: 12 },
      { turnoId: 13, cooperativaId: 2, cooperativaNombre: 'Coop Dos', rutaId: 103, rutaNombre: 'Ruta 3', precioPasaje: 8 },
    ],
    frecuencias: [
      { frecuenciaId: 21, cooperativaId: 1, cooperativaNombre: 'Coop Uno', rutaId: 101, rutaNombre: 'Ruta 1', precioPasaje: 10 },
      { frecuenciaId: 22, cooperativaId: 1, cooperativaNombre: 'Coop Uno', rutaId: 102, rutaNombre: 'Ruta 2', precioPasaje: 12 },
      { frecuenciaId: 23, cooperativaId: 2, cooperativaNombre: 'Coop Dos', rutaId: 103, rutaNombre: 'Ruta 3', precioPasaje: 8 },
    ],
  });
});

describe('reportes boletos', () => {
  it('sin rol ADMIN -> 403', async () => {
    const res = await request(app).get('/reportes/boletos');

    expect(res.status).toBe(403);
  });

  it('fecha invalida -> 400', async () => {
    const res = await request(app)
      .get('/reportes/boletos?fechaDesde=2026-99-01')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(400);
  });

  it('fechaDesde mayor que fechaHasta -> 400', async () => {
    const res = await request(app)
      .get('/reportes/boletos?fechaDesde=2026-05-10&fechaHasta=2026-05-01')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(400);
    expect(res.body.error).toContain('fechaDesde');
  });

  it('cooperativa no asignada al admin -> 403', async () => {
    const res = await request(app)
      .get('/reportes/boletos?cooperativaId=99')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(403);
  });

  it('GET /reportes/boletos sin filtros criticos devuelve estructura correcta', async () => {
    const res = await request(app)
      .get('/reportes/boletos')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        filtros: expect.any(Object),
        totales: expect.objectContaining({
          cantidadBoletos: 3,
          montoTotal: 30,
        }),
        agrupadoPorCanal: expect.any(Array),
        agrupadoPorTipoPasajero: expect.any(Array),
        detalle: expect.any(Array),
      })
    );
  });

  it('filtro por canal WEB devuelve solo WEB', async () => {
    const res = await request(app)
      .get('/reportes/boletos?canal=WEB')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(200);
    expect(res.body.detalle).toHaveLength(1);
    expect(res.body.detalle[0].canal).toBe('WEB');
  });

  it('filtro por canal OFICINA devuelve solo OFICINA', async () => {
    const res = await request(app)
      .get('/reportes/boletos?canal=OFICINA')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(200);
    expect(res.body.detalle).toHaveLength(1);
    expect(res.body.detalle[0].canal).toBe('OFICINA');
  });

  it('filtro por canal BUS devuelve solo BUS', async () => {
    const res = await request(app)
      .get('/reportes/boletos?canal=BUS')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(200);
    expect(res.body.detalle).toHaveLength(1);
    expect(res.body.detalle[0].canal).toBe('BUS');
  });

  it('agrupacion por tipo de pasajero calcula cantidades y montos', async () => {
    const res = await request(app)
      .get('/reportes/boletos')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(200);
    expect(res.body.agrupadoPorTipoPasajero).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ tipoPasajero: 'NORMAL', cantidadBoletos: 1, montoTotal: 10 }),
        expect.objectContaining({ tipoPasajero: 'TERCERA_EDAD', cantidadBoletos: 1, montoTotal: 12 }),
        expect.objectContaining({ tipoPasajero: 'DISCAPACIDAD', cantidadBoletos: 1, montoTotal: 8 }),
      ])
    );
  });

  it('agrupacion por canal calcula cantidades y montos', async () => {
    const res = await request(app)
      .get('/reportes/boletos')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(200);
    expect(res.body.agrupadoPorCanal).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ canal: 'WEB', cantidadBoletos: 1, montoTotal: 10 }),
        expect.objectContaining({ canal: 'OFICINA', cantidadBoletos: 1, montoTotal: 12 }),
        expect.objectContaining({ canal: 'BUS', cantidadBoletos: 1, montoTotal: 8 }),
      ])
    );
  });

  it('totales generales son suma de subtotales', async () => {
    const res = await request(app)
      .get('/reportes/boletos')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(200);
    const totalCanales = res.body.agrupadoPorCanal.reduce(
      (acc: number, item: { montoTotal: number }) => acc + item.montoTotal,
      0
    );
    expect(totalCanales).toBe(res.body.totales.montoTotal);
  });

  it('no devuelve cedula completa ni datos sensibles', async () => {
    const res = await request(app)
      .get('/reportes/boletos')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(200);
    expect(res.body.detalle[0]).not.toHaveProperty('cedulaPasajero');
    expect(res.body.detalle[0]).not.toHaveProperty('comprobanteUrl');
    expect(res.body.detalle[0]).not.toHaveProperty('referenciaPasarela');
    expect(res.body.detalle[0]).not.toHaveProperty('banco');
  });

  it('GET /reportes/boletos/pdf devuelve application/pdf', async () => {
    const res = await request(app)
      .get('/reportes/boletos/pdf')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain('application/pdf');
    expect(res.headers['content-disposition']).toContain('reporte-boletos.pdf');
  });

  it('GET /reportes/boletos/excel devuelve xlsx con content-type correcto', async () => {
    const res = await request(app)
      .get('/reportes/boletos/excel')
      .set('X-User-Role', 'ADMIN')
      .set('X-User-Id', '1')
      .set('X-Cooperativas-Ids', '1,2');

    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain(
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    expect(res.headers['content-disposition']).toContain('reporte-boletos.xlsx');
  });
});
