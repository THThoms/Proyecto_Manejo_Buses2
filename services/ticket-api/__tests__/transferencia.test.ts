import os from 'os';
import path from 'path';
import fs from 'fs';
import express from 'express';
import request from 'supertest';

const TEST_UPLOAD_DIR = path.join(os.tmpdir(), 'ticket-api-test-uploads');
fs.mkdirSync(TEST_UPLOAD_DIR, { recursive: true });

jest.mock('../src/services/prisma', () => ({
  __esModule: true,
  default: {
    compra: { findUnique: jest.fn() },
    pagoPasajero: { create: jest.fn(), update: jest.fn() },
    pagoTransferencia: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
    },
    $transaction: jest.fn(),
  },
}));

jest.mock('file-type', () => ({
  __esModule: true,
  default: { fromFile: jest.fn() },
  fromFile: jest.fn(),
}));

import prisma from '../src/services/prisma';
import FileTypeDefault from 'file-type';
import transferenciaRoutes from '../src/routes/transferencia.routes';

const prismaMock = prisma as unknown as Record<string, any>;
const fromFileMock = (FileTypeDefault as unknown as { fromFile: jest.Mock }).fromFile;

const app = express();
app.use('/pagos/transferencia', transferenciaRoutes);

const PDF_BUF = Buffer.concat([Buffer.from('%PDF-1.4\n%dummy\n'), Buffer.alloc(50, 0)]);
const JPEG_BUF = Buffer.concat([
  Buffer.from([0xff, 0xd8, 0xff, 0xe0]),
  Buffer.alloc(80, 0xff),
]);
const PNG_BUF = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  Buffer.alloc(80, 0),
]);

function limpiarUploadDir() {
  if (!fs.existsSync(TEST_UPLOAD_DIR)) return;
  for (const f of fs.readdirSync(TEST_UPLOAD_DIR)) {
    try {
      fs.unlinkSync(path.join(TEST_UPLOAD_DIR, f));
    } catch {
      // best-effort
    }
  }
}

beforeEach(() => {
  jest.clearAllMocks();
  prismaMock.$transaction.mockImplementation(async (cb: any) => cb(prismaMock));
  // Default: archivo válido (magic bytes coinciden con application/pdf)
  fromFileMock.mockResolvedValue({ mime: 'application/pdf', ext: 'pdf' });
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'log').mockImplementation(() => {});
  limpiarUploadDir();
});

afterAll(() => {
  limpiarUploadDir();
});

function setCompraDisponible() {
  prismaMock.compra.findUnique.mockResolvedValue({
    id: 50,
    estado: 'PENDIENTE',
    total: '5.50',
    pago: null,
  });
  prismaMock.pagoPasajero.create.mockResolvedValue({ id: 500 });
  prismaMock.pagoTransferencia.create.mockResolvedValue({
    id: 600,
    estado: 'PENDIENTE',
    comprobanteUrl: '/comprobantes/dummy.pdf',
  });
}

describe('POST /pagos/transferencia', () => {
  it('PDF válido → 201 y crea PagoPasajero + PagoTransferencia', async () => {
    setCompraDisponible();
    fromFileMock.mockResolvedValue({ mime: 'application/pdf', ext: 'pdf' });

    const res = await request(app)
      .post('/pagos/transferencia')
      .field('compraId', '50')
      .field('banco', 'Pichincha')
      .field('referencia', 'TRX-001')
      .attach('file', PDF_BUF, { filename: 'recibo.pdf', contentType: 'application/pdf' });

    expect(res.status).toBe(201);
    expect(res.body.transferenciaId).toBe(600);
    expect(prismaMock.pagoPasajero.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ metodo: 'TRANSFERENCIA', estado: 'PENDIENTE' }),
      })
    );
    expect(prismaMock.pagoTransferencia.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          banco: 'Pichincha',
          referencia: 'TRX-001',
          estado: 'PENDIENTE',
        }),
      })
    );
  });

  it('JPEG válido → 201', async () => {
    setCompraDisponible();
    fromFileMock.mockResolvedValue({ mime: 'image/jpeg', ext: 'jpg' });

    const res = await request(app)
      .post('/pagos/transferencia')
      .field('compraId', '50')
      .field('banco', 'Guayaquil')
      .field('referencia', 'TRX-002')
      .attach('file', JPEG_BUF, { filename: 'recibo.jpg', contentType: 'image/jpeg' });

    expect(res.status).toBe(201);
  });

  it('PNG válido → 201', async () => {
    setCompraDisponible();
    fromFileMock.mockResolvedValue({ mime: 'image/png', ext: 'png' });

    const res = await request(app)
      .post('/pagos/transferencia')
      .field('compraId', '50')
      .field('banco', 'Produbanco')
      .field('referencia', 'TRX-003')
      .attach('file', PNG_BUF, { filename: 'recibo.png', contentType: 'image/png' });

    expect(res.status).toBe(201);
  });

  it('body inválido (falta banco) → 400', async () => {
    const res = await request(app)
      .post('/pagos/transferencia')
      .field('compraId', '50')
      .field('referencia', 'TRX-001')
      .attach('file', PDF_BUF, { filename: 'recibo.pdf', contentType: 'application/pdf' });

    expect(res.status).toBe(400);
  });

  it('archivo faltante → 400', async () => {
    const res = await request(app)
      .post('/pagos/transferencia')
      .field('compraId', '50')
      .field('banco', 'Pichincha')
      .field('referencia', 'TRX-001');

    expect(res.status).toBe(400);
  });

  it('MIME inválido (text/plain) → 415', async () => {
    const res = await request(app)
      .post('/pagos/transferencia')
      .field('compraId', '50')
      .field('banco', 'Pichincha')
      .field('referencia', 'TRX-001')
      .attach('file', Buffer.from('hola mundo'), {
        filename: 'foo.txt',
        contentType: 'text/plain',
      });

    expect(res.status).toBe(415);
  });

  it('magic bytes inválidos → 415 y archivo borrado del disco', async () => {
    setCompraDisponible();
    fromFileMock.mockResolvedValue(undefined); // no se detecta tipo real

    const res = await request(app)
      .post('/pagos/transferencia')
      .field('compraId', '50')
      .field('banco', 'Pichincha')
      .field('referencia', 'TRX-001')
      .attach('file', Buffer.from('contenido falso'), {
        filename: 'fake.pdf',
        contentType: 'application/pdf',
      });

    expect(res.status).toBe(415);

    // El archivo subido debe haber sido eliminado por validarMagicBytes.
    const archivosRestantes = fs.readdirSync(TEST_UPLOAD_DIR);
    expect(archivosRestantes).toEqual([]);
  });

  it('archivo > 5MB → 413', async () => {
    const buf = Buffer.alloc(5 * 1024 * 1024 + 1, 0); // 5MB + 1 byte
    PDF_BUF.copy(buf, 0);

    const res = await request(app)
      .post('/pagos/transferencia')
      .field('compraId', '50')
      .field('banco', 'Pichincha')
      .field('referencia', 'TRX-001')
      .attach('file', buf, { filename: 'big.pdf', contentType: 'application/pdf' });

    expect(res.status).toBe(413);
  });

  it('compra no PENDIENTE → 409', async () => {
    prismaMock.compra.findUnique.mockResolvedValue({
      id: 50,
      estado: 'CONFIRMADA',
      total: '5.50',
      pago: null,
    });

    const res = await request(app)
      .post('/pagos/transferencia')
      .field('compraId', '50')
      .field('banco', 'Pichincha')
      .field('referencia', 'TRX-001')
      .attach('file', PDF_BUF, { filename: 'recibo.pdf', contentType: 'application/pdf' });

    expect(res.status).toBe(409);
  });

  it('compra con pago APROBADO → 409', async () => {
    prismaMock.compra.findUnique.mockResolvedValue({
      id: 50,
      estado: 'PENDIENTE',
      total: '5.50',
      pago: { id: 500, estado: 'APROBADO', pagoTransferencia: null },
    });

    const res = await request(app)
      .post('/pagos/transferencia')
      .field('compraId', '50')
      .field('banco', 'Pichincha')
      .field('referencia', 'TRX-001')
      .attach('file', PDF_BUF, { filename: 'recibo.pdf', contentType: 'application/pdf' });

    expect(res.status).toBe(409);
  });

  it('compra con transferencia PENDIENTE duplicada → 409', async () => {
    prismaMock.compra.findUnique.mockResolvedValue({
      id: 50,
      estado: 'PENDIENTE',
      total: '5.50',
      pago: {
        id: 500,
        estado: 'PENDIENTE',
        pagoTransferencia: { id: 600, estado: 'PENDIENTE' },
      },
    });

    const res = await request(app)
      .post('/pagos/transferencia')
      .field('compraId', '50')
      .field('banco', 'Pichincha')
      .field('referencia', 'TRX-001')
      .attach('file', PDF_BUF, { filename: 'recibo.pdf', contentType: 'application/pdf' });

    expect(res.status).toBe(409);
  });
});

describe('GET /pagos/transferencia/pendientes', () => {
  it('sin rol OFICINISTA → 403', async () => {
    const res = await request(app).get('/pagos/transferencia/pendientes');
    expect(res.status).toBe(403);
    expect(prismaMock.pagoTransferencia.findMany).not.toHaveBeenCalled();
  });

  it('con rol OFICINISTA → 200 y devuelve lista', async () => {
    prismaMock.pagoTransferencia.findMany.mockResolvedValue([
      { id: 600, estado: 'PENDIENTE', banco: 'Pichincha' },
    ]);

    const res = await request(app)
      .get('/pagos/transferencia/pendientes')
      .set('X-User-Role', 'OFICINISTA');

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(prismaMock.pagoTransferencia.findMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: { estado: 'PENDIENTE' } })
    );
  });
});

describe('GET /pagos/transferencia/:id/comprobante', () => {
  it('sin rol OFICINISTA → 403', async () => {
    const res = await request(app).get('/pagos/transferencia/1/comprobante');
    expect(res.status).toBe(403);
  });

  it('comprobante inexistente con rol → 404', async () => {
    prismaMock.pagoTransferencia.findUnique.mockResolvedValue(null);

    const res = await request(app)
      .get('/pagos/transferencia/999/comprobante')
      .set('X-User-Role', 'OFICINISTA');

    expect(res.status).toBe(404);
  });

  it('comprobante existe en DB pero archivo no en disco → 404', async () => {
    prismaMock.pagoTransferencia.findUnique.mockResolvedValue({
      id: 1,
      comprobanteUrl: '/comprobantes/no-existe-en-disco.pdf',
    });

    const res = await request(app)
      .get('/pagos/transferencia/1/comprobante')
      .set('X-User-Role', 'OFICINISTA');

    expect(res.status).toBe(404);
  });

  it('comprobante con rol y archivo presente → 200 y sirve el archivo', async () => {
    const filename = 'a-real-file.pdf';
    fs.writeFileSync(path.join(TEST_UPLOAD_DIR, filename), PDF_BUF);
    prismaMock.pagoTransferencia.findUnique.mockResolvedValue({
      id: 1,
      comprobanteUrl: `/comprobantes/${filename}`,
    });

    const res = await request(app)
      .get('/pagos/transferencia/1/comprobante')
      .set('X-User-Role', 'OFICINISTA');

    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Buffer);
    expect(res.body.length).toBe(PDF_BUF.length);
  });
});
