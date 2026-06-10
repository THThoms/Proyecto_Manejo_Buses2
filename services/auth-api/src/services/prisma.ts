// US21: cliente Prisma de auth-api con singleton para evitar leaks en tests.
import { PrismaClient } from '../../../../packages/database/prisma/generated/auth-client';

declare global {
  // eslint-disable-next-line no-var
  var prismaAuth: PrismaClient | undefined;
}

const prisma = global.prismaAuth ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prismaAuth = prisma;
}

export default prisma;
