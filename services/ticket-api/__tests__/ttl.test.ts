jest.mock('../src/services/prisma', () => ({
  __esModule: true,
  default: {
    compra: { findMany: jest.fn(), update: jest.fn() },
    pagoPasajero: { update: jest.fn() },
    boleto: { updateMany: jest.fn() },
    compraAsiento: { update: jest.fn() },
    $transaction: jest.fn(),
  },
}));

jest.mock('../src/services/busApiClient', () => ({
  __esModule: true,
  liberarAsiento: jest.fn(),
  reservarAsiento: jest.fn(),
  ocuparAsiento: jest.fn(),
  BusApiError: class extends Error {},
}));

import { compraExpiro } from '../src/services/expirarCompras';

const MIN15 = 15 * 60 * 1000;
const H24 = 24 * 60 * 60 * 1000;

function compraBase(overrides: Record<string, unknown> = {}) {
  return {
    id: 1,
    estado: 'PENDIENTE',
    creadoEn: new Date('2026-05-17T12:00:00.000Z'),
    asientos: [],
    pago: null,
    ...overrides,
  };
}

describe('compraExpiro', () => {
  it('14a. sin pago expira a los 15min desde compra.creadoEn', () => {
    const creado = new Date('2026-05-17T11:44:00.000Z');
    const compra = compraBase({ creadoEn: creado, pago: null });
    const ahora = new Date(creado.getTime() + MIN15 + 1);
    expect(compraExpiro(compra as any, ahora)).toBe(true);
  });

  it('14a2. sin pago NO expira si no han pasado 15min', () => {
    const creado = new Date('2026-05-17T11:44:00.000Z');
    const compra = compraBase({ creadoEn: creado, pago: null });
    const ahora = new Date(creado.getTime() + MIN15 - 1000);
    expect(compraExpiro(compra as any, ahora)).toBe(false);
  });

  it('14b. TARJETA PENDIENTE expira a los 15min desde compra.creadoEn', () => {
    const creado = new Date('2026-05-17T11:44:00.000Z');
    const compra = compraBase({
      creadoEn: creado,
      pago: { id: 10, metodo: 'TARJETA', estado: 'PENDIENTE', pagoTransferencia: null },
    });
    const ahora = new Date(creado.getTime() + MIN15 + 1);
    expect(compraExpiro(compra as any, ahora)).toBe(true);
  });

  it('14c. TRANSFERENCIA PENDIENTE con pagoTransferencia expira a las 24h desde pagoTransferencia.creadoEn', () => {
    const transfCreado = new Date('2026-05-16T11:00:00.000Z');
    const compra = compraBase({
      pago: {
        id: 11,
        metodo: 'TRANSFERENCIA',
        estado: 'PENDIENTE',
        pagoTransferencia: { id: 20, creadoEn: transfCreado },
      },
    });
    const ahora = new Date(transfCreado.getTime() + H24 + 1);
    expect(compraExpiro(compra as any, ahora)).toBe(true);
  });

  it('14c2. TRANSFERENCIA PENDIENTE con pagoTransferencia NO expira si no han pasado 24h', () => {
    const transfCreado = new Date('2026-05-16T11:00:00.000Z');
    const compra = compraBase({
      pago: {
        id: 11,
        metodo: 'TRANSFERENCIA',
        estado: 'PENDIENTE',
        pagoTransferencia: { id: 20, creadoEn: transfCreado },
      },
    });
    const ahora = new Date(transfCreado.getTime() + H24 - 1000);
    expect(compraExpiro(compra as any, ahora)).toBe(false);
  });

  it('14d. TRANSFERENCIA PENDIENTE sin pagoTransferencia expira a los 15min', () => {
    const creado = new Date('2026-05-17T11:44:00.000Z');
    const compra = compraBase({
      creadoEn: creado,
      pago: { id: 12, metodo: 'TRANSFERENCIA', estado: 'PENDIENTE', pagoTransferencia: null },
    });
    const ahora = new Date(creado.getTime() + MIN15 + 1);
    expect(compraExpiro(compra as any, ahora)).toBe(true);
  });

  it('14e. APROBADO no expira', () => {
    const compra = compraBase({
      creadoEn: new Date('2026-05-16T00:00:00.000Z'),
      pago: { id: 13, metodo: 'TARJETA', estado: 'APROBADO', pagoTransferencia: null },
    });
    const ahora = new Date('2026-05-17T12:00:00.000Z');
    expect(compraExpiro(compra as any, ahora)).toBe(false);
  });

  it('14f. RECHAZADO no expira', () => {
    const compra = compraBase({
      creadoEn: new Date('2026-05-16T00:00:00.000Z'),
      pago: {
        id: 14,
        metodo: 'TRANSFERENCIA',
        estado: 'RECHAZADO',
        pagoTransferencia: { id: 21, creadoEn: new Date('2026-05-16T00:00:00.000Z') },
      },
    });
    const ahora = new Date('2026-05-17T12:00:00.000Z');
    expect(compraExpiro(compra as any, ahora)).toBe(false);
  });
});
