import { Router } from 'express';
import { crearCompra, obtenerCompra } from '../controllers/compra.controller';

const router = Router();

router.post('/', crearCompra);
router.get('/:id', obtenerCompra);

export default router;
