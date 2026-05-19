import express from 'express';
import request from 'supertest';

jest.mock('../src/services/prisma', () => ({
  __esModule: true,
  default: {
    boleto: { findUnique: jest.fn(), update: jest.fn() },
    escaneo: { create: jest.fn() },
    $transaction: jest.fn(),
  },
}));

jest.mock('../src/services/busApiClient', () => ({
  __esModule: true,
  getTurnoDetalle: jest.fn(),
  BusApiError: class extends Error {},
}));

import prisma from '../src/services/prisma';
import * as busApi from '../src/services/busApiClient';
import verificacionRoutes from '../src/routes/verificacion.routes';

const prismaMock = prisma as unknown as Record<string, any>;
const busApiMock = busApi as unknown as Record<string, jest.Mock>;

const app = express();
app.use(express.json());
app.use('/verificar-boleto', verificacionRoutes);

const HEADERS_CHOFER = { 'x-user-role': 'CHOFER', 'x-user-id': '1' };

function boletoBase(estado = 'VIGENTE') {
  return {
    id: 10,
    compraId: 100,
    uuidQr: 'test-uuid-qr-123',
    cedulaPasajero: '0102030405',
    nombrePasajero: 'Carlos Díaz',
    tipoTarifa: 'NORMAL',
    estado,
    expiraEn: new Date(Date.now() + 3600 * 1000),
    creadoEn: new Date(),
    compra: {
      id: 100,
      turnoId: 3,
      origen: 'Quito',
      destino: 'Ambato',
    },
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  prismaMock.$transaction.mockImplementation(async (cb: any) => cb(prismaMock));
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});

  busApiMock.getTurnoDetalle.mockResolvedValue({
    id: 3,
    bus: { id: 8, placa: 'PBA-1234', marca: 'Hino' },
    ruta: { id: 5, origen: 'Quito', destino: 'Ambato' },
  });

  prismaMock.boleto.update.mockImplementation(async ({ data }: any) => ({
    ...boletoBase(),
    estado: data.estado,
  }));

  prismaMock.escaneo.create.mockResolvedValue({ id: 500 });
});

describe('POST /verificar-boleto', () => {
  it('sin rol CHOFER → 403', async () => {
    const res = await request(app)
      .post('/verificar-boleto')
      .send({ uuidQr: 'test-uuid-qr-123', turnoId: 3 });
    expect(res.status).toBe(403);
    expect(prismaMock.boleto.update).not.toHaveBeenCalled();
  });

  it('body incompleto (falta uuidQr) → 400', async () => {
    const res = await request(app)
      .post('/verificar-boleto')
      .set(HEADERS_CHOFER)
      .send({ turnoId: 3 });
    expect(res.status).toBe(400);
  });

  it('boleto no encontrado en BD → 404 NO_ENCONTRADO', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(null);
    const res = await request(app)
      .post('/verificar-boleto')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'invalid-uuid', turnoId: 3 });
    
    expect(res.status).toBe(404);
    expect(res.body).toMatchObject({
      valido: false,
      motivo: 'NO_ENCONTRADO',
      mensaje: 'No se encontró ningún boleto con este código QR',
    });
  });

  it('turno del boleto no coincide con el turno del chofer → 400 TURNO_INCORRECTO', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(boletoBase());
    const res = await request(app)
      .post('/verificar-boleto')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'test-uuid-qr-123', turnoId: 999 }); // Turno incorrecto
    
    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({
      valido: false,
      motivo: 'TURNO_INCORRECTO',
      mensaje: 'Este boleto no corresponde a este viaje/turno',
    });
  });

  it('boleto ya UTILIZADO → 400 UTILIZADO', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(boletoBase('UTILIZADO'));
    const res = await request(app)
      .post('/verificar-boleto')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'test-uuid-qr-123', turnoId: 3 });
    
    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({
      valido: false,
      motivo: 'UTILIZADO',
      mensaje: 'Este boleto ya fue utilizado',
    });
  });

  it('boleto EXPIRADO → 400 EXPIRADO', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(boletoBase('EXPIRADO'));
    const res = await request(app)
      .post('/verificar-boleto')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'test-uuid-qr-123', turnoId: 3 });
    
    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({
      valido: false,
      motivo: 'EXPIRADO',
      mensaje: 'Este boleto ha expirado',
    });
  });

  it('boleto PENDIENTE → 400 PENDIENTE', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(boletoBase('PENDIENTE'));
    const res = await request(app)
      .post('/verificar-boleto')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'test-uuid-qr-123', turnoId: 3 });
    
    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({
      valido: false,
      motivo: 'PENDIENTE',
      mensaje: 'El pago de este boleto no ha sido confirmado',
    });
  });

  it('happy path: boleto VIGENTE → 200 VALIDO, cambia a UTILIZADO y crea Escaneo', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(boletoBase('VIGENTE'));

    const res = await request(app)
      .post('/verificar-boleto')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'test-uuid-qr-123', turnoId: 3 });

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      valido: true,
      pasajero: 'Carlos Díaz',
      cedula: '0102030405',
      destino: 'Ambato',
      origen: 'Quito',
    });

    expect(prismaMock.boleto.update).toHaveBeenCalledWith({
      where: { id: 10 },
      data: { estado: 'UTILIZADO' },
    });

    expect(prismaMock.escaneo.create).toHaveBeenCalledWith({
      data: {
        boletoId: 10,
        oficialId: 1,
        busId: 8,
        turnoId: 3,
        resultado: 'APROBADO',
      },
    });
  });

  it('happy path: boleto VIGENTE sin enviar turnoId → 200 VALIDO, infiere turnoId automaticamente de la BD', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(boletoBase('VIGENTE'));

    const res = await request(app)
      .post('/verificar-boleto')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'test-uuid-qr-123' }); // Sin turnoId

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      valido: true,
      pasajero: 'Carlos Díaz',
      cedula: '0102030405',
      destino: 'Ambato',
      origen: 'Quito',
    });

    expect(prismaMock.escaneo.create).toHaveBeenCalledWith({
      data: {
        boletoId: 10,
        oficialId: 1,
        busId: 8,
        turnoId: 3, // Inferred from purchase
        resultado: 'APROBADO',
      },
    });
  });
});
