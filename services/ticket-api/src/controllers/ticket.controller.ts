import { Request, Response } from 'express';
import { ticketDb as prisma } from '@proyecto-saas/database';
import QRCode from 'qrcode';

/**
 * POST /tickets/compra-efectivo
 * US13 - Pago en efectivo en oficina
 */
export const compraEfectivo = async (req: Request, res: Response) => {
  const { 
    usuarioId, 
    frecuenciaId, 
    fechaViaje, 
    cedulaPasajero, 
    nombrePasajero, 
    montoRecibido,
    vendedorId 
  } = req.body;

  try {
    // 1. Obtener precio desde Bus Service (Simulado o directo si compartieran DB)
    // Para simplificar, asumiremos un precio fijo por ahora o lo recibimos en el body
    const total = req.body.total || 10.00; 

    // 2. Crear la Compra
    const compra = await prisma.compra.create({
      data: {
        usuarioId,
        frecuenciaId,
        fechaViaje: new Date(fechaViaje),
        total,
        canal: 'OFICINISTA',
        estado: 'CONFIRMADA',
      }
    });

    // 3. Crear el Pago en Efectivo
    const cambio = Number(montoRecibido) - Number(total);
    await prisma.pagoPasajero.create({
      data: {
        compraId: compra.id,
        monto: total,
        metodo: 'EFECTIVO',
        estado: 'APROBADO',
        pagadoEn: new Date(),
        pagoEfectivo: {
          create: {
            vendedorId,
            montoRecibido,
            cambio,
            canalVenta: 'OFICINA'
          }
        }
      }
    });

    // 4. Generar el Boleto con QR (US15)
    const boleto = await prisma.boleto.create({
      data: {
        compraId: compra.id,
        cedulaPasajero,
        nombrePasajero,
        estado: 'VIGENTE',
        expiraEn: new Date(new Date(fechaViaje).getTime() + 24 * 60 * 60 * 1000), // +24h
      }
    });

    // 5. Generar imagen QR base64
    const qrData = JSON.stringify({
      id: boleto.id,
      uuid: boleto.uuidQr,
      pasajero: nombrePasajero,
      fecha: fechaViaje
    });
    const qrImage = await QRCode.toDataURL(qrData);

    res.status(201).json({
      message: 'Venta realizada con éxito',
      compraId: compra.id,
      boleto: {
        ...boleto,
        qrImage
      },
      cambio
    });

  } catch (error) {
    console.error('Error en compraEfectivo:', error);
    res.status(500).json({ error: 'Error al procesar la venta en efectivo' });
  }
};

/**
 * GET /tickets/historial/:usuarioId
 */
export const getHistorial = async (req: Request, res: Response) => {
  const { usuarioId } = req.params;
  try {
    const compras = await prisma.compra.findMany({
      where: { usuarioId: Number(usuarioId) },
      include: {
        boletos: true,
        pago: true
      },
      orderBy: { creadoEn: 'desc' }
    });
    res.json(compras);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el historial' });
  }
};
