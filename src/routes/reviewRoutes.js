import { Router } from 'express'
import { createReview, getReviews, deleteReview, updateReview } from '../controllers/ReviewController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const router = Router()

router.post('/', authMiddleware, createReview)
router.get('/', getReviews)
router.delete('/:id', deleteReview)
router.put('/:id', authMiddleware, updateReview)

export default router