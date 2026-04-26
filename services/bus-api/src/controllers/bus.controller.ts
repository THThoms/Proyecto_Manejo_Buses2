import { Request, Response } from 'express';
import { BusPrismaClient } from '@proyecto-saas/database';

const prisma = new BusPrismaClient();

export const getAllBuses = async (req: Request, res: Response) => {
  try {
    const buses = await prisma.bus.findMany({
      include: {
        cooperativa: true,
        dueno: true
      }
    });
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching buses' });
  }
};

export const getBusById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const bus = await prisma.bus.findUnique({
      where: { id: Number(id) },
      include: {
        cooperativa: true,
        dueno: true,
        asientos: true
      }
    });
    if (!bus) return res.status(404).json({ error: 'Bus not found' });
    res.json(bus);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bus' });
  }
};

export const createBus = async (req: Request, res: Response) => {
  const { cooperativaId, duenoId, placa, marca, carroceria, modelo, anio, capacidad, color } = req.body;
  try {
    const newBus = await prisma.bus.create({
      data: {
        cooperativaId,
        duenoId,
        placa,
        marca,
        carroceria,
        modelo,
        anio,
        capacidad,
        color,
        estado: 'ACTIVO'
      }
    });
    res.status(201).json(newBus);
  } catch (error) {
    res.status(500).json({ error: 'Error creating bus', detail: error });
  }
};

export const updateBus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedBus = await prisma.bus.update({
      where: { id: Number(id) },
      data
    });
    res.json(updatedBus);
  } catch (error) {
    res.status(500).json({ error: 'Error updating bus' });
  }
};
