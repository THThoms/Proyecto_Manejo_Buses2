import { Request, Response } from 'express';
import { BusPrismaClient } from '@proyecto-saas/database';

const prisma = new BusPrismaClient();

export const getAllRutas = async (req: Request, res: Response) => {
  try {
    const rutas = await prisma.ruta.findMany({
      include: {
        paradas: true
      }
    });
    res.json(rutas);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching routes' });
  }
};

export const getRutaById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const ruta = await prisma.ruta.findUnique({
      where: { id: Number(id) },
      include: {
        paradas: true,
        frecuencias: true
      }
    });
    if (!ruta) return res.status(404).json({ error: 'Route not found' });
    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching route' });
  }
};

export const createRuta = async (req: Request, res: Response) => {
  const { nombre, origen, destino, duracionMin, precioPasaje } = req.body;
  try {
    const newRuta = await prisma.ruta.create({
      data: {
        nombre,
        origen,
        destino,
        duracionMin,
        precioPasaje,
      }
    });
    res.status(201).json(newRuta);
  } catch (error) {
    res.status(500).json({ error: 'Error creating route', detail: error });
  }
};

export const updateRuta = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedRuta = await prisma.ruta.update({
      where: { id: Number(id) },
      data
    });
    res.json(updatedRuta);
  } catch (error) {
    res.status(500).json({ error: 'Error updating route' });
  }
};
