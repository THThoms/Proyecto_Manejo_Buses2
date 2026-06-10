import { Router } from 'express';
import { crearCompra, obtenerCompra, obtenerResumen } from '../controllers/compra.controller';

const router = Router();

router.post('/', crearCompra);
// US12 (soporte): resumen sanitizado para la pantalla /boleto/[compraId]
router.get('/:compraId/resumen', obtenerResumen);
router.get('/:id', obtenerCompra);

export default router;
