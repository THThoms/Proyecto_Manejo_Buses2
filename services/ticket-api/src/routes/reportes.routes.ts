import { Router } from 'express';
import { requireAdmin } from '../middlewares/requireAdmin';
import {
  reporteBoletosJson,
  reporteBoletosPdf,
  reporteBoletosExcel,
} from '../controllers/reportes.controller';

const router = Router();

// US19: todos los endpoints requieren rol ADMIN y header de cooperativas asignadas.
router.use(requireAdmin);

router.get('/boletos', reporteBoletosJson);
router.get('/boletos/pdf', reporteBoletosPdf);
router.get('/boletos/excel', reporteBoletosExcel);

export default router;
