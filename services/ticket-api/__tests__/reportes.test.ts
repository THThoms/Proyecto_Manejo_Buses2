// US19: tests de los endpoints /reportes/boletos (JSON, PDF, Excel).

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
  listarCooperativas: jest.fn(),
  BusApiError: class extends Error {},
}));

import prisma from '../src/services/prisma';
import * as busApi from '../src/services/busApiClient';
import reportesRoutes from '../src/routes/reportes.routes';

const p = prisma as unknown as Record<string, any>;
const bus = busApi as unknown as Record<string, jest.Mock>;

const app = express();
app.use(express.json());
app.use('/reportes', reportesRoutes);

const HEADERS_ADMIN = {
  'X-User-Role': 'ADMIN',
  'X-User-Id': '1',
  'X-Cooperativas-Ids': '1,2,3',
};

// Compra de ejemplo
function compraBase(over: Partial<any> = {}) {
  return {
    id: 100,
    frecuenciaId: 5,
    turnoId: 30,
    total: 20,
    cantidad: 2,
    canal: 'WEB',
    creadoEn: new Date('2025-04-10T10:00:00Z'),
    fechaViaje: new Date('2025-04-15T08:00:00Z'),
    boletos: [
      { id: 1001, tipoTarifa: 'NORMAL', estado: 'VIGENTE' },
      { id: 1002, tipoTarifa: 'TERCERA_EDAD', estado: 'UTILIZADO' },
    ],
    pago: { metodo: 'TARJETA', pagoEfectivo: null },
    ...over,
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, 'error').mockImplementation(() => {});
  // Por defecto bus-api mapea frecuencia 5 → coop 1 (en el scope del admin).
  bus.resolverCooperativasPorFrecuencias.mockResolvedValue({
    '5': { cooperativaId: 1, cooperativaNombre: 'Coop Andina' },
  });
});

describe('Auth y validación (US19)', () => {
  it('1) sin rol ADMIN → 403', async () => {
    const res = await request(app).get('/reportes/boletos');
    expect(res.status).toBe(403);
  });

  it('2) fecha inválida → 400', async () => {
    const res = await request(app)
      .get('/reportes/boletos?fechaDesde=2025/01/01&fechaHasta=2025-01-31')
      .set(HEADERS_ADMIN);
    expect(res.status).toBe(400);
  });

  it('3) fechaDesde > fechaHasta → 400', async () => {
    const res = await request(app)
      .get('/reportes/boletos?fechaDesde=2025-05-10&fechaHasta=2025-04-01')
      .set(HEADERS_ADMIN);
    expect(res.status).toBe(400);
  });

  it('4) cooperativa no asignada al admin → 403', async () => {
    const res = await request(app)
      .get('/reportes/boletos?cooperativaId=999')
      .set(HEADERS_ADMIN);
    expect(res.status).toBe(403);
  });
});

describe('Estructura del reporte (US19)', () => {
  it('5) sin filtros críticos devuelve estructura correcta', async () => {
    p.compra.findMany.mockResolvedValue([compraBase()]);
    const res = await request(app).get('/reportes/boletos').set(HEADERS_ADMIN);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('filtros');
    expect(res.body).toHaveProperty('totales');
    expect(res.body).toHaveProperty('agrupadoPorCanal');
    expect(res.body).toHaveProperty('agrupadoPorTipoPasajero');
    expect(res.body).toHaveProperty('detalle');
    expect(res.body.filtros.criterio).toMatch(/CONFIRMADAS/);
  });

  it('11) totales generales = suma de subtotales por canal', async () => {
    p.compra.findMany.mockResolvedValue([
      compraBase({ total: 30 }),                                  // WEB, 2 boletos
      compraBase({ id: 101, total: 10, cantidad: 1, boletos: [{ id: 2001, tipoTarifa: 'NORMAL', estado: 'VIGENTE' }],
        pago: { metodo: 'EFECTIVO', pagoEfectivo: { canalVenta: 'BUS' } } }),
    ]);
    const res = await request(app).get('/reportes/boletos').set(HEADERS_ADMIN);
    expect(res.status).toBe(200);
    const sumaCanal = res.body.agrupadoPorCanal.reduce((a: number, g: any) => a + g.cantidadBoletos, 0);
    const sumaTipo = res.body.agrupadoPorTipoPasajero.reduce((a: number, g: any) => a + g.cantidadBoletos, 0);
    expect(sumaCanal).toBe(res.body.totales.cantidadBoletos);
    expect(sumaTipo).toBe(res.body.totales.cantidadBoletos);
  });

  it('12) la respuesta no incluye cédula del pasajero ni datos sensibles', async () => {
    p.compra.findMany.mockResolvedValue([compraBase()]);
    const res = await request(app).get('/reportes/boletos').set(HEADERS_ADMIN);
    const json = JSON.stringify(res.body);
    expect(json).not.toMatch(/cedula/i);
    expect(json).not.toMatch(/comprobanteUrl/);
    expect(json).not.toMatch(/referenciaPasarela/);
    expect(json).not.toMatch(/cuentaBancaria/);
  });
});

describe('Filtros por canal y tipo (US19)', () => {
  it('6) filtro canal=WEB devuelve solo WEB', async () => {
    p.compra.findMany.mockResolvedValue([
      compraBase(), // WEB
      compraBase({ id: 200, pago: { metodo: 'EFECTIVO', pagoEfectivo: { canalVenta: 'BUS' } } }),
      compraBase({ id: 201, pago: { metodo: 'EFECTIVO', pagoEfectivo: { canalVenta: 'OFICINA' } } }),
    ]);
    const res = await request(app).get('/reportes/boletos?canal=WEB').set(HEADERS_ADMIN);
    expect(res.status).toBe(200);
    for (const d of res.body.detalle) expect(d.canal).toBe('WEB');
    expect(res.body.agrupadoPorCanal.find((g: any) => g.canal === 'BUS').cantidadBoletos).toBe(0);
    expect(res.body.agrupadoPorCanal.find((g: any) => g.canal === 'OFICINA').cantidadBoletos).toBe(0);
  });

  it('7) filtro canal=OFICINA devuelve solo OFICINA', async () => {
    p.compra.findMany.mockResolvedValue([
      compraBase(),
      compraBase({ id: 200, pago: { metodo: 'EFECTIVO', pagoEfectivo: { canalVenta: 'OFICINA' } } }),
    ]);
    const res = await request(app).get('/reportes/boletos?canal=OFICINA').set(HEADERS_ADMIN);
    expect(res.status).toBe(200);
    for (const d of res.body.detalle) expect(d.canal).toBe('OFICINA');
  });

  it('8) filtro canal=BUS devuelve solo BUS', async () => {
    p.compra.findMany.mockResolvedValue([
      compraBase(),
      compraBase({ id: 201, pago: { metodo: 'EFECTIVO', pagoEfectivo: { canalVenta: 'BUS' } } }),
    ]);
    const res = await request(app).get('/reportes/boletos?canal=BUS').set(HEADERS_ADMIN);
    expect(res.status).toBe(200);
    for (const d of res.body.detalle) expect(d.canal).toBe('BUS');
  });

  it('9) agrupación por tipo de pasajero calcula cantidades y montos', async () => {
    p.compra.findMany.mockResolvedValue([compraBase()]);
    const res = await request(app).get('/reportes/boletos').set(HEADERS_ADMIN);
    const normal = res.body.agrupadoPorTipoPasajero.find((g: any) => g.tipoPasajero === 'NORMAL');
    const tercera = res.body.agrupadoPorTipoPasajero.find((g: any) => g.tipoPasajero === 'TERCERA_EDAD');
    expect(normal.cantidadBoletos).toBe(1);
    expect(tercera.cantidadBoletos).toBe(1);
    expect(normal.montoTotal + tercera.montoTotal).toBeCloseTo(res.body.totales.montoTotal, 2);
  });

  it('10) agrupación por canal calcula cantidades y montos', async () => {
    p.compra.findMany.mockResolvedValue([compraBase()]);
    const res = await request(app).get('/reportes/boletos').set(HEADERS_ADMIN);
    const web = res.body.agrupadoPorCanal.find((g: any) => g.canal === 'WEB');
    expect(web.cantidadBoletos).toBe(2);
    expect(web.montoTotal).toBeCloseTo(20, 2);
  });
});

describe('Export (US19)', () => {
  it('13) GET /reportes/boletos/pdf devuelve application/pdf', async () => {
    p.compra.findMany.mockResolvedValue([compraBase()]);
    const res = await request(app).get('/reportes/boletos/pdf').set(HEADERS_ADMIN);
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain('application/pdf');
    expect(res.headers['content-disposition']).toContain('reporte-boletos.pdf');
  });

  it('14) GET /reportes/boletos/excel devuelve xlsx con content-type correcto', async () => {
    p.compra.findMany.mockResolvedValue([compraBase()]);
    const res = await request(app)
      .get('/reportes/boletos/excel')
      .set(HEADERS_ADMIN)
      .buffer(true)
      .parse((r, cb) => {
        const chunks: Buffer[] = [];
        r.on('data', (c: Buffer) => chunks.push(c));
        r.on('end', () => cb(null, Buffer.concat(chunks)));
      });
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain(
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    expect(res.headers['content-disposition']).toContain('reporte-boletos.xlsx');
    // xlsx empieza con bytes "PK" (zip container).
    expect((res.body as Buffer)[0]).toBe(0x50); // P
    expect((res.body as Buffer)[1]).toBe(0x4b); // K
  });
});
