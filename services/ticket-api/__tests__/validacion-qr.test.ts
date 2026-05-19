import express from 'express';
import request from 'supertest';

jest.mock('../src/services/prisma', () => ({
  __esModule: true,
  default: {
    boleto: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
    },
    escaneo: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  },
}));

import prisma from '../src/services/prisma';
import { boletosRouter, turnosRouter } from '../src/routes/validacion.routes';

const prismaMock = prisma as unknown as Record<string, any>;

const app = express();
app.use(express.json());
app.use('/boletos', boletosRouter);
app.use('/turnos', turnosRouter);

const HEADERS_CHOFER = { 'x-user-role': 'CHOFER', 'x-user-id': '7' };

function boletoVigente() {
  return {
    id: 900,
    uuidQr: 'uuid-vigente',
    cedulaPasajero: '0102030405',
    nombrePasajero: 'Ana Pérez',
    tipoTarifa: 'NORMAL',
    estado: 'VIGENTE',
    expiraEn: new Date(Date.now() + 24 * 60 * 60 * 1000),
    compra: {
      id: 70,
      turnoId: 12,
      destino: 'Cuenca',
      asientos: [{ asientoId: 4 }],
    },
  };
}

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, 'error').mockImplementation(() => {});
  prismaMock.escaneo.findUnique.mockResolvedValue(null);
  prismaMock.escaneo.create.mockResolvedValue({ id: 1 });
});

describe('POST /boletos/validar-qr', () => {
  it('sin rol CHOFER → 403', async () => {
    const res = await request(app)
      .post('/boletos/validar-qr')
      .send({ uuidQr: 'uuid-vigente', turnoId: 12 });
    expect(res.status).toBe(403);
    expect(prismaMock.boleto.findUnique).not.toHaveBeenCalled();
  });

  it('uuidQr inexistente → INVALIDO con motivo Boleto no encontrado', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(null);
    const res = await request(app)
      .post('/boletos/validar-qr')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'no-existe', turnoId: 12 });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      status: 'INVALIDO',
      motivo: 'Boleto no encontrado',
    });
    expect(prismaMock.boleto.update).not.toHaveBeenCalled();
  });

  it('boleto PENDIENTE → INVALIDO con motivo específico, no cambia estado', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue({
      ...boletoVigente(),
      estado: 'PENDIENTE',
    });
    const res = await request(app)
      .post('/boletos/validar-qr')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'uuid-vigente', turnoId: 12 });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      status: 'INVALIDO',
      motivo: 'Boleto pendiente de validación o pago',
    });
    expect(prismaMock.boleto.update).not.toHaveBeenCalled();
  });

  it('boleto ANULADO → INVALIDO con motivo específico', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue({
      ...boletoVigente(),
      estado: 'ANULADO',
    });
    const res = await request(app)
      .post('/boletos/validar-qr')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'uuid-vigente', turnoId: 12 });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      status: 'INVALIDO',
      motivo: 'Boleto anulado',
    });
    expect(prismaMock.boleto.update).not.toHaveBeenCalled();
  });

  it('boleto EXPIRADO → EXPIRADO', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue({
      ...boletoVigente(),
      estado: 'EXPIRADO',
    });
    const res = await request(app)
      .post('/boletos/validar-qr')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'uuid-vigente', turnoId: 12 });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      status: 'EXPIRADO',
      motivo: 'Boleto expirado',
    });
    expect(prismaMock.boleto.update).not.toHaveBeenCalled();
  });

  it('boleto UTILIZADO → UTILIZADO, no cambia estado', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue({
      ...boletoVigente(),
      estado: 'UTILIZADO',
    });
    const res = await request(app)
      .post('/boletos/validar-qr')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'uuid-vigente', turnoId: 12 });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      status: 'UTILIZADO',
      motivo: 'Boleto ya utilizado',
    });
    expect(prismaMock.boleto.update).not.toHaveBeenCalled();
  });

  it('boleto VIGENTE del turno correcto → VALIDO, cambia a UTILIZADO con datos del pasajero', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue(boletoVigente());
    prismaMock.boleto.update.mockResolvedValue({
      ...boletoVigente(),
      estado: 'UTILIZADO',
    });

    const res = await request(app)
      .post('/boletos/validar-qr')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'uuid-vigente', turnoId: 12 });

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      status: 'VALIDO',
      mensaje: 'Boleto válido',
      boleto: expect.objectContaining({
        id: 900,
        uuidQr: 'uuid-vigente',
        estado: 'UTILIZADO',
        nombrePasajero: 'Ana Pérez',
        asiento: '#4',
        destino: 'Cuenca',
      }),
    });

    expect(prismaMock.boleto.update).toHaveBeenCalledWith({
      where: { id: 900 },
      data: { estado: 'UTILIZADO' },
    });
    expect(prismaMock.escaneo.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          boletoId: 900,
          oficialId: 7,
          turnoId: 12,
          resultado: 'APROBADO',
        }),
      })
    );
  });

  it('segundo intento del mismo QR → UTILIZADO, no vuelve a cambiar estado', async () => {
    // Primer intento: VIGENTE → UTILIZADO.
    prismaMock.boleto.findUnique.mockResolvedValueOnce(boletoVigente());
    prismaMock.boleto.update.mockResolvedValueOnce({
      ...boletoVigente(),
      estado: 'UTILIZADO',
    });
    const ok = await request(app)
      .post('/boletos/validar-qr')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'uuid-vigente', turnoId: 12 });
    expect(ok.body.status).toBe('VALIDO');

    // Segundo intento: el boleto ya está UTILIZADO.
    prismaMock.boleto.findUnique.mockResolvedValueOnce({
      ...boletoVigente(),
      estado: 'UTILIZADO',
    });
    const repetido = await request(app)
      .post('/boletos/validar-qr')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'uuid-vigente', turnoId: 12 });
    expect(repetido.status).toBe(200);
    expect(repetido.body).toMatchObject({
      status: 'UTILIZADO',
      motivo: 'Boleto ya utilizado',
    });

    expect(prismaMock.boleto.update).toHaveBeenCalledTimes(1);
  });

  it('boleto de otro turno → INVALIDO con motivo Boleto no pertenece a este viaje', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue({
      ...boletoVigente(),
      compra: { ...boletoVigente().compra, turnoId: 99 },
    });
    const res = await request(app)
      .post('/boletos/validar-qr')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'uuid-vigente', turnoId: 12 });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      status: 'INVALIDO',
      motivo: 'Boleto no pertenece a este viaje',
    });
    expect(prismaMock.boleto.update).not.toHaveBeenCalled();
  });

  it('body inválido (falta uuidQr) → 400', async () => {
    const res = await request(app)
      .post('/boletos/validar-qr')
      .set(HEADERS_CHOFER)
      .send({ turnoId: 12 });
    expect(res.status).toBe(400);
  });

  it('boleto VIGENTE expirado por fecha → marca EXPIRADO sin pasar a UTILIZADO', async () => {
    prismaMock.boleto.findUnique.mockResolvedValue({
      ...boletoVigente(),
      expiraEn: new Date(Date.now() - 60 * 1000),
    });
    prismaMock.boleto.update.mockResolvedValue({
      ...boletoVigente(),
      estado: 'EXPIRADO',
    });
    const res = await request(app)
      .post('/boletos/validar-qr')
      .set(HEADERS_CHOFER)
      .send({ uuidQr: 'uuid-vigente', turnoId: 12 });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ status: 'EXPIRADO' });
    expect(prismaMock.boleto.update).toHaveBeenCalledWith({
      where: { id: 900 },
      data: { estado: 'EXPIRADO' },
    });
  });
});

describe('GET /turnos/:turnoId/boletos-validacion', () => {
  it('sin rol CHOFER → 403', async () => {
    const res = await request(app).get('/turnos/12/boletos-validacion');
    expect(res.status).toBe(403);
    expect(prismaMock.boleto.findMany).not.toHaveBeenCalled();
  });

  it('devuelve solo boletos del turno con datos mínimos para cache, sin cédula completa ni datos de pago', async () => {
    prismaMock.boleto.findMany.mockResolvedValue([
      {
        id: 900,
        uuidQr: 'uuid-1',
        cedulaPasajero: '0102030405',
        nombrePasajero: 'Ana Pérez',
        tipoTarifa: 'NORMAL',
        estado: 'VIGENTE',
        compra: { id: 70, turnoId: 12, destino: 'Cuenca', asientos: [{ asientoId: 4 }] },
      },
      {
        id: 901,
        uuidQr: 'uuid-2',
        cedulaPasajero: '0908070605',
        nombrePasajero: 'Luis Morales',
        tipoTarifa: 'NORMAL',
        estado: 'UTILIZADO',
        compra: { id: 71, turnoId: 12, destino: 'Cuenca', asientos: [{ asientoId: 5 }] },
      },
    ]);

    const res = await request(app)
      .get('/turnos/12/boletos-validacion')
      .set('x-user-role', 'CHOFER');

    expect(res.status).toBe(200);
    expect(prismaMock.boleto.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { compra: { turnoId: 12 } },
      })
    );

    expect(res.body.turnoId).toBe(12);
    expect(res.body.total).toBe(2);
    expect(res.body.boletos).toHaveLength(2);

    const primero = res.body.boletos[0];
    expect(primero).toEqual({
      uuidQr: 'uuid-1',
      boletoId: 900,
      estado: 'VIGENTE',
      nombrePasajero: 'Ana Pérez',
      asiento: '#4',
      destino: 'Cuenca',
    });

    // No expone cédula completa ni datos de pago / comprobantes.
    expect(primero).not.toHaveProperty('cedulaPasajero');
    expect(primero).not.toHaveProperty('pago');
    expect(primero).not.toHaveProperty('comprobanteUrl');
    expect(JSON.stringify(res.body)).not.toContain('0102030405');
  });

  it('turno sin boletos → devuelve lista vacía clara', async () => {
    prismaMock.boleto.findMany.mockResolvedValue([]);
    const res = await request(app)
      .get('/turnos/999/boletos-validacion')
      .set('x-user-role', 'CHOFER');
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ turnoId: 999, total: 0, boletos: [] });
  });

  it('turnoId inválido → 400', async () => {
    const res = await request(app)
      .get('/turnos/abc/boletos-validacion')
      .set('x-user-role', 'CHOFER');
    expect(res.status).toBe(400);
  });
});
