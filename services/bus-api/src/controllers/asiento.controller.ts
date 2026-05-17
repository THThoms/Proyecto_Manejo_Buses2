import { Request, Response } from 'express';
import { PrismaClient } from '../../../../packages/database/prisma/generated/bus-client';

const prisma = new PrismaClient();

/**
 * US08: Obtener todos los asientos de un turno con su estado actual.
 * GET /turnos/:turnoId/asientos
 * Responde con el mapa completo de asientos (DISPONIBLE, RESERVADO, OCUPADO).
 */
export const getAsientosPorTurno = async (req: Request, res: Response) => {
  const { turnoId } = req.params;

  try {
    const turno = await prisma.turno.findUnique({
      where: { id: Number(turnoId) },
      include: {
        bus: { select: { capacidad: true, placa: true, marca: true } },
      },
    });

    if (!turno) {
      return res.status(404).json({ error: 'Turno no encontrado' });
    }

    const asientosTurno = await prisma.asientoTurno.findMany({
      where: { turnoId: Number(turnoId) },
      include: {
        asiento: {
          select: { id: true, numero: true, fila: true, tipo: true },
        },
      },
      orderBy: { asiento: { numero: 'asc' } },
    });

    const mapa = asientosTurno.map((at) => ({
      asientoTurnoId: at.id,
      asientoId: at.asiento.id,
      numero: at.asiento.numero,
      fila: at.asiento.fila,
      tipo: at.asiento.tipo,
      estado: at.estado,
    }));

    res.json({
      turnoId: turno.id,
      bus: turno.bus,
      totalAsientos: mapa.length,
      disponibles: mapa.filter((a) => a.estado === 'DISPONIBLE').length,
      asientos: mapa,
    });
  } catch (error) {
    console.error('Error al obtener asientos del turno:', error);
    res.status(500).json({ error: 'Error interno al obtener el mapa de asientos' });
  }
};

/**
 * US08 / US10: Reservar (bloquear) un asiento específico en un turno.
 * POST /turnos/:turnoId/asientos/:asientoId/reservar
 * Regla: Solo se puede reservar si el estado actual es DISPONIBLE.
 * La transición se hace con updateMany + WHERE estado para evitar race conditions.
 */
export const reservarAsiento = async (req: Request, res: Response) => {
  const { turnoId, asientoId } = req.params;

  try {
    const asientoTurno = await prisma.asientoTurno.findFirst({
      where: { turnoId: Number(turnoId), asientoId: Number(asientoId) },
      include: { asiento: { select: { numero: true } } },
    });

    if (!asientoTurno) {
      return res.status(404).json({ error: 'Asiento no encontrado en este turno' });
    }

    const result = await prisma.asientoTurno.updateMany({
      where: { id: asientoTurno.id, estado: 'DISPONIBLE' },
      data: { estado: 'RESERVADO' },
    });

    if (result.count === 0) {
      const actual = await prisma.asientoTurno.findUnique({ where: { id: asientoTurno.id } });
      return res.status(409).json({
        error: 'El asiento no está disponible',
        estadoActual: actual?.estado,
        asiento: asientoTurno.asiento.numero,
      });
    }

    res.json({
      message: `Asiento ${asientoTurno.asiento.numero} reservado exitosamente`,
      asientoTurnoId: asientoTurno.id,
      estado: 'RESERVADO',
    });
  } catch (error) {
    console.error('Error al reservar asiento:', error);
    res.status(500).json({ error: 'Error interno al reservar el asiento' });
  }
};

/**
 * US08 / US10: Liberar un asiento reservado (cancelación o pago fallido).
 * POST /turnos/:turnoId/asientos/:asientoId/liberar
 * Solo libera si estaba RESERVADO. No revierte un OCUPADO.
 */
export const liberarAsiento = async (req: Request, res: Response) => {
  const { turnoId, asientoId } = req.params;

  try {
    const asientoTurno = await prisma.asientoTurno.findFirst({
      where: { turnoId: Number(turnoId), asientoId: Number(asientoId) },
      include: { asiento: { select: { numero: true } } },
    });

    if (!asientoTurno) {
      return res.status(404).json({ error: 'Asiento no encontrado en este turno' });
    }

    const result = await prisma.asientoTurno.updateMany({
      where: { id: asientoTurno.id, estado: 'RESERVADO' },
      data: { estado: 'DISPONIBLE', boletoId: null },
    });

    if (result.count === 0) {
      const actual = await prisma.asientoTurno.findUnique({ where: { id: asientoTurno.id } });
      return res.status(409).json({
        error: 'Solo se pueden liberar asientos en estado RESERVADO',
        estadoActual: actual?.estado,
      });
    }

    res.json({
      message: `Asiento ${asientoTurno.asiento.numero} liberado exitosamente`,
      asientoTurnoId: asientoTurno.id,
      estado: 'DISPONIBLE',
    });
  } catch (error) {
    console.error('Error al liberar asiento:', error);
    res.status(500).json({ error: 'Error interno al liberar el asiento' });
  }
};

/**
 * US10: Marcar un asiento como OCUPADO tras confirmación de pago.
 * POST /turnos/:turnoId/asientos/:asientoId/ocupar
 * Body: { boletoId: number }
 * Solo transiciona desde RESERVADO. Persiste el boletoId.
 */
export const ocuparAsiento = async (req: Request, res: Response) => {
  const { turnoId, asientoId } = req.params;
  const { boletoId } = req.body ?? {};

  if (typeof boletoId !== 'number') {
    return res.status(400).json({ error: 'boletoId es obligatorio y debe ser numérico' });
  }

  try {
    const asientoTurno = await prisma.asientoTurno.findFirst({
      where: { turnoId: Number(turnoId), asientoId: Number(asientoId) },
      include: { asiento: { select: { numero: true } } },
    });

    if (!asientoTurno) {
      return res.status(404).json({ error: 'Asiento no encontrado en este turno' });
    }

    const result = await prisma.asientoTurno.updateMany({
      where: { id: asientoTurno.id, estado: 'RESERVADO' },
      data: { estado: 'OCUPADO', boletoId },
    });

    if (result.count === 0) {
      const actual = await prisma.asientoTurno.findUnique({ where: { id: asientoTurno.id } });
      return res.status(409).json({
        error: 'Solo se pueden ocupar asientos en estado RESERVADO',
        estadoActual: actual?.estado,
      });
    }

    res.json({
      message: `Asiento ${asientoTurno.asiento.numero} ocupado exitosamente`,
      asientoTurnoId: asientoTurno.id,
      estado: 'OCUPADO',
      boletoId,
    });
  } catch (error) {
    console.error('Error al ocupar asiento:', error);
    res.status(500).json({ error: 'Error interno al ocupar el asiento' });
  }
};
