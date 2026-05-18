import express from 'express';
import request from 'supertest';

jest.mock('../src/services/prisma', () => ({
  __esModule: true,
  default: {
    pagoTransferencia: { findUnique: jest.fn(), update: jest.fn() },
    pagoPasajero: { update: jest.fn(), findMany: jest.fn() },
    compra: { findUnique: jest.fn(), update: jest.fn() },
    boleto: { updateMany: jest.fn() },
    compraAsiento: { update: jest.fn() },
    aprobacion: { create: jest.fn(), findMany: jest.fn(), count: jest.fn() },
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
  prismaMock.aprobacion.count.mockResolvedValue(0);
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

describe('GET /aprobaciones/historial-pagos', () => {
  it('sin rol -> 403', async () => {
    const res = await request(app).get('/aprobaciones/historial-pagos');
    expect(res.status).toBe(403);
  });

  it('devuelve historial unificado de transferencia, tarjeta y efectivo', async () => {
    prismaMock.pagoPasajero.findMany.mockResolvedValue([
      {
        id: 10,
        compraId: 50,
        monto: '5.50',
        metodo: 'TRANSFERENCIA',
        estado: 'APROBADO',
        pagadoEn: null,
        compra: {
          id: 50,
          total: '5.50',
          canal: 'WEB',
          estado: 'CONFIRMADA',
          fechaViaje: '2024-11-09',
          turnoId: 7,
          creadoEn: '2024-11-01T09:00:00.000Z',
          boletos: [
            {
              id: 70,
              nombrePasajero: 'Ana Perez',
              cedulaPasajero: '0102030405',
              estado: 'VIGENTE',
              uuidQr: 'qr-ana',
            },
          ],
        },
        pagoTransferencia: {
          id: 600,
          banco: 'Pichincha',
          referencia: 'TRX-001',
          estado: 'APROBADO',
          creadoEn: '2024-11-01T10:00:00.000Z',
          aprobacion: {
            id: 1,
            pagoTransferenciaId: 600,
            oficinistaId: 7,
            estado: 'APROBADO',
            observacion: 'Validado por caja',
            revisadoEn: '2024-11-01T11:00:00.000Z',
          },
        },
        pagoTarjeta: null,
        pagoEfectivo: null,
      },
      {
        id: 11,
        compraId: 51,
        monto: '8.00',
        metodo: 'TARJETA',
        estado: 'APROBADO',
        pagadoEn: '2024-11-02T10:30:00.000Z',
        compra: {
          id: 51,
          total: '8.00',
          canal: 'WEB',
          estado: 'CONFIRMADA',
          fechaViaje: '2024-11-10',
          turnoId: 8,
          creadoEn: '2024-11-02T09:50:00.000Z',
          boletos: [
            {
              id: 71,
              nombrePasajero: 'Luis Mora',
              cedulaPasajero: '0203040506',
              estado: 'VIGENTE',
              uuidQr: 'qr-luis',
            },
          ],
        },
        pagoTransferencia: null,
        pagoTarjeta: {
          id: 710,
          marca: 'VISA',
          ultimos4: '4242',
          referenciaPasarela: 'pi_123',
        },
        pagoEfectivo: null,
      },
      {
        id: 12,
        compraId: 52,
        monto: '6.00',
        metodo: 'EFECTIVO',
        estado: 'APROBADO',
        pagadoEn: '2024-11-03T08:15:00.000Z',
        compra: {
          id: 52,
          total: '6.00',
          canal: 'OFICINISTA',
          estado: 'CONFIRMADA',
          fechaViaje: '2024-11-11',
          turnoId: 9,
          creadoEn: '2024-11-03T08:00:00.000Z',
          boletos: [
            {
              id: 72,
              nombrePasajero: 'Marta Silva',
              cedulaPasajero: '0304050607',
              estado: 'VIGENTE',
              uuidQr: 'qr-marta',
            },
          ],
        },
        pagoTransferencia: null,
        pagoTarjeta: null,
        pagoEfectivo: {
          id: 810,
          vendedorId: 1,
          montoRecibido: '10.00',
          cambio: '4.00',
          canalVenta: 'OFICINA',
          turnoId: 9,
          offlineId: null,
        },
      },
    ]);

    const res = await request(app)
      .get('/aprobaciones/historial-pagos')
      .set(HEADERS_OFICINISTA);

    expect(res.status).toBe(200);
    expect(res.headers['x-total-count']).toBe('3');
    expect(res.body).toHaveLength(3);
    expect(res.body[0]).toMatchObject({
      compraId: 52,
      metodoPago: 'EFECTIVO',
      estado: 'APROBADO',
      efectivo: { canalVenta: 'OFICINA', cambio: '4.00' },
    });
    expect(res.body[1]).toMatchObject({
      compraId: 51,
      metodoPago: 'TARJETA',
      tarjeta: { marca: 'VISA', ultimos4: '4242' },
    });
    expect(res.body[2]).toMatchObject({
      compraId: 50,
      metodoPago: 'TRANSFERENCIA',
      transferencia: { banco: 'Pichincha', referencia: 'TRX-001', oficinistaId: 7 },
    });
  });

  it('filtra por metodoPago y cedula en el where base', async () => {
    prismaMock.pagoPasajero.findMany.mockResolvedValue([]);

    const res = await request(app)
      .get('/aprobaciones/historial-pagos?metodoPago=EFECTIVO&cedula=0102030405')
      .set(HEADERS_OFICINISTA);

    expect(res.status).toBe(200);
    expect(prismaMock.pagoPasajero.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: {
          metodo: 'EFECTIVO',
          compra: {
            boletos: { some: { cedulaPasajero: '0102030405' } },
          },
        },
      })
    );
  });

  it('filtra por fechas sobre la fecha de referencia normalizada', async () => {
    prismaMock.pagoPasajero.findMany.mockResolvedValue([
      {
        id: 10,
        compraId: 50,
        monto: '5.50',
        metodo: 'TRANSFERENCIA',
        estado: 'APROBADO',
        pagadoEn: null,
        compra: {
          id: 50,
          total: '5.50',
          canal: 'WEB',
          estado: 'CONFIRMADA',
          fechaViaje: '2024-11-09',
          turnoId: 7,
          creadoEn: '2024-11-01T09:00:00.000Z',
          boletos: [],
        },
        pagoTransferencia: {
          id: 600,
          banco: 'Pichincha',
          referencia: 'TRX-001',
          estado: 'APROBADO',
          creadoEn: '2024-11-01T10:00:00.000Z',
          aprobacion: {
            id: 1,
            pagoTransferenciaId: 600,
            oficinistaId: 7,
            estado: 'APROBADO',
            observacion: 'Validado por caja',
            revisadoEn: '2024-11-01T11:00:00.000Z',
          },
        },
        pagoTarjeta: null,
        pagoEfectivo: null,
      },
      {
        id: 12,
        compraId: 52,
        monto: '6.00',
        metodo: 'EFECTIVO',
        estado: 'APROBADO',
        pagadoEn: '2024-11-03T08:15:00.000Z',
        compra: {
          id: 52,
          total: '6.00',
          canal: 'OFICINISTA',
          estado: 'CONFIRMADA',
          fechaViaje: '2024-11-11',
          turnoId: 9,
          creadoEn: '2024-11-03T08:00:00.000Z',
          boletos: [],
        },
        pagoTransferencia: null,
        pagoTarjeta: null,
        pagoEfectivo: {
          id: 810,
          vendedorId: 1,
          montoRecibido: '10.00',
          cambio: '4.00',
          canalVenta: 'OFICINA',
          turnoId: 9,
          offlineId: null,
        },
      },
    ]);

    const res = await request(app)
      .get('/aprobaciones/historial-pagos?fechaDesde=2024-11-02&fechaHasta=2024-11-04')
      .set(HEADERS_OFICINISTA);

    expect(res.status).toBe(200);
    expect(res.headers['x-total-count']).toBe('1');
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toMatchObject({ compraId: 52, metodoPago: 'EFECTIVO' });
  });

  it('limit por encima del maximo -> 400', async () => {
    const res = await request(app)
      .get('/aprobaciones/historial-pagos?limit=500')
      .set(HEADERS_OFICINISTA);

    expect(res.status).toBe(400);
    expect(prismaMock.pagoPasajero.findMany).not.toHaveBeenCalled();
  });
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

  // ----- Mejora US13 (Sprint): filtros operativos -----

  it('filtra por estado=APROBADO sin tocar otros campos', async () => {
    prismaMock.aprobacion.findMany.mockResolvedValue([]);
    prismaMock.aprobacion.count.mockResolvedValue(3);

    const res = await request(app)
      .get('/aprobaciones?estado=APROBADO')
      .set(HEADERS_OFICINISTA);

    expect(res.status).toBe(200);
    expect(res.headers['x-total-count']).toBe('3');
    expect(res.headers['x-page']).toBe('1');
    expect(res.headers['x-limit']).toBe('50');
    expect(prismaMock.aprobacion.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({ estado: 'APROBADO' }),
        skip: 0,
        take: 50,
      })
    );
    expect(prismaMock.aprobacion.count).toHaveBeenCalledWith({
      where: expect.objectContaining({ estado: 'APROBADO' }),
    });
  });

  it('estado=TODOS no agrega filtro de estado al where', async () => {
    prismaMock.aprobacion.findMany.mockResolvedValue([]);

    const res = await request(app)
      .get('/aprobaciones?estado=TODOS')
      .set(HEADERS_OFICINISTA);

    expect(res.status).toBe(200);
    const callArg = prismaMock.aprobacion.findMany.mock.calls[0][0];
    expect(callArg.where?.estado).toBeUndefined();
  });

  it('filtra por cedula → where.pagoTransferencia.pago.compra.boletos.some.cedulaPasajero', async () => {
    prismaMock.aprobacion.findMany.mockResolvedValue([]);

    const res = await request(app)
      .get('/aprobaciones?cedula=0102030405')
      .set(HEADERS_OFICINISTA);

    expect(res.status).toBe(200);
    const callArg = prismaMock.aprobacion.findMany.mock.calls[0][0];
    expect(callArg.where).toEqual(
      expect.objectContaining({
        pagoTransferencia: {
          pago: {
            compra: {
              boletos: { some: { cedulaPasajero: '0102030405' } },
            },
          },
        },
      })
    );
  });

  it('filtra por rango de fechas → where.revisadoEn.gte y .lte', async () => {
    prismaMock.aprobacion.findMany.mockResolvedValue([]);

    const res = await request(app)
      .get('/aprobaciones?fechaDesde=2024-11-01&fechaHasta=2024-11-30')
      .set(HEADERS_OFICINISTA);

    expect(res.status).toBe(200);
    const callArg = prismaMock.aprobacion.findMany.mock.calls[0][0];
    expect(callArg.where.revisadoEn.gte).toEqual(new Date('2024-11-01T00:00:00.000Z'));
    expect(callArg.where.revisadoEn.lte).toEqual(new Date('2024-11-30T23:59:59.999Z'));
  });

  it('paginación page/limit se traduce a skip/take y expone headers', async () => {
    prismaMock.aprobacion.findMany.mockResolvedValue([]);
    prismaMock.aprobacion.count.mockResolvedValue(120);

    const res = await request(app)
      .get('/aprobaciones?page=3&limit=10')
      .set(HEADERS_OFICINISTA);

    expect(res.status).toBe(200);
    expect(res.headers['x-total-count']).toBe('120');
    expect(res.headers['x-page']).toBe('3');
    expect(res.headers['x-limit']).toBe('10');
    expect(prismaMock.aprobacion.findMany).toHaveBeenCalledWith(
      expect.objectContaining({ skip: 20, take: 10 })
    );
  });

  it('limit por encima del máximo → 400', async () => {
    const res = await request(app)
      .get('/aprobaciones?limit=500')
      .set(HEADERS_OFICINISTA);

    expect(res.status).toBe(400);
    expect(prismaMock.aprobacion.findMany).not.toHaveBeenCalled();
  });
});
