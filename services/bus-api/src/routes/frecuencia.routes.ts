import { Router } from 'express';
import * as frecuenciaController from '../controllers/frecuencia.controller';

const router = Router();

router.get('/', frecuenciaController.getAllFrecuencias);
// US19: debe declararse ANTES de /:id para que express no lo capture como id.
router.get('/resolver-cooperativas', frecuenciaController.resolverCooperativas);
router.get('/:id', frecuenciaController.getFrecuenciaById);
router.post('/', frecuenciaController.createFrecuencia);
router.put('/:id', frecuenciaController.updateFrecuencia);
router.delete('/:id', frecuenciaController.deleteFrecuencia);

export default router;
