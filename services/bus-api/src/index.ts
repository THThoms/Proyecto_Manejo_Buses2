import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const app = express();
const PORT = process.env.BUS_PORT || 4002;

// Middlewares
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (_req, res) => {
  res.json({ service: 'bus-api', status: 'ok', timestamp: new Date().toISOString() });
});

// TODO: Importar rutas de buses, cooperativas, frecuencias aquí
// app.use('/api/buses', busRoutes);
// app.use('/api/cooperativas', cooperativaRoutes);
// app.use('/api/rutas', rutaRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚌 bus-api corriendo en http://localhost:${PORT}`);
});

export default app;
