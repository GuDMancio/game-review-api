import { prisma } from '../../prisma/prismaClient.js'

export async function createReviewService({ rating, comment, userId, gameId }) {
    if(rating > 10 || rating < 0){
        throw new Error("Insira uma nota válida")
    }
    
    const review = await prisma.review.create({
        data: { rating, comment, userId, gameId }
    })

    await updateGameRating(gameId)

    return review
}

export async function getReviewsService({ userId, gameId }) {
    return prisma.review.findMany({
        where: {
            userId: userId || undefined,
            gameId: gameId || undefined
        }
    })
}

export async function deleteReviewService(id) {
    const review = await prisma.review.delete({
        where: { id }
    })

    await updateGameRating(review.gameId)

    return review
}

export async function updateReviewService(id, { rating, comment }) {
    if(rating > 10 || rating < 0){
        throw new Error("Insira uma nota válida")
    }
    
    const review = await prisma.review.update({
        where: { id },
        data: { rating, comment }
    })

    await updateGameRating(review.gameId)

    return review
}

async function updateGameRating(gameId) {
    const avg = await prisma.review.aggregate({
        where: { gameId },
        _avg: { rating: true }
    })

    await prisma.game.update({
        where: { id: gameId },
        data: { averageRating: avg._avg.rating }
    })
}