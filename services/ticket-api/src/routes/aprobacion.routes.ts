import { Router } from 'express';
import { aprobar, rechazar, listarHistorial } from '../controllers/aprobacion.controller';
import { requireOficinista } from '../middlewares/requireOficinista';

const router = Router();

// GET /aprobaciones → historial de decisiones (CA #5)
router.get('/', requireOficinista, listarHistorial);

// POST /pagos/transferencia/:id/aprobar y /rechazar viven aquí también para
// mantener cohesión con el panel del oficinista; se montan desde index bajo
// /pagos/transferencia.
export const transferenciaDecisionRouter = Router();
transferenciaDecisionRouter.post('/:id/aprobar', requireOficinista, aprobar);
transferenciaDecisionRouter.post('/:id/rechazar', requireOficinista, rechazar);

export default router;
