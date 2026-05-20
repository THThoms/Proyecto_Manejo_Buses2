// US19: genera el .xlsx del reporte con 4 hojas: Resumen, Por canal,
// Por tipo pasajero, Detalle. Usa exceljs (aprobado).

import ExcelJS from 'exceljs';
import type { ReporteResultado } from './reportesService';

export async function generarExcelReporte(reporte: ReporteResultado): Promise<Buffer> {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'TicketBus';
  wb.created = new Date();

  // Hoja 1: Resumen
  const resumen = wb.addWorksheet('Resumen');
  resumen.columns = [
    { header: 'Campo', key: 'k', width: 32 },
    { header: 'Valor', key: 'v', width: 40 },
  ];
  resumen.addRows([
    { k: 'Reporte', v: 'Boletos por cooperativa y canal' },
    { k: 'Generado', v: new Date().toLocaleString('es-EC') },
    { k: 'Fecha desde', v: reporte.filtros.fechaDesde },
    { k: 'Fecha hasta', v: reporte.filtros.fechaHasta },
    { k: 'Cooperativa', v: String(reporte.filtros.cooperativaId) },
    { k: 'Canal', v: reporte.filtros.canal },
    { k: 'Tipo pasajero', v: reporte.filtros.tipoPasajero },
    { k: 'Criterio', v: reporte.filtros.criterio },
    { k: '', v: '' },
    { k: 'Total boletos', v: reporte.totales.cantidadBoletos },
    { k: 'Monto total', v: reporte.totales.montoTotal },
  ]);
  resumen.getRow(1).font = { bold: true };

  // Hoja 2: Por canal
  const sCanal = wb.addWorksheet('Por canal');
  sCanal.columns = [
    { header: 'Canal', key: 'canal', width: 14 },
    { header: 'Boletos', key: 'cant', width: 12 },
    { header: 'Monto', key: 'monto', width: 14, style: { numFmt: '"$"#,##0.00' } },
  ];
  for (const g of reporte.agrupadoPorCanal) {
    sCanal.addRow({ canal: g.canal, cant: g.cantidadBoletos, monto: g.montoTotal });
  }
  sCanal.addRow({});
  sCanal.addRow({
    canal: 'TOTAL',
    cant: reporte.totales.cantidadBoletos,
    monto: reporte.totales.montoTotal,
  });
  sCanal.getRow(1).font = { bold: true };
  sCanal.lastRow!.font = { bold: true };

  // Hoja 3: Por tipo pasajero
  const sTipo = wb.addWorksheet('Por tipo pasajero');
  sTipo.columns = [
    { header: 'Tipo de pasajero', key: 'tipo', width: 22 },
    { header: 'Boletos', key: 'cant', width: 12 },
    { header: 'Monto', key: 'monto', width: 14, style: { numFmt: '"$"#,##0.00' } },
  ];
  for (const g of reporte.agrupadoPorTipoPasajero) {
    sTipo.addRow({ tipo: g.tipoPasajero, cant: g.cantidadBoletos, monto: g.montoTotal });
  }
  sTipo.addRow({});
  sTipo.addRow({
    tipo: 'TOTAL',
    cant: reporte.totales.cantidadBoletos,
    monto: reporte.totales.montoTotal,
  });
  sTipo.getRow(1).font = { bold: true };
  sTipo.lastRow!.font = { bold: true };

  // Hoja 4: Detalle
  const sDet = wb.addWorksheet('Detalle');
  sDet.columns = [
    { header: 'Boleto', key: 'boletoId', width: 10 },
    { header: 'Compra', key: 'compraId', width: 10 },
    { header: 'Fecha compra', key: 'fechaCompra', width: 22 },
    { header: 'Fecha viaje', key: 'fechaViaje', width: 14 },
    { header: 'Cooperativa', key: 'cooperativaNombre', width: 28 },
    { header: 'Canal', key: 'canal', width: 12 },
    { header: 'Tipo pasajero', key: 'tipoPasajero', width: 18 },
    { header: 'Estado boleto', key: 'estadoBoleto', width: 14 },
    { header: 'Monto', key: 'monto', width: 14, style: { numFmt: '"$"#,##0.00' } },
  ];
  for (const d of reporte.detalle) {
    sDet.addRow(d);
  }
  sDet.getRow(1).font = { bold: true };

  const buffer = await wb.xlsx.writeBuffer();
  return Buffer.from(buffer);
}
