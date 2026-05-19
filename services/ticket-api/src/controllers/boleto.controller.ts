import { Request, Response } from 'express';
import prisma from '../services/prisma';
import { generarQrPng } from '../services/qrService';
import { generarPdfBoleto } from '../services/pdfService';
import { getTurnoDetalle, BusApiError } from '../services/busApiClient';

function parseBoletoId(raw: string): number | null {
  const id = Number(raw);
  return Number.isInteger(id) && id > 0 ? id : null;
}

/**
 * US15 CA #5: QR escaneable en pantalla. Devuelve el PNG del QR del boleto.
 * El contenido del QR es únicamente el uuidQr (ver qrService).
 */
export const getQrPng = async (req: Request, res: Response) => {
  const id = parseBoletoId(req.params.boletoId);
  if (id == null) {
    return res.status(400).json({ error: 'boletoId inválido' });
  }
  try {
    const boleto = await prisma.boleto.findUnique({
      where: { id },
      select: { id: true, uuidQr: true },
    });
    if (!boleto) {
      return res.status(404).json({ error: 'Boleto no encontrado' });
    }
    const png = await generarQrPng(boleto.uuidQr);
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.send(png);
  } catch (error) {
    console.error('Error al generar QR PNG:', error);
    return res.status(500).json({ error: 'Error interno al generar el QR' });
  }
};

/**
 * US15 CA #3 y #4: descarga del boleto en PDF (ruta, hora, asiento, pasajero,
 * QR, número de boleto). Genera el archivo on-demand, no se guarda en disco.
 */
export const getPdf = async (req: Request, res: Response) => {
  const id = parseBoletoId(req.params.boletoId);
  if (id == null) {
    return res.status(400).json({ error: 'boletoId inválido' });
  }
  try {
    const boleto = await prisma.boleto.findUnique({
      where: { id },
      include: {
        compra: {
          include: { asientos: { orderBy: { id: 'asc' } } },
        },
      },
    });
    if (!boleto) {
      return res.status(404).json({ error: 'Boleto no encontrado' });
    }

    // Asociación boleto↔asiento por orden de creación (mismo patrón que el
    // helper de confirmación). Si hay menos asientos que boletos, asientoNumero
    // queda en null.
    const boletosOrdenados = await prisma.boleto.findMany({
      where: { compraId: boleto.compraId },
      orderBy: { id: 'asc' },
      select: { id: true },
    });
    const idx = boletosOrdenados.findIndex((b) => b.id === boleto.id);
    const asiento = idx >= 0 ? boleto.compra.asientos[idx] : undefined;

    let turno = null;
    if (boleto.compra.turnoId != null) {
      try {
        const detalle = await getTurnoDetalle(boleto.compra.turnoId);
        turno = {
          horaInicio: detalle.horaInicio,
          ruta: { nombre: detalle.ruta.nombre, origen: detalle.ruta.origen, destino: detalle.ruta.destino },
          bus: { placa: detalle.bus.placa, marca: detalle.bus.marca },
        };
      } catch (err) {
        if (err instanceof BusApiError) {
          console.warn('[boleto.pdf] no se pudo traer turno desde bus-api:', err.status);
          // Si bus-api está caído seguimos generando el PDF sin esos datos en
          // vez de romper la descarga (CA #3 sigue cubierto, CA #4 parcial).
        } else {
          throw err;
        }
      }
    }

    const stream = await generarPdfBoleto({
      boleto: {
        id: boleto.id,
        uuidQr: boleto.uuidQr,
        nombrePasajero: boleto.nombrePasajero,
        cedulaPasajero: boleto.cedulaPasajero,
        tipoTarifa: boleto.tipoTarifa,
        estado: boleto.estado,
        expiraEn: boleto.expiraEn,
      },
      compra: { id: boleto.compraId, fechaViaje: boleto.compra.fechaViaje },
      asientoNumero: asiento?.asientoId ?? null,
      turno,
    });

    const filename = `boleto-${boleto.uuidQr}.pdf`;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    stream.pipe(res);
  } catch (error) {
    console.error('Error al generar PDF de boleto:', error);
    if (!res.headersSent) {
      return res.status(500).json({ error: 'Error interno al generar el PDF' });
    }
  }
};
