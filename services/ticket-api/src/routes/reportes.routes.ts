import { Router } from 'express';
import {
  exportarReporteBoletosExcel,
  exportarReporteBoletosPdf,
  obtenerReporteBoletos,
} from '../controllers/reportes.controller';

const router = Router();

router.get('/boletos', obtenerReporteBoletos);
router.get('/boletos/pdf', exportarReporteBoletosPdf);
router.get('/boletos/excel', exportarReporteBoletosExcel);

export default router;
