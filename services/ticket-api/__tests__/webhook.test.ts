import { stripeWebhook } from '../src/controllers/webhook.controller';
import { expirarComprasPendientes } from '../src/services/expirarCompras';
import prisma from '../src/services/prisma';
import stripe from '../src/services/stripe';
import * as busApi from '../src/services/busApiClient';

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
    boleto: { updateMany: jest.fn() },
    compraAsiento: { update: jest.fn() },
    $transaction: jest.fn(),
  },
}));

jest.mock('../src/services/stripe', () => ({
  __esModule: true,
  default: {
    webhooks: { constructEvent: jest.fn() },
    paymentIntents: { retrieve: jest.fn() },
  },
}));

jest.mock('../src/services/busApiClient', () => ({
  __esModule: true,
  reservarAsiento: jest.fn(),
  liberarAsiento: jest.fn(),
  ocuparAsiento: jest.fn(),
  BusApiError: class extends Error {},
}));

const prismaMock = prisma as unknown as Record<string, any>;
const stripeMock = stripe as unknown as Record<string, any>;
const busApiMock = busApi as unknown as Record<string, jest.Mock>;

function mockReq(opts: { signature?: string | null; body?: any } = {}) {
  const headers: Record<string, string> = {};
  const sig = opts.signature === undefined ? 'sig_valida' : opts.signature;
  if (sig) headers['stripe-signature'] = sig;
  return { headers, body: opts.body ?? Buffer.from('{}') } as any;
}

function mockRes() {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
}

beforeEach(() => {
  jest.clearAllMocks();
  prismaMock.$transaction.mockImplementation(async (cb: any) => cb(prismaMock));
  // Silenciamos console.error/log esperados (errores manejados, mensajes de cleanup).
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  (console.error as jest.Mock).mockRestore?.();
  (console.log as jest.Mock).mockRestore?.();
});

describe('stripeWebhook', () => {
  it('firma inválida → 400 y no toca DB', async () => {
    stripeMock.webhooks.constructEvent.mockImplementation(() => {
      throw new Error('Invalid signature');
    });
    const req = mockReq();
    const res = mockRes();

    await stripeWebhook(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalled();
    expect(prismaMock.eventoWebhook.findUnique).not.toHaveBeenCalled();
    expect(prismaMock.compra.update).not.toHaveBeenCalled();
  });

  it('falta firma o secret → 400', async () => {
    const req = mockReq({ signature: null });
    const res = mockRes();
    await stripeWebhook(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(stripeMock.webhooks.constructEvent).not.toHaveBeenCalled();
  });

  it('evento duplicado (procesadoEn ya seteado) → 200 sin reprocesar', async () => {
    stripeMock.webhooks.constructEvent.mockReturnValue({
      id: 'evt_dup',
      type: 'checkout.session.completed',
      data: { object: {} },
    });
    prismaMock.eventoWebhook.findUnique.mockResolvedValue({
      id: 1,
      eventId: 'evt_dup',
      procesadoEn: new Date(),
    });

    const req = mockReq();
    const res = mockRes();
    await stripeWebhook(req, res);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ duplicated: true })
    );
    expect(prismaMock.compra.findUnique).not.toHaveBeenCalled();
    expect(busApiMock.ocuparAsiento).not.toHaveBeenCalled();
    expect(prismaMock.eventoWebhook.update).not.toHaveBeenCalled();
  });

  it('checkout.session.completed → marca pago APROBADO y ocupa asientos', async () => {
    stripeMock.webhooks.constructEvent.mockReturnValue({
      id: 'evt_ok',
      type: 'checkout.session.completed',
      data: {
        object: {
          id: 'cs_1',
          payment_intent: 'pi_1',
          metadata: { compraId: '10', pagoId: '20' },
        },
      },
    });
    prismaMock.eventoWebhook.findUnique.mockResolvedValue(null);
    prismaMock.eventoWebhook.create.mockResolvedValue({});
    prismaMock.eventoWebhook.update.mockResolvedValue({});
    stripeMock.paymentIntents.retrieve.mockResolvedValue({
      payment_method: { card: { last4: '4242', brand: 'visa' } },
    });
    prismaMock.compra.findUnique.mockResolvedValue({
      id: 10,
      asientos: [{ id: 100, asientoId: 1, turnoId: 5 }],
      boletos: [{ id: 200 }],
    });
    prismaMock.pagoPasajero.update.mockResolvedValue({});
    prismaMock.pagoTarjeta.upsert.mockResolvedValue({});
    prismaMock.compra.update.mockResolvedValue({});
    prismaMock.boleto.updateMany.mockResolvedValue({});
    prismaMock.compraAsiento.update.mockResolvedValue({});
    busApiMock.ocuparAsiento.mockResolvedValue({});

    const req = mockReq();
    const res = mockRes();
    await stripeWebhook(req, res);

    expect(prismaMock.pagoPasajero.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 20 },
        data: expect.objectContaining({ estado: 'APROBADO' }),
      })
    );

    const upsertArgs = prismaMock.pagoTarjeta.upsert.mock.calls[0][0];
    expect(upsertArgs.where).toEqual({ pagoId: 20 });
    expect(upsertArgs.create.ultimos4).toBe('4242');
    expect(upsertArgs.create.marca).toBe('visa');
    expect(upsertArgs.create.referenciaPasarela).toBe('pi_1');

    expect(prismaMock.compra.update).toHaveBeenCalledWith({
      where: { id: 10 },
      data: { estado: 'CONFIRMADA' },
    });
    expect(prismaMock.boleto.updateMany).toHaveBeenCalledWith({
      where: { compraId: 10 },
      data: { estado: 'VIGENTE' },
    });
    expect(busApiMock.ocuparAsiento).toHaveBeenCalledWith(5, 1, 200);
    expect(prismaMock.compraAsiento.update).toHaveBeenCalledWith({
      where: { id: 100 },
      data: { estado: 'OCUPADO' },
    });
    expect(res.json).toHaveBeenCalledWith({ received: true });
    expect(prismaMock.eventoWebhook.update).toHaveBeenCalledWith(
      expect.objectContaining({ where: { eventId: 'evt_ok' } })
    );
  });

  it('checkout.session.expired → marca pago RECHAZADO y libera asientos', async () => {
    stripeMock.webhooks.constructEvent.mockReturnValue({
      id: 'evt_fail',
      type: 'checkout.session.expired',
      data: {
        object: {
          id: 'cs_2',
          metadata: { compraId: '11', pagoId: '21' },
        },
      },
    });
    prismaMock.eventoWebhook.findUnique.mockResolvedValue(null);
    prismaMock.eventoWebhook.create.mockResolvedValue({});
    prismaMock.eventoWebhook.update.mockResolvedValue({});
    prismaMock.compra.findUnique.mockResolvedValue({
      id: 11,
      asientos: [
        { id: 101, asientoId: 2, turnoId: 5 },
        { id: 102, asientoId: 3, turnoId: 5 },
      ],
    });
    prismaMock.pagoPasajero.update.mockResolvedValue({});
    prismaMock.compra.update.mockResolvedValue({});
    prismaMock.boleto.updateMany.mockResolvedValue({});
    prismaMock.compraAsiento.update.mockResolvedValue({});
    busApiMock.liberarAsiento.mockResolvedValue({});

    const req = mockReq();
    const res = mockRes();
    await stripeWebhook(req, res);

    expect(prismaMock.pagoPasajero.update).toHaveBeenCalledWith({
      where: { id: 21 },
      data: { estado: 'RECHAZADO' },
    });
    expect(prismaMock.compra.update).toHaveBeenCalledWith({
      where: { id: 11 },
      data: { estado: 'ANULADA' },
    });
    expect(prismaMock.boleto.updateMany).toHaveBeenCalledWith({
      where: { compraId: 11 },
      data: { estado: 'ANULADO' },
    });
    expect(busApiMock.liberarAsiento).toHaveBeenCalledTimes(2);
    expect(busApiMock.liberarAsiento).toHaveBeenCalledWith(5, 2);
    expect(busApiMock.liberarAsiento).toHaveBeenCalledWith(5, 3);
    expect(res.json).toHaveBeenCalledWith({ received: true });
  });
});

describe('expirarComprasPendientes (Fase 6 — cleanup TTL)', () => {
  it('anula compras PENDIENTE viejas y libera sus asientos', async () => {
    prismaMock.compra.findMany.mockResolvedValue([
      {
        id: 30,
        estado: 'PENDIENTE',
        creadoEn: new Date(Date.now() - 30 * 60 * 1000),
        asientos: [{ id: 300, asientoId: 5, turnoId: 7 }],
        pago: null,
      },
    ]);
    prismaMock.compra.update.mockResolvedValue({});
    prismaMock.boleto.updateMany.mockResolvedValue({});
    prismaMock.compraAsiento.update.mockResolvedValue({});
    busApiMock.liberarAsiento.mockResolvedValue({});

    await expirarComprasPendientes();

    // El filtrado por TTL ahora es in-memory (per-método); findMany solo filtra estado.
    const findManyArgs = prismaMock.compra.findMany.mock.calls[0][0];
    expect(findManyArgs.where.estado).toBe('PENDIENTE');

    expect(prismaMock.compra.update).toHaveBeenCalledWith({
      where: { id: 30 },
      data: { estado: 'ANULADA' },
    });
    expect(prismaMock.boleto.updateMany).toHaveBeenCalledWith({
      where: { compraId: 30 },
      data: { estado: 'ANULADO' },
    });
    expect(busApiMock.liberarAsiento).toHaveBeenCalledWith(7, 5);
    expect(prismaMock.compraAsiento.update).toHaveBeenCalledWith({
      where: { id: 300 },
      data: { estado: 'LIBERADO' },
    });
  });

  it('si hay PagoPasajero asociado, lo marca como RECHAZADO', async () => {
    prismaMock.compra.findMany.mockResolvedValue([
      {
        id: 31,
        estado: 'PENDIENTE',
        creadoEn: new Date(Date.now() - 30 * 60 * 1000),
        asientos: [],
        pago: { id: 99, metodo: 'TARJETA', estado: 'PENDIENTE' },
      },
    ]);
    prismaMock.pagoPasajero.update.mockResolvedValue({});
    prismaMock.compra.update.mockResolvedValue({});
    prismaMock.boleto.updateMany.mockResolvedValue({});

    await expirarComprasPendientes();

    expect(prismaMock.pagoPasajero.update).toHaveBeenCalledWith({
      where: { id: 99 },
      data: { estado: 'RECHAZADO' },
    });
  });

  it('no hace nada si no hay compras viejas', async () => {
    prismaMock.compra.findMany.mockResolvedValue([]);

    await expirarComprasPendientes();

    expect(prismaMock.compra.update).not.toHaveBeenCalled();
    expect(busApiMock.liberarAsiento).not.toHaveBeenCalled();
  });
});
