import { Router } from 'express';
import { cobrarEnOficina } from '../controllers/efectivo.controller';
import { requireOficinista } from '../middlewares/requireOficinista';

const router = Router();

// US13: cobro en efectivo en oficina (rol OFICINISTA).
router.post('/oficina', requireOficinista, cobrarEnOficina);

export default router;
