import { Router } from 'express';
import { cobrarEnOficina, cobrarEnBus, cobrarEfectivoPersonalizado } from '../controllers/efectivo.controller';
import { requireOficinista } from '../middlewares/requireOficinista';
import { requireChofer } from '../middlewares/requireChofer';

const router = Router();

// US13: cobro en efectivo en oficina (rol OFICINISTA).
router.post('/oficina', requireOficinista, cobrarEnOficina);

// US14: cobro en efectivo en bus (rol CHOFER).
router.post('/bus', requireChofer, cobrarEnBus);

// US14+: cobro personalizado en efectivo (origen, destino, total personalizado)
router.post('/custom', cobrarEfectivoPersonalizado);

export default router;
