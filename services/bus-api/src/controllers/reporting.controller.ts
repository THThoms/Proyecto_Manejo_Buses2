import { Request, Response } from 'express';
import { PrismaClient } from '../../../../packages/database/prisma/generated/bus-client';

const prisma = new PrismaClient();

function parseIds(raw: unknown): number[] {
  if (typeof raw !== 'string') return [];
  return raw
    .split(',')
    .map((value) => Number(value.trim()))
    .filter((value, index, arr) => Number.isInteger(value) && value > 0 && arr.indexOf(value) === index);
}

export const getCooperativasMap = async (req: Request, res: Response) => {
  const turnoIds = parseIds(req.query.turnoIds);
  const frecuenciaIds = parseIds(req.query.frecuenciaIds);
  const cooperativaIds = parseIds(req.query.cooperativaIds);

  try {
    const [turnos, frecuencias] = await Promise.all([
      turnoIds.length
        ? prisma.turno.findMany({
            where: { id: { in: turnoIds } },
            include: {
              ruta: { select: { id: true, nombre: true, precioPasaje: true } },
              bus: {
                select: {
                  cooperativa: {
                    select: { id: true, nombre: true },
                  },
                },
              },
            },
          })
        : Promise.resolve([]),
      frecuenciaIds.length
        ? prisma.frecuencia.findMany({
            where: { id: { in: frecuenciaIds } },
            include: {
              ruta: { select: { id: true, nombre: true, precioPasaje: true } },
              bus: {
                select: {
                  cooperativa: {
                    select: { id: true, nombre: true },
                  },
                },
              },
            },
          })
        : Promise.resolve([]),
    ]);

    const cooperativaIdsDetectadas = new Set<number>(cooperativaIds);
    for (const turno of turnos) {
      cooperativaIdsDetectadas.add(turno.bus.cooperativa.id);
    }
    for (const frecuencia of frecuencias) {
      cooperativaIdsDetectadas.add(frecuencia.bus.cooperativa.id);
    }

    const cooperativas = cooperativaIdsDetectadas.size
      ? await prisma.cooperativa.findMany({
          where: { id: { in: Array.from(cooperativaIdsDetectadas) } },
          select: { id: true, nombre: true, estado: true },
          orderBy: { nombre: 'asc' },
        })
      : [];

    return res.json({
      cooperativas,
      turnos: turnos.map((turno) => ({
        turnoId: turno.id,
        cooperativaId: turno.bus.cooperativa.id,
        cooperativaNombre: turno.bus.cooperativa.nombre,
        rutaId: turno.ruta.id,
        rutaNombre: turno.ruta.nombre,
        precioPasaje: Number(turno.ruta.precioPasaje),
      })),
      frecuencias: frecuencias.map((frecuencia) => ({
        frecuenciaId: frecuencia.id,
        cooperativaId: frecuencia.bus.cooperativa.id,
        cooperativaNombre: frecuencia.bus.cooperativa.nombre,
        rutaId: frecuencia.ruta.id,
        rutaNombre: frecuencia.ruta.nombre,
        precioPasaje: Number(frecuencia.ruta.precioPasaje),
      })),
    });
  } catch (error) {
    console.error('Error al construir el mapa de cooperativas:', error);
    return res.status(500).json({ error: 'Error al resolver cooperativas para reportes' });
  }
};
