// US22: tests del controller de configuración visual.

import express from 'express';
import request from 'supertest';

const mockConfigApp = { upsert: jest.fn() };

jest.mock('../../../packages/database/prisma/generated/bus-client', () => ({
  __esModule: true,
  PrismaClient: jest.fn().mockImplementation(() => ({
    configuracionApp: mockConfigApp,
  })),
}));

import configAppRoutes from '../src/routes/configApp.routes';

const app = express();
app.use(express.json());
app.use('/config', configAppRoutes);

const ADMIN_HEADERS = { 'x-user-role': 'ADMIN' };

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('GET /config/app (US22)', () => {
  it('devuelve config existente (público, sin admin)', async () => {
    mockConfigApp.upsert.mockResolvedValue({
      id: 1, colorPrimario: '#2563eb', colorSecundario: '#1f2937',
      logoUrl: null, facebookUrl: null, instagramUrl: null, whatsapp: null,
      radioAlertaGpsKm: 0.5, actualizadoEn: new Date(),
    });
    const res = await request(app).get('/config/app');
    expect(res.status).toBe(200);
    expect(res.body.colorPrimario).toBe('#2563eb');
  });
});

describe('PUT /config/app (US22)', () => {
  it('sin ADMIN → 403', async () => {
    const res = await request(app).put('/config/app').send({ colorPrimario: '#ff0000' });
    expect(res.status).toBe(403);
  });

  it('rechaza color hex inválido', async () => {
    const res = await request(app).put('/config/app').set(ADMIN_HEADERS).send({ colorPrimario: 'rojo' });
    expect(res.status).toBe(400);
  });

  it('rechaza radio < 0.1', async () => {
    const res = await request(app).put('/config/app').set(ADMIN_HEADERS).send({ radioAlertaGpsKm: 0.05 });
    expect(res.status).toBe(400);
  });

  it('rechaza URL inválida', async () => {
    const res = await request(app).put('/config/app').set(ADMIN_HEADERS).send({ facebookUrl: 'no-url' });
    expect(res.status).toBe(400);
  });

  it('actualiza correctamente y persiste', async () => {
    mockConfigApp.upsert.mockResolvedValue({
      id: 1, colorPrimario: '#ff5722', colorSecundario: '#1f2937',
      logoUrl: 'https://example.com/logo.png', facebookUrl: null, instagramUrl: null,
      whatsapp: '+593999', radioAlertaGpsKm: 0.8, actualizadoEn: new Date(),
    });
    const res = await request(app).put('/config/app').set(ADMIN_HEADERS).send({
      colorPrimario: '#ff5722',
      logoUrl: 'https://example.com/logo.png',
      whatsapp: '+593999',
      radioAlertaGpsKm: 0.8,
    });
    expect(res.status).toBe(200);
    expect(res.body.colorPrimario).toBe('#ff5722');
    expect(res.body.radioAlertaGpsKm).toBe(0.8);
    expect(mockConfigApp.upsert).toHaveBeenCalled();
  });
});
