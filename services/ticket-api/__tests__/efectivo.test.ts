import express from 'express';
import request from 'supertest';

jest.mock('../src/services/prisma', () => ({
  __esModule: true,
  default: {
    compra: { findUnique: jest.fn(), update: jest.fn() },
    pagoPasajero: { create: jest.fn(), update: jest.fn() },
    pagoEfectivo: { create: jest.fn() },
    boleto: { updateMany: jest.fn(), findMany: jest.fn() },
    compraAsiento: { update: jest.fn() },
    $transaction: jest.fn(),
  },
}));

jest.mock('../src/services/busApiClient', () => ({
  __esModule: true,
  reservarAsiento: jest.fn(),
  liberarAsiento: jest.fn(),
  ocuparAsiento: jest.fn(),
  BusApiError: class extends Error {},
}));

import prisma from '../src/services/prisma';
import * as busApi from '../src/services/busApiClient';
import efectivoRoutes from '../src/routes/efectivo.routes';

const prismaMock = prisma as unknown as Record<string, any>;
const busApiMock = busApi as unknown as Record<string, jest.Mock>;

const app = express();
app.use(express.json());
app.use('/pagos/efectivo', efectivoRoutes);

const HEADERS_OFICINISTA = { 'x-user-role': 'OFICINISTA', 'x-user-id': '9' };

function compraPendiente() {
  return {
    id: 70,
    estado: 'PENDIENTE',
    total: '5.00',
    turnoId: 12,
    pago: null,
    asientos: [{ id: 800, asientoId: 4, turnoId: 12 }],
    boletos: [{ id: 900 }],
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  prismaMock.$transaction.mockImplementation(async (cb: any) => cb(prismaMock));
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});

  prismaMock.pagoPasajero.create.mockResolvedValue({ id: 700 });
  prismaMock.pagoEfectivo.create.mockResolvedValue({ id: 800 });
  prismaMock.boleto.findMany.mockResolvedValue([
    {
      id: 900,
      uuidQr: 'uuid-test-qr',
      nombrePasajero: 'Ana Pérez',
      cedulaPasajero: '0102030405',
      tipoTarifa: 'NORMAL',
      estado: 'VIGENTE',
    },
  ]);
  busApiMock.ocuparAsiento.mockResolvedValue({});
});

describe('POST /pagos/efectivo/oficina', () => {
  it('sin rol OFICINISTA → 403', async () => {
    const res = await request(app)
      .post('/pagos/efectivo/oficina')
      .send({ compraId: 70, montoRecibido: 10 });
    expect(res.status).toBe(403);
    expect(prismaMock.pagoEfectivo.create).not.toHaveBeenCalled();
  });

  it('body inválido (montoRecibido faltante) → 400', async () => {
    const res = await request(app)
      .post('/pagos/efectivo/oficina')
      .set(HEADERS_OFICINISTA)
      .send({ compraId: 70 });
    expect(res.status).toBe(400);
  });

  it('compraId inexistente → 404', async () => {
    prismaMock.compra.findUnique.mockResolvedValue(null);
    const res = await request(app)
      .post('/pagos/efectivo/oficina')
      .set(HEADERS_OFICINISTA)
      .send({ compraId: 999, montoRecibido: 10 });
    expect(res.status).toBe(404);
  });

  it('compra ya CONFIRMADA → 409', async () => {
    prismaMock.compra.findUnique.mockResolvedValue({
      ...compraPendiente(),
      estado: 'CONFIRMADA',
    });
    const res = await request(app)
      .post('/pagos/efectivo/oficina')
      .set(HEADERS_OFICINISTA)
      .send({ compraId: 70, montoRecibido: 10 });
    expect(res.status).toBe(409);
  });

  it('pago ya APROBADO → 409', async () => {
    prismaMock.compra.findUnique.mockResolvedValue({
      ...compraPendiente(),
      pago: { id: 700, estado: 'APROBADO' },
    });
    const res = await request(app)
      .post('/pagos/efectivo/oficina')
      .set(HEADERS_OFICINISTA)
      .send({ compraId: 70, montoRecibido: 10 });
    expect(res.status).toBe(409);
  });

  it('montoRecibido < total → 400', async () => {
    prismaMock.compra.findUnique.mockResolvedValue(compraPendiente());
    const res = await request(app)
      .post('/pagos/efectivo/oficina')
      .set(HEADERS_OFICINISTA)
      .send({ compraId: 70, montoRecibido: 3 });
    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({
      error: 'Monto recibido insuficiente',
      total: 5,
      montoRecibido: 3,
    });
    expect(prismaMock.pagoEfectivo.create).not.toHaveBeenCalled();
  });

  it('happy path → 201, registra PagoEfectivo OFICINA, ocupa asiento, devuelve boletos con uuidQr y cambio', async () => {
    prismaMock.compra.findUnique.mockResolvedValue(compraPendiente());

    const res = await request(app)
      .post('/pagos/efectivo/oficina')
      .set(HEADERS_OFICINISTA)
      .send({ compraId: 70, montoRecibido: 10 });

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({
      compraId: 70,
      pagoId: 700,
      pagoEfectivoId: 800,
      vendedorId: 9,
      canalVenta: 'OFICINA',
      turnoId: 12,
      total: 5,
      montoRecibido: 10,
      cambio: 5,
    });
    expect(res.body.boletos).toEqual([
      expect.objectContaining({
        id: 900,
        uuidQr: 'uuid-test-qr',
        estado: 'VIGENTE',
      }),
    ]);

    // PagoPasajero EFECTIVO creado (no había pago previo)
    expect(prismaMock.pagoPasajero.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          compraId: 70,
          metodo: 'EFECTIVO',
          estado: 'PENDIENTE',
        }),
      })
    );

    // CA #1 + CA #3: PagoEfectivo con canalVenta=OFICINA y turnoId copiado de la compra
    expect(prismaMock.pagoEfectivo.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          pagoId: 700,
          vendedorId: 9,
          montoRecibido: 10,
          cambio: 5,
          canalVenta: 'OFICINA',
          turnoId: 12,
        }),
      })
    );

    // CA #2: confirmarPagoYOcuparAsientos delega → boleto VIGENTE
    expect(prismaMock.boleto.updateMany).toHaveBeenCalledWith({
      where: { compraId: 70 },
      data: { estado: 'VIGENTE' },
    });
    expect(prismaMock.compra.update).toHaveBeenCalledWith({
      where: { id: 70 },
      data: { estado: 'CONFIRMADA' },
    });
    expect(prismaMock.pagoPasajero.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 700 },
        data: expect.objectContaining({ estado: 'APROBADO' }),
      })
    );

    // Asiento ocupado en bus-api con boletoId y CompraAsiento → OCUPADO
    expect(busApiMock.ocuparAsiento).toHaveBeenCalledWith(12, 4, 900);
    expect(prismaMock.compraAsiento.update).toHaveBeenCalledWith({
      where: { id: 800 },
      data: { estado: 'OCUPADO' },
    });
  });

  it('reutiliza PagoPasajero existente (no APROBADO) en lugar de crear uno nuevo', async () => {
    prismaMock.compra.findUnique.mockResolvedValue({
      ...compraPendiente(),
      pago: { id: 700, estado: 'PENDIENTE' },
    });
    prismaMock.pagoPasajero.update.mockResolvedValue({ id: 700 });

    const res = await request(app)
      .post('/pagos/efectivo/oficina')
      .set(HEADERS_OFICINISTA)
      .send({ compraId: 70, montoRecibido: 5 });

    expect(res.status).toBe(201);
    expect(prismaMock.pagoPasajero.create).not.toHaveBeenCalled();
    expect(prismaMock.pagoPasajero.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 700 },
        data: expect.objectContaining({ metodo: 'EFECTIVO' }),
      })
    );
    expect(res.body.cambio).toBe(0);
  });

  it('vendedorId default 1 si falta X-User-Id', async () => {
    prismaMock.compra.findUnique.mockResolvedValue(compraPendiente());

    const res = await request(app)
      .post('/pagos/efectivo/oficina')
      .set('x-user-role', 'OFICINISTA')
      .send({ compraId: 70, montoRecibido: 5 });

    expect(res.status).toBe(201);
    expect(res.body.vendedorId).toBe(1);
    expect(prismaMock.pagoEfectivo.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ vendedorId: 1 }),
      })
    );
  });
});
