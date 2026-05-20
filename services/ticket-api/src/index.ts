import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import healthRoutes from './routes/health.routes';
import compraRoutes from './routes/compra.routes';
import pagoRoutes from './routes/pago.routes';
import transferenciaRoutes from './routes/transferencia.routes';
import efectivoRoutes from './routes/efectivo.routes';
import aprobacionRoutes from './routes/aprobacion.routes';
import boletoRoutes from './routes/boleto.routes';
import webhookRoutes from './routes/webhook.routes';
import verificacionRoutes from './routes/verificacion.routes';
import reportesRoutes from './routes/reportes.routes';
import { iniciarLimpiezaTTL } from './services/expirarCompras';

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
app.use('/pagos/transferencia', transferenciaRoutes);
app.use('/pagos/efectivo', efectivoRoutes);
app.use('/aprobaciones', aprobacionRoutes);
app.use('/boletos', boletoRoutes);
app.use('/verificar-boleto', verificacionRoutes);
// US19
app.use('/reportes', reportesRoutes);

app.listen(port, () => {
  console.log(`Ticket API corriendo en el puerto ${port}`);
  iniciarLimpiezaTTL();
});
