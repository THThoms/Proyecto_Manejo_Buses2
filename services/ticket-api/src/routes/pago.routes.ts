import { Router } from 'express';
import { crearCheckoutSession } from '../controllers/pago.controller';

const router = Router();

router.post('/tarjeta/checkout-session', crearCheckoutSession);

export default router;
