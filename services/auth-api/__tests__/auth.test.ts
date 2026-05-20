// US21: tests del flujo completo de auth.

import express from 'express';
import request from 'supertest';

jest.mock('../src/services/prisma', () => ({
  __esModule: true,
  default: {
    usuario: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
  },
}));

jest.mock('../src/services/emailStub', () => ({
  __esModule: true,
  enviarEmailReset: jest.fn().mockResolvedValue(undefined),
}));

import prisma from '../src/services/prisma';
import * as emailStub from '../src/services/emailStub';
import authRoutes from '../src/routes/auth.routes';

const p = prisma as unknown as Record<string, any>;
const email = emailStub as unknown as Record<string, jest.Mock>;

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});

describe('POST /auth/register', () => {
  it('registra usuario válido y devuelve token + usuario (sin passwordHash)', async () => {
    p.usuario.findUnique.mockResolvedValue(null);
    p.usuario.create.mockImplementation(async ({ data }: any) => ({
      id: 1, nombre: data.nombre, email: data.email, estado: 'ACTIVO',
      passwordHash: data.passwordHash, creadoEn: new Date(),
    }));
    const res = await request(app).post('/auth/register').send({
      nombre: 'Ana Pérez', email: 'ana@example.com', password: 'secreto12',
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('token');
    expect(res.body.usuario).not.toHaveProperty('passwordHash');
    expect(res.body.usuario.email).toBe('ana@example.com');
  });

  it('rechaza password sin número', async () => {
    const res = await request(app).post('/auth/register').send({
      nombre: 'Ana', email: 'ana@x.com', password: 'soloLetras',
    });
    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/n[uú]mero/i);
  });

  it('rechaza password corto', async () => {
    const res = await request(app).post('/auth/register').send({
      nombre: 'Ana', email: 'ana@x.com', password: '1234567',
    });
    expect(res.status).toBe(400);
  });

  it('rechaza email duplicado con 409', async () => {
    p.usuario.findUnique.mockResolvedValue({ id: 1 });
    const res = await request(app).post('/auth/register').send({
      nombre: 'Ana', email: 'ana@x.com', password: 'secreto12',
    });
    expect(res.status).toBe(409);
  });

  it('rechaza email mal formado', async () => {
    const res = await request(app).post('/auth/register').send({
      nombre: 'Ana', email: 'no-es-email', password: 'secreto12',
    });
    expect(res.status).toBe(400);
  });
});

describe('POST /auth/login', () => {
  it('login válido devuelve token', async () => {
    const bcrypt = require('bcryptjs');
    const hash = await bcrypt.hash('secreto12', 10);
    p.usuario.findUnique.mockResolvedValue({
      id: 5, nombre: 'X', email: 'x@x.com', estado: 'ACTIVO', passwordHash: hash, creadoEn: new Date(),
    });
    const res = await request(app).post('/auth/login').send({ email: 'x@x.com', password: 'secreto12' });
    expect(res.status).toBe(200);
    expect(res.body.token).toBeTruthy();
  });

  it('password incorrecto → 401', async () => {
    const bcrypt = require('bcryptjs');
    const hash = await bcrypt.hash('correcta12', 10);
    p.usuario.findUnique.mockResolvedValue({
      id: 5, nombre: 'X', email: 'x@x.com', estado: 'ACTIVO', passwordHash: hash, creadoEn: new Date(),
    });
    const res = await request(app).post('/auth/login').send({ email: 'x@x.com', password: 'incorrecta12' });
    expect(res.status).toBe(401);
  });

  it('usuario no existe → 401', async () => {
    p.usuario.findUnique.mockResolvedValue(null);
    const res = await request(app).post('/auth/login').send({ email: 'ghost@x.com', password: 'secreto12' });
    expect(res.status).toBe(401);
  });
});

describe('GET /auth/me', () => {
  it('sin token → 401', async () => {
    const res = await request(app).get('/auth/me');
    expect(res.status).toBe(401);
  });

  it('con token de session válido → 200 + usuario sin passwordHash', async () => {
    const { signSessionToken } = require('../src/services/authTokens');
    const token = signSessionToken(7, 'z@x.com');
    p.usuario.findUnique.mockResolvedValue({
      id: 7, nombre: 'Z', email: 'z@x.com', estado: 'ACTIVO', passwordHash: 'h', creadoEn: new Date(),
    });
    const res = await request(app).get('/auth/me').set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.usuario).not.toHaveProperty('passwordHash');
    expect(res.body.usuario.email).toBe('z@x.com');
  });

  it('con token inválido → 401', async () => {
    const res = await request(app).get('/auth/me').set('Authorization', 'Bearer notatoken');
    expect(res.status).toBe(401);
  });
});

describe('POST /auth/forgot-password', () => {
  it('respuesta neutra incluso si usuario no existe', async () => {
    p.usuario.findUnique.mockResolvedValue(null);
    const res = await request(app).post('/auth/forgot-password').send({ email: 'ghost@x.com' });
    expect(res.status).toBe(200);
    expect(res.body.message).toMatch(/instrucciones/i);
    expect(email.enviarEmailReset).not.toHaveBeenCalled();
  });

  it('si usuario existe, llama al stub de email', async () => {
    p.usuario.findUnique.mockResolvedValue({ id: 9, nombre: 'Q', email: 'q@x.com', estado: 'ACTIVO' });
    const res = await request(app).post('/auth/forgot-password').send({ email: 'q@x.com' });
    expect(res.status).toBe(200);
    expect(email.enviarEmailReset).toHaveBeenCalled();
  });

  it('si email falla, no rompe el flujo', async () => {
    p.usuario.findUnique.mockResolvedValue({ id: 9, nombre: 'Q', email: 'q@x.com', estado: 'ACTIVO' });
    email.enviarEmailReset.mockRejectedValueOnce(new Error('SMTP down'));
    const res = await request(app).post('/auth/forgot-password').send({ email: 'q@x.com' });
    expect(res.status).toBe(200);
  });
});

describe('POST /auth/reset-password', () => {
  it('token inválido → 401', async () => {
    const res = await request(app).post('/auth/reset-password').send({
      token: 'notatoken-but-long-enough', newPassword: 'secreto12',
    });
    expect(res.status).toBe(401);
  });

  it('token válido + password válida → actualiza hash', async () => {
    const { signResetToken } = require('../src/services/authTokens');
    const t = signResetToken(11, 'r@x.com');
    p.usuario.update.mockResolvedValue({ id: 11 });
    const res = await request(app).post('/auth/reset-password').send({
      token: t, newPassword: 'nuevopass1',
    });
    expect(res.status).toBe(200);
    expect(p.usuario.update).toHaveBeenCalled();
    const data = p.usuario.update.mock.calls[0][0].data;
    expect(data.passwordHash).toBeTruthy();
    expect(data.passwordHash).not.toBe('nuevopass1'); // está hasheada
  });

  it('rechaza newPassword inválido aunque token sea válido', async () => {
    const { signResetToken } = require('../src/services/authTokens');
    const t = signResetToken(11, 'r@x.com');
    const res = await request(app).post('/auth/reset-password').send({
      token: t, newPassword: 'corta',
    });
    expect(res.status).toBe(400);
  });
});
