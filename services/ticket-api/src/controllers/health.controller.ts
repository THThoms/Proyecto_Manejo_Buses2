import { Request, Response } from 'express';
import prisma from '../services/prisma';

export const getHealth = async (_req: Request, res: Response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', service: 'ticket-api', db: 'connected' });
  } catch (error) {
    console.error('Health check falló:', error);
    res.status(503).json({ status: 'error', service: 'ticket-api', db: 'disconnected' });
  }
};
