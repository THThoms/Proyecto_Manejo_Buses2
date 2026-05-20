// US19: genera el PDF del reporte usando pdfkit (ya instalado por US15).

import PDFDocument from 'pdfkit';
import type { ReporteResultado } from './reportesService';

function fmtFechaCorta(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('es-EC', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

function fmtUsd(n: number): string {
  return `$ ${n.toFixed(2)}`;
}

export function generarPdfReporte(reporte: ReporteResultado): NodeJS.ReadableStream {
  const doc = new PDFDocument({
    size: 'A4',
    layout: 'portrait',
    margin: 40,
    info: {
      Title: 'Reporte de boletos por cooperativa y canal',
      Author: 'TicketBus',
    },
  });

  // Header
  doc
    .font('Helvetica-Bold')
    .fontSize(16)
    .fillColor('#1f2937')
    .text('TicketBus · Reporte de boletos por cooperativa y canal', { align: 'left' });
  doc
    .moveDown(0.2)
    .font('Helvetica')
    .fontSize(9)
    .fillColor('#6b7280')
    .text(`Generado: ${new Date().toLocaleString('es-EC')}`);

  doc.moveDown(0.8);

  // Filtros aplicados
  doc.font('Helvetica-Bold').fontSize(11).fillColor('#1f2937').text('Filtros aplicados');
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(9).fillColor('#1f2937');
  doc.text(`Desde: ${fmtFechaCorta(reporte.filtros.fechaDesde)}   Hasta: ${fmtFechaCorta(reporte.filtros.fechaHasta)}`);
  doc.text(`Cooperativa: ${String(reporte.filtros.cooperativaId)}`);
  doc.text(`Canal: ${reporte.filtros.canal}   Tipo de pasajero: ${reporte.filtros.tipoPasajero}`);
  doc.fontSize(8).fillColor('#6b7280').text(`Criterio: ${reporte.filtros.criterio}`);

  doc.moveDown(0.8);

  // Totales
  doc.font('Helvetica-Bold').fontSize(11).fillColor('#1f2937').text('Totales generales');
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(10).fillColor('#1f2937');
  doc.text(`Boletos: ${reporte.totales.cantidadBoletos}     Monto total: ${fmtUsd(reporte.totales.montoTotal)}`);

  doc.moveDown(0.8);

  // Tabla por canal
  drawSubtotalTable(doc, 'Subtotales por canal', [
    ['Canal', 'Boletos', 'Monto'],
    ...reporte.agrupadoPorCanal.map((g) => [g.canal, String(g.cantidadBoletos), fmtUsd(g.montoTotal)]),
  ]);

  doc.moveDown(0.4);

  // Tabla por tipo pasajero
  drawSubtotalTable(doc, 'Subtotales por tipo de pasajero', [
    ['Tipo de pasajero', 'Boletos', 'Monto'],
    ...reporte.agrupadoPorTipoPasajero.map((g) => [g.tipoPasajero, String(g.cantidadBoletos), fmtUsd(g.montoTotal)]),
  ]);

  doc.moveDown(0.6);

  // Detalle (máx 30 filas)
  doc.font('Helvetica-Bold').fontSize(11).fillColor('#1f2937').text('Detalle (primeras 30 filas)');
  doc.moveDown(0.3);
  const headers = ['Boleto', 'Compra', 'Cooperativa', 'Canal', 'Tipo', 'Estado', 'Fecha viaje', 'Monto'];
  const widths = [44, 44, 110, 50, 60, 50, 70, 56];

  doc.font('Helvetica-Bold').fontSize(8).fillColor('#1f2937');
  drawRow(doc, headers, widths);
  doc.font('Helvetica').fontSize(8).fillColor('#1f2937');

  const filas = reporte.detalle.slice(0, 30);
  for (const d of filas) {
    drawRow(doc, [
      String(d.boletoId),
      String(d.compraId),
      d.cooperativaNombre,
      d.canal,
      d.tipoPasajero,
      d.estadoBoleto,
      fmtFechaCorta(d.fechaViaje),
      fmtUsd(d.monto),
    ], widths);
  }

  if (reporte.detalle.length > 30) {
    doc.moveDown(0.5);
    doc
      .font('Helvetica-Oblique')
      .fontSize(8)
      .fillColor('#6b7280')
      .text(
        `Se muestran las primeras 30 filas de ${reporte.detalle.length}. Exportá a Excel para ver el detalle completo.`,
        { align: 'center' },
      );
  }

  doc.end();
  return doc;
}

function drawSubtotalTable(doc: PDFKit.PDFDocument, titulo: string, filas: string[][]) {
  doc.font('Helvetica-Bold').fontSize(11).fillColor('#1f2937').text(titulo);
  doc.moveDown(0.2);
  const widths = [200, 80, 100];

  doc.font('Helvetica-Bold').fontSize(9).fillColor('#374151');
  drawRow(doc, filas[0], widths);
  doc.font('Helvetica').fontSize(9).fillColor('#1f2937');
  for (let i = 1; i < filas.length; i++) {
    drawRow(doc, filas[i], widths);
  }
}

function drawRow(doc: PDFKit.PDFDocument, cells: string[], widths: number[]) {
  const startX = doc.page.margins.left;
  const y = doc.y;
  let x = startX;
  for (let i = 0; i < cells.length; i++) {
    doc.text(cells[i] ?? '', x, y, { width: widths[i] - 4, lineBreak: false, ellipsis: true });
    x += widths[i];
  }
  doc.moveDown(0.4);
}
