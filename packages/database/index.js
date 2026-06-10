const { PrismaClient: AuthPrismaClient } = require('./auth-client');
const { PrismaClient: BusPrismaClient } = require('./bus-client');
const { PrismaClient: TicketPrismaClient } = require('./ticket-client');

const authDb = new AuthPrismaClient();
const busDb = new BusPrismaClient();
const ticketDb = new TicketPrismaClient();

module.exports = {
  authDb,
  busDb,
  ticketDb,
  ...require('./bus-client'), // Export bus types/enums for convenience
};
