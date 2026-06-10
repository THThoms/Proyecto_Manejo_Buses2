import { Router } from 'express';
import { getConfigApp, updateConfigApp } from '../controllers/configApp.controller';

const router = Router();

// US22
router.get('/app', getConfigApp);
router.put('/app', updateConfigApp);

export default router;
