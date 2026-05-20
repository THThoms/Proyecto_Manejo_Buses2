import { Router } from 'express';
import { requireAdmin } from '../middlewares/requireAdmin';
import { liquidacionJson, liquidacionPdf } from '../controllers/liquidacion.controller';

const router = Router();

// US20: ambos endpoints requieren ADMIN y la cooperativa debe estar asignada.
router.use(requireAdmin);

router.get('/cooperativa', liquidacionJson);
router.get('/cooperativa/pdf', liquidacionPdf);

export default router;
