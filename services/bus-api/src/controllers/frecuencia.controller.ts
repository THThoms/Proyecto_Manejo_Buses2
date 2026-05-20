import { Request, Response } from 'express';
import { busDb as prisma, DiaSemana } from '@proyecto-saas/database';

/** GET /frecuencias - Listar todas las frecuencias ANT */
export const getAllFrecuencias = async (req: Request, res: Response) => {
  try {
    const frecuencias = await prisma.frecuencia.findMany({
      include: {
        ruta: { select: { id: true, nombre: true, origen: true, destino: true } },
        bus: { select: { id: true, placa: true, marca: true } },
      },
      orderBy: { horaSalida: 'asc' },
    });
    res.json(frecuencias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las frecuencias' });
  }
};

/** GET /frecuencias/:id - Detalle de una frecuencia */
export const getFrecuenciaById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const frecuencia = await prisma.frecuencia.findUnique({
      where: { id: Number(id) },
      include: { ruta: true, bus: true },
    });
    if (!frecuencia) {
      return res.status(404).json({ error: 'Frecuencia no encontrada' });
    }
    res.json(frecuencia);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la frecuencia' });
  }
};

/** POST /frecuencias - Crear frecuencia ANT (US03) */
export const createFrecuencia = async (req: Request, res: Response) => {
  const { rutaId, busId, diaSemana, horaSalida, horaLlegada, resolucion } = req.body;

  if (!rutaId || !busId || !diaSemana || !horaSalida || !horaLlegada) {
    return res.status(400).json({
      error: 'rutaId, busId, diaSemana, horaSalida y horaLlegada son obligatorios',
    });
  }

  const diasValidos = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'];
  if (!diasValidos.includes(diaSemana)) {
    return res.status(400).json({ error: `diaSemana debe ser uno de: ${diasValidos.join(', ')}` });
  }

  try {
    const frecuencia = await prisma.frecuencia.create({
      // Cast as any: Prisma client may be stale — resolucion exists in bus-schema.prisma
      data: {
        rutaId: Number(rutaId),
        busId: Number(busId),
        diaSemana: diaSemana as DiaSemana,
        horaSalida,
        horaLlegada,
        resolucion,
      } as any,
      include: { ruta: true, bus: true },
    });
    res.status(201).json(frecuencia);
  } catch (error: any) {
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'La ruta o el bus indicado no existe' });
    }
    res.status(500).json({ error: 'Error al crear la frecuencia' });
  }
};

/** PUT /frecuencias/:id - Actualizar frecuencia */
export const updateFrecuencia = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { rutaId, busId, diaSemana, horaSalida, horaLlegada, resolucion } = req.body;
  try {
    const frecuencia = await prisma.frecuencia.update({
      where: { id: Number(id) },
      // Cast as any: Prisma client may be stale — resolucion exists in bus-schema.prisma
      data: {
        rutaId: rutaId ? Number(rutaId) : undefined,
        busId: busId ? Number(busId) : undefined,
        diaSemana: diaSemana as DiaSemana | undefined,
        horaSalida,
        horaLlegada,
        resolucion,
      } as any,
      include: { ruta: true, bus: true },
    });
    res.json(frecuencia);
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Frecuencia no encontrada' });
    }
    res.status(500).json({ error: 'Error al actualizar la frecuencia' });
  }
};

/** DELETE /frecuencias/:id - Eliminar frecuencia */
export const deleteFrecuencia = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.frecuencia.delete({ where: { id: Number(id) } });
    res.json({ message: 'Frecuencia eliminada correctamente' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Frecuencia no encontrada' });
    }
    res.status(500).json({ error: 'Error al eliminar la frecuencia' });
  }
};

/**
 * US19: GET /frecuencias/resolver-cooperativas?ids=1,2,3
 * Devuelve un mapa { [frecuenciaId]: { cooperativaId, cooperativaNombre } } usado
 * por ticket-api para agrupar el reporte de boletos por cooperativa sin tener
 * que hacer N queries individuales.
 */
export const resolverCooperativas = async (req: Request, res: Response) => {
  const idsParam = (req.query.ids as string | undefined) ?? '';
  const ids = idsParam
    .split(',')
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isInteger(n) && n > 0);

  if (ids.length === 0) {
    return res.json({});
  }
  if (ids.length > 1000) {
    return res.status(400).json({ error: 'demasiados ids (max 1000)' });
  }

  try {
    const frecs = await prisma.frecuencia.findMany({
      where: { id: { in: ids } },
      select: {
        id: true,
        bus: {
          select: {
            cooperativaId: true,
            cooperativa: { select: { id: true, nombre: true } },
          },
        },
      },
    });

    const mapa: Record<string, { cooperativaId: number; cooperativaNombre: string }> = {};
    for (const f of frecs) {
      if (f.bus?.cooperativa) {
        mapa[String(f.id)] = {
          cooperativaId: f.bus.cooperativa.id,
          cooperativaNombre: f.bus.cooperativa.nombre,
        };
      }
    }
    return res.json(mapa);
  } catch (error) {
    console.error('Error en resolverCooperativas:', error);
    return res.status(500).json({ error: 'Error interno' });
  }
};
