import { Router } from 'express';
import {
  exportarLiquidacionCooperativaPdf,
  obtenerLiquidacionCooperativa,
} from '../controllers/liquidacion.controller';

import { requireAdmin } from '../middlewares/requireAdmin';

const router = Router();

router.use(requireAdmin);

router.get('/cooperativa', obtenerLiquidacionCooperativa);
router.get('/cooperativa/pdf', exportarLiquidacionCooperativaPdf);

export default router;
