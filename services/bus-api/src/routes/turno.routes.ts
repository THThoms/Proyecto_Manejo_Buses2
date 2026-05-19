import { Router } from 'express';
import { generarTurnosDia, listarTurnos, getTurnoById } from '../controllers/turno.controller';

const router = Router();

router.post('/generar', generarTurnosDia);
router.get('/', listarTurnos);
// US15: detalle de turno (ruta + horaInicio) para llenar el PDF del boleto.
router.get('/:id', getTurnoById);

export default router;
