import { Router, raw } from 'express';
import { stripeWebhook } from '../controllers/webhook.controller';

const router = Router();

// Stripe requiere el body crudo para validar la firma.
router.post('/stripe', raw({ type: 'application/json' }), stripeWebhook);

export default router;
