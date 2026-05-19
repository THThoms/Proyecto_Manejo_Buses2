import { Request, Response } from 'express';
import { busDb as prisma } from '@proyecto-saas/database';

/** GET /cooperativas - Listar todas las cooperativas */
export const getAllCooperativas = async (req: Request, res: Response) => {
  try {
    const cooperativas = await prisma.cooperativa.findMany({
      orderBy: { nombre: 'asc' },
    });
    res.json(cooperativas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las cooperativas' });
  }
};

/** GET /cooperativas/:id - Detalle de una cooperativa */
export const getCooperativaById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const cooperativa = await prisma.cooperativa.findUnique({
      where: { id: Number(id) },
      include: { buses: true },
    });
    if (!cooperativa) {
      return res.status(404).json({ error: 'Cooperativa no encontrada' });
    }
    res.json(cooperativa);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la cooperativa' });
  }
};

/** POST /cooperativas - Crear una cooperativa (US01) */
export const createCooperativa = async (req: Request, res: Response) => {
  const { nombre, ruc, logo, cuentaBancaria, banco } = req.body;

  if (!nombre || !ruc) {
    return res.status(400).json({ error: 'Nombre y RUC son obligatorios' });
  }

  try {
    const cooperativa = await prisma.cooperativa.create({
      // Cast as any: Prisma client may be stale — fields exist in bus-schema.prisma
      data: { nombre, ruc, logo, cuentaBancaria, banco, estado: 'ACTIVO' } as any,
    });
    res.status(201).json(cooperativa);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Ya existe una cooperativa con ese RUC' });
    }
    res.status(500).json({ error: 'Error al crear la cooperativa' });
  }
};

/** PUT /cooperativas/:id - Actualizar cooperativa */
export const updateCooperativa = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, ruc, logo, cuentaBancaria, banco, estado } = req.body;
  try {
    const cooperativa = await prisma.cooperativa.update({
      where: { id: Number(id) },
      // Cast as any: Prisma client may be stale — fields exist in bus-schema.prisma
      data: { nombre, ruc, logo, cuentaBancaria, banco, estado } as any,
    });
    res.json(cooperativa);
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Cooperativa no encontrada' });
    }
    res.status(500).json({ error: 'Error al actualizar la cooperativa' });
  }
};

/** DELETE /cooperativas/:id - Desactivar cooperativa (soft delete) */
export const deleteCooperativa = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.cooperativa.update({
      where: { id: Number(id) },
      data: { estado: 'INACTIVO' },
    });
    res.json({ message: 'Cooperativa desactivada correctamente' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Cooperativa no encontrada' });
    }
    res.status(500).json({ error: 'Error al eliminar la cooperativa' });
  }
};
