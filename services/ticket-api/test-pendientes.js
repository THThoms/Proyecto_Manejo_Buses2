const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { sub: 2, email: 'oficinista@example.com', roles: ['OFICINISTA'], purpose: 'session' },
  'dev-secret-change-me',
  { expiresIn: '24h' }
);

fetch('http://localhost:3003/pagos/transferencia/pendientes', {
  headers: { 'Authorization': `Bearer ${token}` }
})
.then(res => {
  console.log('Status:', res.status);
  return res.text();
})
.then(text => console.log('Body:', text))
.catch(err => console.error(err));
