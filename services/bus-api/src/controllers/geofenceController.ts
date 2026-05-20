import { Request, Response } from 'express';
import haversine from 'haversine-distance';

// Example geofence logic
export const checkBusProximity = (req: Request, res: Response) => {
  const { busLocation, stopLocation, alertRadius } = req.body;

  if (!busLocation || !stopLocation || !alertRadius) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  const distance = haversine(busLocation, stopLocation);

  if (distance <= alertRadius) {
    // Trigger push notification logic here
    return res.status(200).json({ alert: true, distance });
  }

  return res.status(200).json({ alert: false, distance });
};