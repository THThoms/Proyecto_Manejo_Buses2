import { Router } from 'express';
import { verificarBoleto, getBoletosPorTurno } from '../controllers/verificacion.controller';
import { requireChofer } from '../middlewares/requireChofer';

const router = Router();

// US16: Validar acceso al bus mediante escaneo de QR (rol CHOFER).
router.post('/', requireChofer, verificarBoleto);

// US16: Obtener todos los boletos asociados a un turno para validación offline.
router.get('/turno/:turnoId/boletos', requireChofer, getBoletosPorTurno);

export default router;
