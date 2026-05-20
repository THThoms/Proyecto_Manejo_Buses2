// US20: genera el PDF de liquidación mensual con membrete TicketBus,
// cooperativa, cuenta bancaria, periodo, totales y desglose.

import PDFDocument from 'pdfkit';
import type { LiquidacionResultado } from './liquidacionService';

const MES_NOMBRES = [
  '', 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

function fmtUsd(n: number): string {
  return `$ ${n.toFixed(2)}`;
}

export function generarPdfLiquidacion(liq: LiquidacionResultado): NodeJS.ReadableStream {
  const doc = new PDFDocument({
    size: 'A4',
    layout: 'portrait',
    margin: 48,
    info: {
      Title: `Liquidación ${liq.cooperativa.nombre} ${liq.periodo.year}-${liq.periodo.month}`,
      Author: 'TicketBus',
    },
  });

  // Membrete
  doc.font('Helvetica-Bold').fontSize(20).fillColor('#1f2937').text('TicketBus', { continued: true });
  doc.font('Helvetica').fontSize(10).fillColor('#6b7280').text('  ·  Sistema de gestión de boletería', { align: 'left' });

  doc
    .moveTo(48, doc.y + 10)
    .lineTo(547, doc.y + 10)
    .lineWidth(2)
    .strokeColor('#2563eb')
    .stroke();

  doc.moveDown(1.2);
  doc.font('Helvetica-Bold').fontSize(15).fillColor('#1f2937')
    .text('Liquidación mensual por cooperativa', { align: 'center' });

  doc.moveDown(0.3);
  doc.font('Helvetica').fontSize(9).fillColor('#6b7280')
    .text(`Generado: ${new Date().toLocaleString('es-EC')}`, { align: 'center' });

  doc.moveDown(1);

  // Cooperativa
  drawSeccion(doc, 'Cooperativa');
  drawLinea(doc, 'Nombre', liq.cooperativa.nombre);
  drawLinea(doc, 'RUC', liq.cooperativa.ruc || '—');

  doc.moveDown(0.4);
  drawSeccion(doc, 'Cuenta bancaria registrada');
  drawLinea(doc, 'Banco', liq.cooperativa.cuentaBancaria.banco || '(no registrado)');
  drawLinea(doc, 'Número de cuenta', liq.cooperativa.cuentaBancaria.numero || '(no registrado)');

  doc.moveDown(0.4);
  drawSeccion(doc, 'Periodo liquidado');
  const mesNombre = MES_NOMBRES[liq.periodo.month] ?? String(liq.periodo.month);
  drawLinea(doc, 'Mes', `${mesNombre} ${liq.periodo.year}`);
  drawLinea(doc, 'Desde', liq.periodo.desde);
  drawLinea(doc, 'Hasta', liq.periodo.hasta);

  doc.moveDown(0.4);
  drawSeccion(doc, 'Totales');
  drawLinea(doc, 'Boletos vendidos', String(liq.totales.cantidadBoletos));
  drawLinea(doc, 'Monto total', fmtUsd(liq.totales.montoTotal));

  doc.moveDown(0.6);

  // Desglose
  drawSeccion(doc, 'Desglose por tipo de pasajero');
  const headers = ['Tipo', 'Boletos', 'Monto'];
  const widths = [200, 80, 100];
  doc.font('Helvetica-Bold').fontSize(10).fillColor('#374151');
  drawRow(doc, headers, widths);
  doc.font('Helvetica').fontSize(10).fillColor('#1f2937');
  for (const g of liq.desglosePorTipoPasajero) {
    drawRow(doc, [g.tipoPasajero, String(g.cantidadBoletos), fmtUsd(g.montoTotal)], widths);
  }

  doc.moveDown(1);

  // Resumen final
  doc.font('Helvetica-Bold').fontSize(10).fillColor('#1f2937')
    .text(`TOTAL A LIQUIDAR: ${fmtUsd(liq.totales.montoTotal)}`, { align: 'right' });

  doc.moveDown(2);

  // Firma / nota
  doc.font('Helvetica').fontSize(9).fillColor('#6b7280');
  doc.text('_________________________________');
  doc.text('Firma de revisión administrativa');

  doc.moveDown(1.5);
  doc.font('Helvetica-Oblique').fontSize(8).fillColor('#9ca3af')
    .text('Documento generado automáticamente. Los datos bancarios mostrados están parcialmente enmascarados por seguridad.', { align: 'center' });
  doc.text(liq.criterio, { align: 'center' });

  doc.end();
  return doc;
}

function drawSeccion(doc: PDFKit.PDFDocument, titulo: string) {
  doc.font('Helvetica-Bold').fontSize(11).fillColor('#2563eb').text(titulo);
  doc.moveDown(0.2);
}

function drawLinea(doc: PDFKit.PDFDocument, etiqueta: string, valor: string) {
  const startX = doc.page.margins.left;
  const y = doc.y;
  doc.font('Helvetica').fontSize(10).fillColor('#6b7280').text(`${etiqueta}: `, startX, y, { continued: true, lineBreak: false });
  doc.fillColor('#1f2937').text(valor);
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
