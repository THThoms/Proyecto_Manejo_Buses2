import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const app = express();
const PORT = process.env.AUTH_PORT || 4001;

// Middlewares
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (_req, res) => {
  res.json({ service: 'auth-api', status: 'ok', timestamp: new Date().toISOString() });
});

// TODO: Importar rutas de autenticación aquí
// app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🔐 auth-api corriendo en http://localhost:${PORT}`);
});

export default app;
