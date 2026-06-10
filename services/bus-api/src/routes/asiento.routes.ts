import { Router } from 'express';
import {
  getAsientosPorTurno,
  reservarAsiento,
  liberarAsiento,
  ocuparAsiento,
} from '../controllers/asiento.controller';

const router = Router();

// GET /turnos/:turnoId/asientos → mapa completo de asientos
router.get('/:turnoId/asientos', getAsientosPorTurno);

// POST /turnos/:turnoId/asientos/:asientoId/reservar → bloquea un asiento
router.post('/:turnoId/asientos/:asientoId/reservar', reservarAsiento);

// POST /turnos/:turnoId/asientos/:asientoId/liberar → libera un asiento RESERVADO
router.post('/:turnoId/asientos/:asientoId/liberar', liberarAsiento);

// POST /turnos/:turnoId/asientos/:asientoId/ocupar → marca un asiento RESERVADO como OCUPADO (US10)
router.post('/:turnoId/asientos/:asientoId/ocupar', ocuparAsiento);

export default router;
