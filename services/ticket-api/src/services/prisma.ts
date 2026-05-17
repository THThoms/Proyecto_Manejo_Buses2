import { PrismaClient } from '../../../../packages/database/prisma/generated/ticket-client';

declare global {
  // eslint-disable-next-line no-var
  var prismaTicket: PrismaClient | undefined;
}

const prisma = global.prismaTicket ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prismaTicket = prisma;
}

export default prisma;
