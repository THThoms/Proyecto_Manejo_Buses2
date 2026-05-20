import { Router } from 'express';
import {
  exportarLiquidacionCooperativaPdf,
  obtenerLiquidacionCooperativa,
} from '../controllers/liquidacion.controller';

const router = Router();

router.get('/cooperativa', obtenerLiquidacionCooperativa);
router.get('/cooperativa/pdf', exportarLiquidacionCooperativaPdf);

export default router;
