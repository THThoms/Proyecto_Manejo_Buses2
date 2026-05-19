import express from 'express';
import request from 'supertest';

jest.mock('../src/services/prisma', () => ({
  __esModule: true,
  default: {
    compra: { findMany: jest.fn() },
    boleto: { findMany: jest.fn() },
  },
}));

import prisma from '../src/services/prisma';
import boletoRoutes from '../src/routes/boleto.routes';

const prismaMock = prisma as unknown as Record<string, any>;

const app = express();
app.use(express.json());
app.use('/boletos', boletoRoutes);

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('GET /boletos/descenso', () => {
  it('Falta turnoId o destino → 400', async () => {
    const res = await request(app).get('/boletos/descenso');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('turnoId y destino son requeridos');
  });

  it('Retorna lista vacía si no hay compras para el turno y destino', async () => {
    prismaMock.compra.findMany.mockResolvedValue([]);

    const res = await request(app)
      .get('/boletos/descenso?turnoId=1&destino=Quito');

    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
    expect(prismaMock.compra.findMany).toHaveBeenCalledWith({
      where: {
        turnoId: 1,
        estado: 'CONFIRMADA',
        destino: { equals: 'Quito', mode: 'insensitive' },
      },
      include: {
        boletos: {
          where: {
            estado: { in: ['VIGENTE', 'PENDIENTE'] },
          },
        },
        asientos: true,
      },
    });
  });

  it('Retorna pasajeros y sus asientos para compras confirmadas', async () => {
    prismaMock.compra.findMany.mockResolvedValue([
      {
        id: 10,
        turnoId: 1,
        estado: 'CONFIRMADA',
        destino: 'Quito',
        boletos: [
          { id: 100, nombrePasajero: 'Juan Pérez', cedulaPasajero: '1234567890', estado: 'VIGENTE', compraId: 10 },
          { id: 101, nombrePasajero: 'Maria Lopez', cedulaPasajero: '0987654321', estado: 'VIGENTE', compraId: 10 },
        ],
        asientos: [
          { id: 200, compraId: 10, asientoId: 5, asientoTurnoId: 50 },
          { id: 201, compraId: 10, asientoId: 6, asientoTurnoId: 51 },
        ],
      },
    ]);

    prismaMock.boleto.findMany.mockResolvedValue([
      { id: 100 },
      { id: 101 },
    ]);

    const res = await request(app)
      .get('/boletos/descenso?turnoId=1&destino=Quito');

    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      { nombre: 'Juan Pérez', cedula: '1234567890', asientoNumero: 5 },
      { nombre: 'Maria Lopez', cedula: '0987654321', asientoNumero: 6 },
    ]);
  });
});
