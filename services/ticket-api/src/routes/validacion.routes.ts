import { Router } from 'express';
import { validarQr, listarBoletosDelTurno } from '../controllers/validacion.controller';
import { requireChofer } from '../middlewares/requireChofer';

const boletosRouter = Router();
const turnosRouter = Router();

// US16: validación de QR en bus (rol CHOFER).
boletosRouter.post('/validar-qr', requireChofer, validarQr);

// US16: listado mínimo de boletos del turno para cache offline (rol CHOFER).
turnosRouter.get('/:turnoId/boletos-validacion', requireChofer, listarBoletosDelTurno);

export { boletosRouter, turnosRouter };
