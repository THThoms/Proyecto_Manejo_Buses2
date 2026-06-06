import { Router } from 'express';
import {
  exportarReporteBoletosExcel,
  exportarReporteBoletosPdf,
  obtenerReporteBoletos,
} from '../controllers/reportes.controller';

import { requireAdmin } from '../middlewares/requireAdmin';

const router = Router();

router.use(requireAdmin);

router.get('/boletos', obtenerReporteBoletos);
router.get('/boletos/pdf', exportarReporteBoletosPdf);
router.get('/boletos/excel', exportarReporteBoletosExcel);

export default router;
