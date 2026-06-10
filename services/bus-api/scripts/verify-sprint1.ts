async function verify() {
  console.log('--- 🧪 VERIFICACIÓN SPRINT 1 ---');

  try {
    // 1. Probar Rotación de Buses (US05)
    console.log('\n[US05] Probando Rotación de Buses...');
    const respTurno = await fetch('http://localhost:3002/turnos/generar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fecha: '2026-05-04' })
    });
    const dataTurno = await respTurno.json();
    console.log('✅ Respuesta Generación:', dataTurno.message);
    
    const respList = await fetch('http://localhost:3002/turnos');
    const turnos = await respList.json();
    console.log('✅ Turnos en DB:', turnos.length);
    if (turnos.length > 0) {
      console.log('🚌 Bus asignado:', turnos[0].bus.placa);
    }

    // 2. Probar Anti-fraude (US09)
    console.log('\n[US09] Probando Validación de Descuento...');
    const respDesc = await fetch('http://localhost:3002/descuentos/validar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cedula: '1720000000', tipoDescuento: 'TERCERA_EDAD' })
    });
    const dataDesc = await respDesc.json();
    console.log('✅ Descuento permitido:', dataDesc.allowed);

    console.log('\n--- 🏁 FIN DE PRUEBAS ---');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

verify();
