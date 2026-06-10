import os from 'os';
import path from 'path';

process.env.NODE_ENV = 'test';
process.env.STRIPE_SECRET_KEY = 'sk_test_dummy';
process.env.STRIPE_WEBHOOK_SECRET = 'whsec_test_secret';
process.env.BUS_API_URL = 'http://localhost:3002';
process.env.FRONTEND_URL = 'http://localhost:3010';
process.env.UPLOAD_DIR = path.join(os.tmpdir(), 'ticket-api-test-uploads');
process.env.MAX_UPLOAD_BYTES = String(5 * 1024 * 1024);
