import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import healthRoutes from './routes/health.routes';
import compraRoutes from './routes/compra.routes';
import pagoRoutes from './routes/pago.routes';
import webhookRoutes from './routes/webhook.routes';
import { iniciarLimpiezaTTL } from './services/expirarCompras';

dotenv.config();

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());

// IMPORTANTE: los webhooks de Stripe se montan ANTES de express.json()
// porque la verificación de firma necesita el body en formato Buffer.
app.use('/webhooks', webhookRoutes);

app.use(express.json());

app.use('/health', healthRoutes);
app.use('/compras', compraRoutes);
app.use('/pagos', pagoRoutes);

app.listen(port, () => {
  console.log(`Ticket API corriendo en el puerto ${port}`);
  iniciarLimpiezaTTL();
});
