import { Router, NextFunction, Request, Response } from 'express';
import multer from 'multer';
import {
  crearPagoTransferencia,
  listarPendientes,
  descargarComprobante,
} from '../controllers/transferencia.controller';
import { uploadComprobante, MulterMimeRejected } from '../services/upload';
import { requireOficinista } from '../middlewares/requireOficinista';

const router = Router();

/**
 * Captura errores de multer (tipo de archivo o tamaño) y los traduce a
 * códigos HTTP apropiados para que no exploten como 500.
 */
function manejarErroresUpload(err: unknown, _req: Request, res: Response, next: NextFunction) {
  if (err instanceof MulterMimeRejected) {
    return res.status(415).json({ error: err.message });
  }
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({ error: 'Archivo excede el tamaño máximo (5MB)' });
    }
    return res.status(400).json({ error: `Upload error: ${err.message}` });
  }
  next(err);
}

// POST /pagos/transferencia → cliente sube comprobante
router.post(
  '/',
  uploadComprobante.single('file'),
  manejarErroresUpload,
  crearPagoTransferencia
);

// GET /pagos/transferencia/pendientes → oficinista lista comprobantes
router.get('/pendientes', requireOficinista, listarPendientes);

// GET /pagos/transferencia/:id/comprobante → oficinista descarga archivo
router.get('/:id/comprobante', requireOficinista, descargarComprobante);

export default router;
