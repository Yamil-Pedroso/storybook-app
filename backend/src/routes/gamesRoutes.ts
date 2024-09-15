import { Router } from 'express';

import { getGames, createGame, deleteGame } from '../controllers/gamesController';

const router = Router();

router.get('/games', getGames);
router.post('/games', createGame);
router.delete('/games/:id', deleteGame);

export default router;