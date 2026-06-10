import { Router } from 'express';
import * as ticketController from '../controllers/ticket.controller';

const router = Router();

router.post('/compra-efectivo', ticketController.compraEfectivo);
router.get('/historial/:usuarioId', ticketController.getHistorial);

export default router;
