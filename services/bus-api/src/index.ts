import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '../../../packages/database/prisma/generated/bus-client';

import busRoutes from './routes/bus.routes';
import rutaRoutes from './routes/ruta.routes';
import turnoRoutes from './routes/turno.routes';
import descuentoRoutes from './routes/descuento.routes';
import asientoRoutes from './routes/asiento.routes';
import cooperativaRoutes from './routes/cooperativa.routes';
import frecuenciaRoutes from './routes/frecuencia.routes';
import configAppRoutes from './routes/configApp.routes';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// Routes
app.use('/buses', busRoutes);
app.use('/rutas', rutaRoutes);
app.use('/turnos', turnoRoutes);
app.use('/turnos', asientoRoutes); // Asientos anidados bajo /turnos/:turnoId/asientos
app.use('/descuentos', descuentoRoutes);
// US19: lectura de cooperativas y frecuencias para resolver compra -> cooperativa
app.use('/cooperativas', cooperativaRoutes);
app.use('/frecuencias', frecuenciaRoutes);
// US22: configuracion visual de la app
app.use('/config', configAppRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'bus-api' });
});

app.listen(port, () => {
  console.log(`Bus API corriendo en el puerto ${port}`);
});
