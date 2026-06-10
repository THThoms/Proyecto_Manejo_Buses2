import { Router } from 'express';
import {
  aprobar,
  rechazar,
  listarHistorial,
  listarHistorialPagos,
} from '../controllers/aprobacion.controller';
import { requireOficinista } from '../middlewares/requireOficinista';

const router = Router();

// GET /aprobaciones/historial-pagos -> historial unificado de pagos
router.get('/historial-pagos', requireOficinista, listarHistorialPagos);

// GET /aprobaciones -> historial de decisiones de transferencias
router.get('/', requireOficinista, listarHistorial);

// POST /pagos/transferencia/:id/aprobar y /rechazar viven aqui tambien para
// mantener cohesion con el panel del oficinista; se montan desde index bajo
// /pagos/transferencia.
export const transferenciaDecisionRouter = Router();
transferenciaDecisionRouter.post('/:id/aprobar', requireOficinista, aprobar);
transferenciaDecisionRouter.post('/:id/rechazar', requireOficinista, rechazar);

export default router;
