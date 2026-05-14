import { createReviewService, getReviewsService, deleteReviewService, updateReviewService } from '../services/ReviewService.js'

export async function createReview(req, res){
    const review = await createReviewService(req.body)
    res.status(201).json(review)
}

export async function getReviews(req, res){
    const { userId, gameId } = req.query
    const reviews = await getReviewsService({userId, gameId})
    res.status(200).json(reviews)
}

export async function deleteReview(req, res){
    const { id } = req.params
    await deleteReviewService(id)
    res.status(200).json({message: 'Review deletada com sucesso!'})
}

export async function updateReview(req, body){
    const { id } = req.params
    await updateReviewService(id, req.body)
    res.status(201).json(req.body)
}