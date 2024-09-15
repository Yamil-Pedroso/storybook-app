import { Router } from 'express';
import games from './gamesRoutes';

const router = Router();

router.use('/', games);

export default router;