import { Router } from 'express';
import * as cooperativaController from '../controllers/cooperativa.controller';

const router = Router();

router.get('/', cooperativaController.getAllCooperativas);
router.get('/:id', cooperativaController.getCooperativaById);
router.post('/', cooperativaController.createCooperativa);
router.put('/:id', cooperativaController.updateCooperativa);
router.delete('/:id', cooperativaController.deleteCooperativa);

export default router;
