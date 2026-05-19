import { Request, Response } from 'express';
import { PrismaClient, DiaSemana } from '../../../../packages/database/prisma/generated/bus-client';

const prisma = new PrismaClient();

const diasMapeo: Record<number, DiaSemana> = {
  0: 'DOM',
  1: 'LUN',
  2: 'MAR',
  3: 'MIE',
  4: 'JUE',
  5: 'VIE',
  6: 'SAB',
};

export const generarTurnosDia = async (req: Request, res: Response) => {
  const { fecha } = req.body; // Formato YYYY-MM-DD

  if (!fecha) {
    return res.status(400).json({ error: 'La fecha es obligatoria' });
  }

  try {
    const fechaObj = new Date(fecha);
    const diaSemana = diasMapeo[fechaObj.getUTCDay()];
    const diaDelAnio = Math.floor((fechaObj.getTime() - new Date(fechaObj.getUTCFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);

    // 1. Obtener todas las cooperativas para procesar por separado
    const cooperativas = await prisma.cooperativa.findMany({
      where: { estado: 'ACTIVO' }
    });

    const turnosCreadosGlobal = [];

    for (const coop of cooperativas) {
      // 2. Buscar frecuencias de esta cooperativa para el día
      const frecuencias = await prisma.frecuencia.findMany({
        where: { 
          diaSemana,
          bus: { cooperativaId: coop.id } // Solo frecuencias de esta coop
        },
        orderBy: { horaSalida: 'asc' },
        include: { ruta: true }
      });

      if (frecuencias.length === 0) continue;

      // 3. Obtener buses activos de la cooperativa para rotación
      const busesDisponibles = await prisma.bus.findMany({
        where: { 
          cooperativaId: coop.id,
          estado: 'ACTIVO'
        },
        orderBy: { id: 'asc' }
      });

      if (busesDisponibles.length === 0) continue;

      // 4. Lógica de Rotación (Round-Robin basado en el día del año)
      // Esto asegura que si hay más buses que frecuencias, los buses roten cada día.
      const totalBuses = busesDisponibles.length;
      const startIndex = diaDelAnio % totalBuses;

      for (let i = 0; i < frecuencias.length; i++) {
        const freq = frecuencias[i];
        
        // Seleccionamos el bus usando el índice rotado
        // Si hay menos buses que frecuencias (error de config), se repiten.
        // Si hay más buses que frecuencias, los que sobran tienen "Día de Parada".
        const busAsignado = busesDisponibles[(startIndex + i) % totalBuses];

        // Verificar duplicados: Si ya hay UN turno para esta frecuencia y fecha, no creamos otro.
        // Quitamos busId de aquí para que no cree duplicados con buses distintos.
        const existe = await prisma.turno.findFirst({
          where: {
            fecha: fechaObj,
            horaInicio: freq.horaSalida,
            rutaId: freq.rutaId,
          },
        });

        if (!existe) {
          const chofer = await prisma.chofer.findFirst({ where: { estado: 'ACTIVO' } });
          if (!chofer) continue;

          const nuevoTurno = await prisma.turno.create({
            data: {
              fecha: fechaObj,
              horaInicio: freq.horaSalida,
              horaFin: freq.horaLlegada,
              busId: busAsignado.id,
              rutaId: freq.rutaId,
              choferId: chofer.id,
              estado: 'PENDIENTE',
            },
          });

          // 5. Inicializar Asientos para este Turno (US08)
          const asientosBus = await prisma.asiento.findMany({
            where: { busId: busAsignado.id },
          });

          await prisma.asientoTurno.createMany({
            data: asientosBus.map((asiento) => ({
              turnoId: nuevoTurno.id,
              asientoId: asiento.id,
              estado: 'DISPONIBLE' as const,
            })),
          });

          turnosCreadosGlobal.push(nuevoTurno);
        }
      }
    }

    res.status(201).json({
      message: `Proceso de rotación completado para el día ${diaSemana}`,
      generados: turnosCreadosGlobal.length,
      cooperativasProcesadas: cooperativas.length
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno al generar turnos' });
  }
};

export const listarTurnos = async (req: Request, res: Response) => {
  try {
    const turnos = await prisma.turno.findMany({
      include: {
        ruta: true,
        bus: true,
        chofer: true,
      },
      orderBy: { fecha: 'asc' },
    });
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar turnos' });
  }
};

/**
 * US15: detalle de un turno por id. Usado por ticket-api al generar el PDF
 * del boleto para llenar ruta + hora de salida + bus.
 */
export const getTurnoById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: 'id inválido' });
  }
  try {
    const turno = await prisma.turno.findUnique({
      where: { id },
      include: {
        ruta: { select: { id: true, nombre: true, origen: true, destino: true } },
        bus: { select: { id: true, placa: true, marca: true } },
      },
    });
    if (!turno) {
      return res.status(404).json({ error: 'Turno no encontrado' });
    }
    return res.json({
      id: turno.id,
      fecha: turno.fecha,
      horaInicio: turno.horaInicio,
      horaFin: turno.horaFin,
      estado: turno.estado,
      ruta: turno.ruta,
      bus: turno.bus,
      latActual: turno.latActual,
      lngActual: turno.lngActual,
    });
  } catch (error) {
    console.error('Error al obtener turno:', error);
    return res.status(500).json({ error: 'Error interno al obtener turno' });
  }
};

/**
 * US17: Recibe la ubicación actual (lat, lng) del bus de un turno, actualiza la base de datos
 * y calcula la proximidad a la parada intermedia o de destino para alertas.
 */
export const updateTurnoGps = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { lat, lng } = req.body;

  const turnoId = Number(id);
  const latNum = parseFloat(String(lat));
  const lngNum = parseFloat(String(lng));

  if (isNaN(turnoId) || isNaN(latNum) || isNaN(lngNum)) {
    return res.status(400).json({ error: 'turnoId, lat y lng válidos son obligatorios' });
  }

  try {
    // 1. Actualizar coordenadas del turno
    const turno = await prisma.turno.update({
      where: { id: turnoId },
      data: {
        latActual: latNum,
        lngActual: lngNum,
      },
    });

    // 2. Obtener paradas de la ruta del turno ordenadas por su orden de recorrido
    const paradas = await prisma.parada.findMany({
      where: { rutaId: turno.rutaId },
      orderBy: { orden: 'asc' },
    });

    // 3. Función Haversine para cálculo de distancia en kilómetros
    const calcularDistancia = (lat1: number, lon1: number, lat2: number, lon2: number) => {
      const R = 6371; // Radio de la Tierra en km
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };

    let proximaParada = null;
    let dentroDelRadio = false;
    let distanciaMetros = 0;

    // Calcular distancia a todas las paradas en metros
    const paradasConDistancia = paradas.map((p) => {
      const distMeters = calcularDistancia(latNum, lngNum, Number(p.latitud), Number(p.longitud)) * 1000;
      return { parada: p, distancia: distMeters };
    });

    // Buscar si el bus está en el radio de alerta de alguna parada
    const paradaEnRadio = paradasConDistancia.find(pd => pd.distancia <= pd.parada.metrosAlerta);

    if (paradaEnRadio) {
      proximaParada = paradaEnRadio.parada;
      dentroDelRadio = true;
      distanciaMetros = paradaEnRadio.distancia;
    } else {
      // Si no está en el radio de ninguna, la próxima parada es la más cercana
      if (paradasConDistancia.length > 0) {
        const ordenada = [...paradasConDistancia].sort((a, b) => a.distancia - b.distancia);
        proximaParada = ordenada[0].parada;
        distanciaMetros = ordenada[0].distancia;
      }
    }

    return res.json({
      turnoId,
      latActual: latNum,
      lngActual: lngNum,
      proximaParada: proximaParada ? {
        id: proximaParada.id,
        nombre: proximaParada.nombre,
        orden: proximaParada.orden,
        metrosAlerta: proximaParada.metrosAlerta,
      } : null,
      distanciaMetros: Math.round(distanciaMetros),
      dentroDelRadio,
    });
  } catch (error) {
    console.error('Error al actualizar GPS del turno:', error);
    return res.status(500).json({ error: 'Error interno al actualizar GPS' });
  }
};
