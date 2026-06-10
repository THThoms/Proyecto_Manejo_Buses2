import { PrismaClient as AuthPrismaClient } from './auth-client';
import { PrismaClient as BusPrismaClient } from './bus-client';
import { PrismaClient as TicketPrismaClient } from './ticket-client';

export * from './bus-client';

export const authDb: AuthPrismaClient;
export const busDb: BusPrismaClient;
export const ticketDb: TicketPrismaClient;

export { AuthPrismaClient, BusPrismaClient, TicketPrismaClient };
