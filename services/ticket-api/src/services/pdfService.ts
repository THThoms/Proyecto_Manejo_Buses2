import PDFDocument from 'pdfkit';
import { generarQrPng } from './qrService';

export interface PdfBoletoData {
  boleto: {
    id: number;
    uuidQr: string;
    nombrePasajero: string;
    cedulaPasajero: string;
    tipoTarifa: string;
    estado: string;
    expiraEn: Date | string;
  };
  compra: {
    id: number;
    fechaViaje: Date | string;
  };
  asientoNumero: number | null;
  turno: {
    horaInicio: string;
    ruta: { nombre: string; origen: string; destino: string };
    bus: { placa: string; marca: string };
  } | null;
}

function maskCedula(cedula: string): string {
  if (!cedula || cedula.length < 4) return '***';
  return `${cedula.slice(0, 2)}${'*'.repeat(Math.max(0, cedula.length - 4))}${cedula.slice(-2)}`;
}

function formatFecha(d: Date | string): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('es-EC', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

/**
 * US15 CA #3 y #4: arma el PDF del boleto con ruta, hora de salida,
 * asiento, nombre del pasajero, QR y número de boleto. La cédula se
 * imprime enmascarada; el QR contiene solo uuidQr (ver qrService).
 *
 * Devuelve un stream listo para pipe() hacia la response de Express.
 */
export async function generarPdfBoleto(data: PdfBoletoData): Promise<NodeJS.ReadableStream> {
  const qrPng = await generarQrPng(data.boleto.uuidQr);

  const doc = new PDFDocument({
    size: 'A5',
    layout: 'portrait',
    margin: 36,
    info: {
      Title: `Boleto #${data.boleto.id}`,
      Author: 'TicketBus',
      Subject: `Boleto ${data.boleto.uuidQr}`,
    },
  });

  // Encabezado
  doc
    .font('Helvetica-Bold')
    .fontSize(20)
    .fillColor('#1f2937')
    .text('TicketBus', { align: 'left' });
  doc
    .font('Helvetica')
    .fontSize(10)
    .fillColor('#6b7280')
    .text(`Boleto Nº ${data.boleto.id}`, { align: 'right' })
    .moveDown(0.3)
    .fontSize(8)
    .text(`UUID ${data.boleto.uuidQr}`, { align: 'right' });

  doc
    .moveTo(36, doc.y + 8)
    .lineTo(383, doc.y + 8)
    .strokeColor('#e5e7eb')
    .stroke();
  doc.moveDown(1.2);

  // Datos del viaje
  doc.font('Helvetica-Bold').fontSize(11).fillColor('#1f2937').text('Datos del viaje');
  doc.moveDown(0.3);
  doc.font('Helvetica').fontSize(10).fillColor('#1f2937');

  if (data.turno) {
    doc.text(`Ruta: ${data.turno.ruta.origen} → ${data.turno.ruta.destino}`);
    doc.text(`Nombre de ruta: ${data.turno.ruta.nombre}`);
    doc.text(`Hora de salida: ${data.turno.horaInicio}`);
    doc.text(`Bus: ${data.turno.bus.marca} · placa ${data.turno.bus.placa}`);
  } else {
    doc.fillColor('#9ca3af').text('Datos de ruta no disponibles.');
    doc.fillColor('#1f2937');
  }
  doc.text(`Fecha de viaje: ${formatFecha(data.compra.fechaViaje)}`);
  doc.text(`Asiento: ${data.asientoNumero != null ? `#${data.asientoNumero}` : '—'}`);
  doc.moveDown(0.8);

  // Pasajero
  doc.font('Helvetica-Bold').fontSize(11).text('Pasajero');
  doc.moveDown(0.3);
  doc.font('Helvetica').fontSize(10);
  doc.text(`Nombre: ${data.boleto.nombrePasajero}`);
  doc.text(`Cédula: ${maskCedula(data.boleto.cedulaPasajero)}`);
  doc.text(`Tipo de tarifa: ${data.boleto.tipoTarifa}`);
  doc.text(`Estado: ${data.boleto.estado}`);
  doc.moveDown(1);

  // QR centrado
  const qrSize = 140;
  const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const qrX = doc.page.margins.left + (pageWidth - qrSize) / 2;
  doc.image(qrPng, qrX, doc.y, { width: qrSize, height: qrSize });
  doc.moveDown(qrSize / 12);

  doc
    .font('Helvetica')
    .fontSize(8)
    .fillColor('#6b7280')
    .text(data.boleto.uuidQr, { align: 'center' });
  doc.moveDown(0.5);
  doc
    .font('Helvetica-Oblique')
    .fontSize(9)
    .fillColor('#4b5563')
    .text(`Boleto válido hasta ${formatFecha(data.boleto.expiraEn)}. Presentar al abordar.`, {
      align: 'center',
    });

  doc.end();
  return doc;
}
