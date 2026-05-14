import { Router } from 'express'
import { createUser, getUsers, deleteUser, updateUser } from '../controllers/userController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const router = Router()

router.post('/', createUser)
router.get('/', authMiddleware, getUsers)
router.delete('/:id', authMiddleware, deleteUser)
router.put('/:id', authMiddleware, updateUser)


export default router