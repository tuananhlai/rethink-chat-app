import { Router } from 'express';
import UserRouter from './user.route';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);

// Export the base-router
export default router;
