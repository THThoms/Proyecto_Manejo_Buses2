import express from 'express';
import request from 'supertest';

jest.mock('../src/services/prisma', () => ({
  __esModule: true,
  default: {
    boleto: { findUnique: jest.fn(), findMany: jest.fn() },
  },
}));

const qrcodeBufferMock = jest.fn();
jest.mock('qrcode', () => ({
  __esModule: true,
  default: { toBuffer: (...args: any[]) => qrcodeBufferMock(...args) },
  toBuffer: (...args: any[]) => qrcodeBufferMock(...args),
}));

jest.mock('../src/services/busApiClient', () => {
  class BusApiError extends Error {
    status: number;
    body: unknown;
    constructor(status: number, body: unknown, message: string) {
      super(message);
      this.status = status;
      this.body = body;
    }
  }
  return {
    __esModule: true,
    BusApiError,
    getTurnoDetalle: jest.fn(),
    reservarAsiento: jest.fn(),
    liberarAsiento: jest.fn(),
    ocuparAsiento: jest.fn(),
  };
});

import prisma from '../src/services/prisma';
import * as busApi from '../src/services/busApiClient';
import boletoRoutes from '../src/routes/boleto.routes';

const prismaMock = prisma as unknown as Record<string, any>;
const busApiMock = busApi as unknown as Record<string, jest.Mock> & {
  BusApiError: typeof Error;
};

const app = express();
app.use('/boletos', boletoRoutes);

// PNG 1x1 transparente válido — pdfkit valida los chunks del PNG, así que el
// buffer del mock tiene que ser un PNG real aunque sea mínimo.
const QR_BUF = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  'base64',
);

beforeEach(() => {
  jest.clearAllMocks();
  qrcodeBufferMock.mockResolvedValue(QR_BUF);
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});

function boletoBase() {
  return {
    id: 900,
    compraId: 70,
    uuidQr: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    nombrePasajero: 'Ana Pérez',
    cedulaPasajero: '0102030405',
    tipoTarifa: 'NORMAL',
    estado: 'VIGENTE',
    expiraEn: new Date('2026-06-30T00:00:00.000Z'),
    compra: {
      id: 70,
      fechaViaje: new Date('2026-05-20T00:00:00.000Z'),
      turnoId: 12,
      asientos: [{ id: 800, asientoId: 4, estado: 'OCUPADO' }],
    },
  };
}

describe('GET /boletos/:boletoId/qr.png', () => {
  it('boletoId no numérico → 400', async () => {
    const res = await request(app).get('/boletos/abc/qr.png');
    expect(res.status).toBe(400);
  });

  it('boleto inexistente → 404', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(null);
    const res = await request(app).get('/boletos/999/qr.png');
    expect(res.status).toBe(404);
    expect(qrcodeBufferMock).not.toHaveBeenCalled();
  });

  it('happy path → 200, image/png, qrcode invocado con SOLO el uuidQr (CA #2)', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue({
      id: 900,
      uuidQr: 'uuid-test-qr',
    });

    const res = await request(app).get('/boletos/900/qr.png');

    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toBe('image/png');
    expect(res.headers['cache-control']).toContain('max-age');
    expect(res.body.length).toBeGreaterThan(8);
    expect(qrcodeBufferMock).toHaveBeenCalledTimes(1);
    // El QR NO incluye cédula, nombre ni datos de pago: solo el uuidQr.
    expect(qrcodeBufferMock.mock.calls[0][0]).toBe('uuid-test-qr');
  });
});

describe('GET /boletos/:boletoId/pdf', () => {
  it('boletoId no numérico → 400', async () => {
    const res = await request(app).get('/boletos/abc/pdf');
    expect(res.status).toBe(400);
  });

  it('boleto inexistente → 404', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(null);
    const res = await request(app).get('/boletos/999/pdf');
    expect(res.status).toBe(404);
    expect(qrcodeBufferMock).not.toHaveBeenCalled();
  });

  it('happy path → 200 application/pdf con Content-Disposition attachment + uuidQr en filename', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(boletoBase());
    prismaMock.boleto.findMany.mockResolvedValue([{ id: 900 }]);
    busApiMock.getTurnoDetalle.mockResolvedValue({
      id: 12,
      fecha: '2026-05-20',
      horaInicio: '08:30',
      horaFin: '12:00',
      estado: 'PENDIENTE',
      ruta: { id: 3, nombre: 'Quito - Ambato', origen: 'Quito', destino: 'Ambato' },
      bus: { id: 7, placa: 'PBA-1234', marca: 'Hino' },
    });

    const res = await request(app).get('/boletos/900/pdf').buffer(true);

    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toBe('application/pdf');
    expect(res.headers['content-disposition']).toContain('attachment');
    expect(res.headers['content-disposition']).toContain('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d');
    expect(res.body.length).toBeGreaterThan(500);
    // El cuerpo es un PDF válido — empieza con %PDF
    expect(res.body.slice(0, 4).toString('ascii')).toBe('%PDF');
    expect(busApiMock.getTurnoDetalle).toHaveBeenCalledWith(12);
    // El QR del PDF también se construye con SOLO el uuidQr.
    expect(qrcodeBufferMock).toHaveBeenCalledWith(
      '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      expect.any(Object)
    );
  });

  it('si bus-api responde error el PDF se genera igual sin datos de ruta (degradación)', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(boletoBase());
    prismaMock.boleto.findMany.mockResolvedValue([{ id: 900 }]);
    const BusApiErr = (busApiMock as any).BusApiError;
    busApiMock.getTurnoDetalle.mockRejectedValue(new BusApiErr(503, {}, 'bus-api down'));

    const res = await request(app).get('/boletos/900/pdf').buffer(true);

    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toBe('application/pdf');
    expect(res.body.slice(0, 4).toString('ascii')).toBe('%PDF');
  });
});
