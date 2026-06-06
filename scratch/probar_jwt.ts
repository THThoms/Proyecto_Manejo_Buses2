import { signSessionToken } from '../services/auth-api/src/services/authTokens';
import { extractAndVerify } from '../services/ticket-api/src/services/jwtVerify';

console.log('--- 1. Simulando AUTH-API (Generar Token) ---');
// Simulamos que el usuario 99 inicia sesión y tiene rol de OFICINISTA
const token = signSessionToken(99, 'oficinista@test.com', ['OFICINISTA']);
console.log('Token Generado:\n', token);

console.log('\n--- 2. Simulando TICKET-API (Verificar Token) ---');
// Simulamos que el frontend envía este header en su petición a ticket-api
const authHeader = `Bearer ${token}`;

try {
  const payload = extractAndVerify(authHeader);
  console.log('✅ Token verificado correctamente en ticket-api!');
  console.log('Datos extraídos del token:', payload);
  
  if (payload?.roles.includes('OFICINISTA')) {
    console.log('✅ El usuario tiene permisos de OFICINISTA.');
  }
} catch (error) {
  console.error('❌ Error al verificar el token:', error);
}
