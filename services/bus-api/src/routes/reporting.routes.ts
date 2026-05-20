import { Router } from 'express';
import { getCooperativasMap } from '../controllers/reporting.controller';

const router = Router();

router.get('/cooperativas-map', getCooperativasMap);

export default router;
