import { Router } from 'express'
import { createGame, getGames, deleteGame, updateGame } from '../controllers/gameController.js'

const router = Router()

router.post('/', createGame)
router.get('/', getGames)
router.delete('/:id', deleteGame)
router.put('/:id', updateGame)

export default router