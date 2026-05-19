import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../services/prisma';

const validarQrSchema = z.object({
  uuidQr: z.string().min(1),
  turnoId: z.number().int().positive(),
});

function getOficialId(req: Request): number {
  const raw = req.header('x-user-id');
  const id = Number(raw);
  return Number.isInteger(id) && id > 0 ? id : 1;
}

function describirAsiento(asientos: { asientoId: number }[] | undefined): string {
  if (!asientos || asientos.length === 0) return '-';
  return asientos.map((a) => `#${a.asientoId}`).join(', ');
}

/**
 * US16 — POST /boletos/validar-qr
 *
 * El chofer escanea el QR del boleto y la API responde si el acceso al bus es
 * válido. Si el boleto está VIGENTE y pertenece al turno actual, pasa a
 * UTILIZADO. Cualquier otro estado o turno equivocado se rechaza con un motivo
 * específico para que la PWA pinte la pantalla roja correspondiente.
 */
export const validarQr = async (req: Request, res: Response) => {
  const parsed = validarQrSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Body inválido', detalles: parsed.error.flatten() });
  }
  const { uuidQr, turnoId } = parsed.data;
  const oficialId = getOficialId(req);

  try {
    const boleto = await prisma.boleto.findUnique({
      where: { uuidQr },
      include: {
        compra: {
          include: {
            asientos: true,
          },
        },
      },
    });

    if (!boleto) {
      return res.status(200).json({
        status: 'INVALIDO',
        motivo: 'Boleto no encontrado',
      });
    }

    if (boleto.compra.turnoId !== turnoId) {
      return res.status(200).json({
        status: 'INVALIDO',
        motivo: 'Boleto no pertenece a este viaje',
        boleto: {
          id: boleto.id,
          uuidQr: boleto.uuidQr,
          estado: boleto.estado,
        },
      });
    }

    if (boleto.estado === 'PENDIENTE') {
      return res.status(200).json({
        status: 'INVALIDO',
        motivo: 'Boleto pendiente de validación o pago',
        boleto: {
          id: boleto.id,
          uuidQr: boleto.uuidQr,
          estado: boleto.estado,
        },
      });
    }

    if (boleto.estado === 'ANULADO') {
      return res.status(200).json({
        status: 'INVALIDO',
        motivo: 'Boleto anulado',
        boleto: {
          id: boleto.id,
          uuidQr: boleto.uuidQr,
          estado: boleto.estado,
        },
      });
    }

    if (boleto.estado === 'EXPIRADO') {
      return res.status(200).json({
        status: 'EXPIRADO',
        motivo: 'Boleto expirado',
        boleto: {
          id: boleto.id,
          uuidQr: boleto.uuidQr,
          estado: boleto.estado,
        },
      });
    }

    if (boleto.estado === 'UTILIZADO') {
      return res.status(200).json({
        status: 'UTILIZADO',
        motivo: 'Boleto ya utilizado',
        boleto: {
          id: boleto.id,
          uuidQr: boleto.uuidQr,
          estado: boleto.estado,
        },
      });
    }

    // boleto.estado === 'VIGENTE'
    const ahora = new Date();
    if (boleto.expiraEn && boleto.expiraEn < ahora) {
      await prisma.boleto.update({
        where: { id: boleto.id },
        data: { estado: 'EXPIRADO' },
      });
      return res.status(200).json({
        status: 'EXPIRADO',
        motivo: 'Boleto expirado',
        boleto: {
          id: boleto.id,
          uuidQr: boleto.uuidQr,
          estado: 'EXPIRADO',
        },
      });
    }

    const actualizado = await prisma.boleto.update({
      where: { id: boleto.id },
      data: { estado: 'UTILIZADO' },
    });

    // Registramos el escaneo si no existe uno previo (boletoId es unique).
    try {
      const escaneoPrevio = await prisma.escaneo.findUnique({ where: { boletoId: boleto.id } });
      if (!escaneoPrevio) {
        await prisma.escaneo.create({
          data: {
            boletoId: boleto.id,
            oficialId,
            busId: 0,
            turnoId,
            resultado: 'APROBADO',
          },
        });
      }
    } catch (err) {
      // No bloqueamos la validación si el registro de auditoría falla.
      console.error('No se pudo registrar escaneo US16:', err);
    }

    return res.status(200).json({
      status: 'VALIDO',
      mensaje: 'Boleto válido',
      boleto: {
        id: actualizado.id,
        uuidQr: actualizado.uuidQr,
        estado: actualizado.estado,
        nombrePasajero: boleto.nombrePasajero,
        asiento: describirAsiento(boleto.compra.asientos),
        destino: boleto.compra.destino ?? '-',
      },
    });
  } catch (error) {
    console.error('Error al validar QR US16:', error);
    return res.status(500).json({ error: 'Error interno al validar el boleto' });
  }
};

/**
 * US16 — GET /turnos/:turnoId/boletos-validacion
 *
 * Devuelve el listado mínimo de boletos del turno para que la PWA del chofer
 * cachee los datos necesarios y pueda validar QRs sin conexión. Sin cédula
 * completa, sin datos de pago.
 */
export const listarBoletosDelTurno = async (req: Request, res: Response) => {
  const turnoId = Number(req.params.turnoId);
  if (!Number.isInteger(turnoId) || turnoId <= 0) {
    return res.status(400).json({ error: 'turnoId inválido' });
  }

  try {
    const boletos = await prisma.boleto.findMany({
      where: {
        compra: { turnoId },
      },
      include: {
        compra: {
          select: {
            id: true,
            turnoId: true,
            destino: true,
            asientos: {
              select: { asientoId: true },
            },
          },
        },
      },
      orderBy: { id: 'asc' },
    });

    if (boletos.length === 0) {
      return res.status(200).json({
        turnoId,
        total: 0,
        boletos: [],
      });
    }

    const resultado = boletos.map((b) => ({
      uuidQr: b.uuidQr,
      boletoId: b.id,
      estado: b.estado,
      nombrePasajero: b.nombrePasajero,
      asiento: describirAsiento(b.compra.asientos),
      destino: b.compra.destino ?? '-',
    }));

    return res.status(200).json({
      turnoId,
      total: resultado.length,
      boletos: resultado,
    });
  } catch (error) {
    console.error('Error al listar boletos para validación US16:', error);
    return res.status(500).json({ error: 'Error interno al cargar el listado del viaje' });
  }
};
