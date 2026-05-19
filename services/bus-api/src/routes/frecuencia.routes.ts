import { Router } from 'express';
import * as frecuenciaController from '../controllers/frecuencia.controller';

const router = Router();

router.get('/', frecuenciaController.getAllFrecuencias);
router.get('/:id', frecuenciaController.getFrecuenciaById);
router.post('/', frecuenciaController.createFrecuencia);
router.put('/:id', frecuenciaController.updateFrecuencia);
router.delete('/:id', frecuenciaController.deleteFrecuencia);

export default router;
