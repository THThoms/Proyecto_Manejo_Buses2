import { Router } from 'express';
import { getQrPng, getPdf, getBoletoDescensos, getHistorialUsuario } from '../controllers/boleto.controller';

const router = Router();

// US17: obtener pasajeros que bajan en parada
router.get('/descenso', getBoletoDescensos);

// US21: historial de compras del usuario (placeholder hasta JWT real).
router.get('/usuario/:usuarioId', getHistorialUsuario);

// US15 CA #5: QR escaneable (PNG) para mostrar en pantalla.
router.get('/:boletoId/qr.png', getQrPng);

// US15 CA #3 y #4: descarga del boleto en PDF.
router.get('/:boletoId/pdf', getPdf);

export default router;
