import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import busRoutes from './routes/bus.routes';
import rutaRoutes from './routes/ruta.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.use('/buses', busRoutes);
app.use('/rutas', rutaRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'bus-api' });
});

app.listen(port, () => {
  console.log(`Bus API running on port ${port}`);
});
