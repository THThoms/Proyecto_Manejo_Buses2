import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const app = express();
const PORT = process.env.TICKET_PORT || 4003;

// Middlewares
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (_req, res) => {
  res.json({ service: 'ticket-api', status: 'ok', timestamp: new Date().toISOString() });
});

// TODO: Importar rutas de compras, boletos, pagos aquí
// app.use('/api/compras', compraRoutes);
// app.use('/api/boletos', boletoRoutes);
// app.use('/api/pagos', pagoRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🎫 ticket-api corriendo en http://localhost:${PORT}`);
});

export default app;
