import { Request, Response } from 'express';
import prisma from '../services/prisma';
import { getTurnoDetalle, BusApiError } from '../services/busApiClient';

/**
 * US16: Verificar boleto por UUID QR
 */
export const verificarBoleto = async (req: Request, res: Response) => {
  const { uuidQr, turnoId } = req.body;
  const oficialId = Number(req.header('x-user-id')) || 1;

  if (!uuidQr || !turnoId) {
    return res.status(400).json({ error: 'uuidQr y turnoId son requeridos' });
  }

  try {
    // 1. Obtener detalles del turno desde bus-api para conseguir el busId
    let busId = 1;
    try {
      const turnoDetalle = await getTurnoDetalle(Number(turnoId));
      busId = turnoDetalle.bus.id;
    } catch (err) {
      console.warn('[verificarBoleto] no se pudo conectar con bus-api para validar el turno, usando busId = 1 por defecto');
    }

    // 2. Buscar boleto en ticket-api
    const boleto = await prisma.boleto.findUnique({
      where: { uuidQr },
      include: {
        compra: true,
        escaneo: true,
      },
    });

    if (!boleto) {
      return res.status(404).json({
        valido: false,
        motivo: 'NO_ENCONTRADO',
        mensaje: 'No se encontró ningún boleto con este código QR',
      });
    }

    // 3. Validar si corresponde al turno seleccionado
    if (boleto.compra.turnoId !== Number(turnoId)) {
      return res.status(400).json({
        valido: false,
        motivo: 'TURNO_INCORRECTO',
        mensaje: 'Este boleto no corresponde a este viaje/turno',
        pasajero: boleto.nombrePasajero,
      });
    }

    // 4. Validar estado del boleto
    if (boleto.estado === 'UTILIZADO') {
      return res.status(400).json({
        valido: false,
        motivo: 'UTILIZADO',
        mensaje: 'Este boleto ya fue utilizado',
        pasajero: boleto.nombrePasajero,
      });
    }

    if (boleto.estado === 'EXPIRADO') {
      return res.status(400).json({
        valido: false,
        motivo: 'EXPIRADO',
        mensaje: 'Este boleto ha expirado',
        pasajero: boleto.nombrePasajero,
      });
    }

    if (boleto.estado === 'PENDIENTE') {
      return res.status(400).json({
        valido: false,
        motivo: 'PENDIENTE',
        mensaje: 'El pago de este boleto no ha sido confirmado',
        pasajero: boleto.nombrePasajero,
      });
    }

    if (boleto.estado === 'ANULADO') {
      return res.status(400).json({
        valido: false,
        motivo: 'ANULADO',
        mensaje: 'Este boleto fue anulado',
        pasajero: boleto.nombrePasajero,
      });
    }

    if (boleto.estado !== 'VIGENTE') {
      return res.status(400).json({
        valido: false,
        motivo: 'ESTADO_INVALIDO',
        mensaje: `El boleto está en estado no válido: ${boleto.estado}`,
        pasajero: boleto.nombrePasajero,
      });
    }

    // 5. Si es VIGENTE, marcar como UTILIZADO y registrar el escaneo
    const actualizacion = await prisma.$transaction(async (tx: any) => {
      const boletoActualizado = await tx.boleto.update({
        where: { id: boleto.id },
        data: { estado: 'UTILIZADO' },
      });

      const escaneo = await tx.escaneo.create({
        data: {
          boletoId: boleto.id,
          oficialId,
          busId,
          turnoId: Number(turnoId),
          resultado: 'APROBADO',
        },
      });

      return { boletoActualizado, escaneo };
    });

    // 6. Devolver respuesta válida exitosa (pantalla verde)
    return res.status(200).json({
      valido: true,
      pasajero: boleto.nombrePasajero,
      cedula: boleto.cedulaPasajero,
      asiento: boleto.id, // Asignado por el ID o índice de creación
      destino: boleto.compra.destino || 'Destino no especificado',
      origen: boleto.compra.origen || 'Origen no especificado',
      tipoTarifa: boleto.tipoTarifa,
      boletoId: boleto.id,
      uuidQr: boleto.uuidQr,
    });

  } catch (error) {
    console.error('Error al verificar boleto:', error);
    return res.status(500).json({ error: 'Error interno del servidor al verificar el boleto' });
  }
};
