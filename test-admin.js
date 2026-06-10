const { requireAdmin } = require('./services/ticket-api/dist/middlewares/requireAdmin');
console.log('Test admin loaded', requireAdmin);
