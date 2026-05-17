import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import multer, { FileFilterCallback } from 'multer';
import type { Request } from 'express';

const UPLOAD_DIR = process.env.UPLOAD_DIR || './uploads/comprobantes';
const MAX_UPLOAD_BYTES = Number(process.env.MAX_UPLOAD_BYTES || 5 * 1024 * 1024);

const ABS_UPLOAD_DIR = path.resolve(UPLOAD_DIR);

// Garantiza que la carpeta exista en arranque.
fs.mkdirSync(ABS_UPLOAD_DIR, { recursive: true });

const MIME_PERMITIDOS = new Set(['image/jpeg', 'image/png', 'application/pdf']);
const EXT_POR_MIME: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'application/pdf': '.pdf',
};

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, ABS_UPLOAD_DIR);
  },
  filename: (_req, file, cb) => {
    const ext = EXT_POR_MIME[file.mimetype] ?? '';
    // Ignoramos el nombre original (anti path traversal).
    cb(null, `${randomUUID()}${ext}`);
  },
});

function fileFilter(_req: Request, file: Express.Multer.File, cb: FileFilterCallback) {
  if (!MIME_PERMITIDOS.has(file.mimetype)) {
    cb(new MulterMimeRejected(file.mimetype));
    return;
  }
  cb(null, true);
}

export class MulterMimeRejected extends Error {
  constructor(public mimetype: string) {
    super(`MIME no permitido: ${mimetype}`);
    this.name = 'MulterMimeRejected';
  }
}

export const uploadComprobante = multer({
  storage,
  fileFilter,
  limits: { fileSize: MAX_UPLOAD_BYTES, files: 1 },
});

export { ABS_UPLOAD_DIR as UPLOAD_DIR_ABS, MAX_UPLOAD_BYTES };
