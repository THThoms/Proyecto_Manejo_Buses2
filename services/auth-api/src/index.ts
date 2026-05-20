import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok', service: 'auth-api' }));
app.use('/auth', authRoutes);

if (require.main === module || process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Auth API corriendo en el puerto ${port}`);
  });
}

export default app;
