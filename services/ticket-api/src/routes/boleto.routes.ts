import { Router } from 'express';
import { getQrPng, getPdf, getBoletoDescensos } from '../controllers/boleto.controller';

const router = Router();

// US17: obtener pasajeros que bajan en parada
router.get('/descenso', getBoletoDescensos);

// US15 CA #5: QR escaneable (PNG) para mostrar en pantalla.
router.get('/:boletoId/qr.png', getQrPng);

// US15 CA #3 y #4: descarga del boleto en PDF.
router.get('/:boletoId/pdf', getPdf);

export default router;
