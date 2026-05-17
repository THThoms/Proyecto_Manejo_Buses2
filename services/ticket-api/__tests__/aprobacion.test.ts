import express from 'express';
import request from 'supertest';

jest.mock('../src/services/prisma', () => ({
  __esModule: true,
  default: {
    pagoTransferencia: { findUnique: jest.fn(), update: jest.fn() },
    pagoPasajero: { update: jest.fn() },
    compra: { findUnique: jest.fn(), update: jest.fn() },
    boleto: { updateMany: jest.fn() },
    compraAsiento: { update: jest.fn() },
    aprobacion: { create: jest.fn(), findMany: jest.fn() },
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

jest.mock('../src/services/emailService', () => ({
  __esModule: true,
  enviarConfirmacion: jest.fn(),
  enviarRechazo: jest.fn(),
}));

import prisma from '../src/services/prisma';
import * as busApi from '../src/services/busApiClient';
import * as emailService from '../src/services/emailService';
import aprobacionRoutes, { transferenciaDecisionRouter } from '../src/routes/aprobacion.routes';

const prismaMock = prisma as unknown as Record<string, any>;
const busApiMock = busApi as unknown as Record<string, jest.Mock>;
const emailMock = emailService as unknown as Record<string, jest.Mock>;

const app = express();
app.use(express.json());
app.use('/pagos/transferencia', transferenciaDecisionRouter);
app.use('/aprobaciones', aprobacionRoutes);

const HEADERS_OFICINISTA = { 'x-user-role': 'OFICINISTA', 'x-user-id': '7' };

beforeEach(() => {
  jest.clearAllMocks();
  prismaMock.$transaction.mockImplementation(async (cb: any) => cb(prismaMock));
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

describe('POST /pagos/transferencia/:id/aprobar', () => {
  function transferenciaPendiente() {
    return {
      id: 600,
      pagoId: 500,
      estado: 'PENDIENTE',
      pago: { id: 500, compraId: 50 },
      aprobacion: null,
    };
  }

  function compraConAsientos() {
    return {
      id: 50,
      asientos: [{ id: 100, asientoId: 5, turnoId: 7 }],
      boletos: [{ id: 200 }],
    };
  }

  it('sin rol OFICINISTA → 403', async () => {
    const res = await request(app).post('/pagos/transferencia/600/aprobar');
    expect(res.status).toBe(403);
    expect(prismaMock.aprobacion.create).not.toHaveBeenCalled();
  });

  it('transferencia inexistente → 404', async () => {
    prismaMock.pagoTransferencia.findUnique.mockResolvedValue(null);
    const res = await request(app)
      .post('/pagos/transferencia/999/aprobar')
      .set(HEADERS_OFICINISTA);
    expect(res.status).toBe(404);
  });

  it('transferencia ya aprobada → 409', async () => {
    prismaMock.pagoTransferencia.findUnique.mockResolvedValue({
      ...transferenciaPendiente(),
      estado: 'APROBADO',
    });
    const res = await request(app)
      .post('/pagos/transferencia/600/aprobar')
      .set(HEADERS_OFICINISTA);
    expect(res.status).toBe(409);
  });

  it('happy path → 200, registra Aprobacion, cascada y ocupar asientos, email stub llamado', async () => {
    prismaMock.pagoTransferencia.findUnique.mockResolvedValue(transferenciaPendiente());
    prismaMock.compra.findUnique.mockResolvedValue(compraConAsientos());
    busApiMock.ocuparAsiento.mockResolvedValue({});

    const res = await request(app)
      .post('/pagos/transferencia/600/aprobar')
      .set(HEADERS_OFICINISTA)
      .send({ observacion: 'OK validado' });

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ ok: true, estado: 'APROBADO', oficinistaId: 7 });

    expect(prismaMock.aprobacion.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          pagoTransferenciaId: 600,
          oficinistaId: 7,
          estado: 'APROBADO',
          observacion: 'OK validado',
        }),
      })
    );
    expect(prismaMock.pagoTransferencia.update).toHaveBeenCalledWith({
      where: { id: 600 },
      data: { estado: 'APROBADO' },
    });
    expect(prismaMock.pagoPasajero.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 500 },
        data: expect.objectContaining({ estado: 'APROBADO' }),
      })
    );
    expect(prismaMock.compra.update).toHaveBeenCalledWith({
      where: { id: 50 },
      data: { estado: 'CONFIRMADA' },
    });
    expect(prismaMock.boleto.updateMany).toHaveBeenCalledWith({
      where: { compraId: 50 },
      data: { estado: 'VIGENTE' },
    });
    expect(busApiMock.ocuparAsiento).toHaveBeenCalledWith(7, 5, 200);
    expect(prismaMock.compraAsiento.update).toHaveBeenCalledWith({
      where: { id: 100 },
      data: { estado: 'OCUPADO' },
    });
    expect(emailMock.enviarConfirmacion).toHaveBeenCalledWith(50);
  });

  it('oficinistaId default 1 si falta X-User-Id', async () => {
    prismaMock.pagoTransferencia.findUnique.mockResolvedValue(transferenciaPendiente());
    prismaMock.compra.findUnique.mockResolvedValue(compraConAsientos());
    busApiMock.ocuparAsiento.mockResolvedValue({});

    const res = await request(app)
      .post('/pagos/transferencia/600/aprobar')
      .set('x-user-role', 'OFICINISTA');

    expect(res.status).toBe(200);
    expect(res.body.oficinistaId).toBe(1);
  });
});

describe('POST /pagos/transferencia/:id/rechazar', () => {
  function transferenciaPendienteParaRechazo() {
    return {
      id: 601,
      pagoId: 501,
      estado: 'PENDIENTE',
      pago: {
        id: 501,
        compraId: 51,
        compra: {
          id: 51,
          asientos: [
            { id: 110, asientoId: 6, turnoId: 7 },
            { id: 111, asientoId: 7, turnoId: 7 },
          ],
        },
      },
      aprobacion: null,
    };
  }

  it('sin rol → 403', async () => {
    const res = await request(app)
      .post('/pagos/transferencia/601/rechazar')
      .send({ motivo: 'comprobante borroso' });
    expect(res.status).toBe(403);
  });

  it('motivo menor a 5 caracteres → 400', async () => {
    const res = await request(app)
      .post('/pagos/transferencia/601/rechazar')
      .set(HEADERS_OFICINISTA)
      .send({ motivo: 'no' });
    expect(res.status).toBe(400);
    expect(prismaMock.aprobacion.create).not.toHaveBeenCalled();
  });

  it('motivo faltante → 400', async () => {
    const res = await request(app)
      .post('/pagos/transferencia/601/rechazar')
      .set(HEADERS_OFICINISTA)
      .send({});
    expect(res.status).toBe(400);
  });

  it('happy path → 200, anula cascada, libera asientos, email stub', async () => {
    prismaMock.pagoTransferencia.findUnique.mockResolvedValue(transferenciaPendienteParaRechazo());
    busApiMock.liberarAsiento.mockResolvedValue({});

    const res = await request(app)
      .post('/pagos/transferencia/601/rechazar')
      .set(HEADERS_OFICINISTA)
      .send({ motivo: 'Comprobante ilegible, monto no coincide' });

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      ok: true,
      estado: 'RECHAZADO',
      motivo: 'Comprobante ilegible, monto no coincide',
      oficinistaId: 7,
    });

    expect(prismaMock.aprobacion.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          pagoTransferenciaId: 601,
          oficinistaId: 7,
          estado: 'RECHAZADO',
          observacion: 'Comprobante ilegible, monto no coincide',
        }),
      })
    );
    expect(prismaMock.pagoTransferencia.update).toHaveBeenCalledWith({
      where: { id: 601 },
      data: { estado: 'RECHAZADO' },
    });
    expect(prismaMock.pagoPasajero.update).toHaveBeenCalledWith({
      where: { id: 501 },
      data: { estado: 'RECHAZADO' },
    });
    expect(prismaMock.compra.update).toHaveBeenCalledWith({
      where: { id: 51 },
      data: { estado: 'ANULADA' },
    });
    expect(prismaMock.boleto.updateMany).toHaveBeenCalledWith({
      where: { compraId: 51 },
      data: { estado: 'ANULADO' },
    });
    expect(busApiMock.liberarAsiento).toHaveBeenCalledTimes(2);
    expect(busApiMock.liberarAsiento).toHaveBeenCalledWith(7, 6);
    expect(busApiMock.liberarAsiento).toHaveBeenCalledWith(7, 7);
    expect(emailMock.enviarRechazo).toHaveBeenCalledWith(
      51,
      'Comprobante ilegible, monto no coincide'
    );
  });

  it('transferencia ya rechazada → 409', async () => {
    prismaMock.pagoTransferencia.findUnique.mockResolvedValue({
      ...transferenciaPendienteParaRechazo(),
      estado: 'RECHAZADO',
    });
    const res = await request(app)
      .post('/pagos/transferencia/601/rechazar')
      .set(HEADERS_OFICINISTA)
      .send({ motivo: 'motivo válido' });
    expect(res.status).toBe(409);
  });
});

describe('GET /aprobaciones (historial)', () => {
  it('sin rol → 403', async () => {
    const res = await request(app).get('/aprobaciones');
    expect(res.status).toBe(403);
  });

  it('con rol → 200 y devuelve revisadoEn, oficinista, estado, observación y contexto', async () => {
    prismaMock.aprobacion.findMany.mockResolvedValue([
      {
        id: 1,
        pagoTransferenciaId: 600,
        estado: 'APROBADO',
        oficinistaId: 7,
        revisadoEn: '2024-11-03T12:00:00.000Z',
        observacion: 'Validado por caja',
        pagoTransferencia: {
          id: 600,
          banco: 'Pichincha',
          referencia: 'TRX-001',
          pago: {
            compra: {
              id: 50,
              total: '5.50',
              fechaViaje: '2024-11-09',
              turnoId: 7,
            },
          },
        },
      },
    ]);

    const res = await request(app).get('/aprobaciones').set(HEADERS_OFICINISTA);

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toMatchObject({
      revisadoEn: '2024-11-03T12:00:00.000Z',
      oficinistaId: 7,
      estado: 'APROBADO',
      observacion: 'Validado por caja',
      pagoTransferenciaId: 600,
      pagoTransferencia: {
        banco: 'Pichincha',
        referencia: 'TRX-001',
        pago: { compra: { id: 50, total: '5.50', turnoId: 7 } },
      },
    });
    expect(prismaMock.aprobacion.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        orderBy: { revisadoEn: 'desc' },
        include: {
          pagoTransferencia: {
            include: {
              pago: {
                include: {
                  compra: {
                    select: { id: true, total: true, fechaViaje: true, turnoId: true },
                  },
                },
              },
            },
          },
        },
      })
    );
  });
});
