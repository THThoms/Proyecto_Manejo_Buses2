import { Router } from 'express';
import { verificarBoleto } from '../controllers/verificacion.controller';
import { requireChofer } from '../middlewares/requireChofer';

const router = Router();

// US16: Validar acceso al bus mediante escaneo de QR (rol CHOFER).
router.post('/', requireChofer, verificarBoleto);

export default router;
