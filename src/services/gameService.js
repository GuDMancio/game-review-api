import { prisma } from '../../prisma/prismaClient.js'

export async function createGameService({ title, genre }) {
    return prisma.game.create({
        data: { title, genre }
    })
}

export async function getGamesService({id, title, genre}) {
    return prisma.game.findMany({
        where: {
            title: title || undefined,
            id:    id    || undefined,
            genre: genre || undefined
        }
    })
}

export async function deleteGameService(id) {
    return prisma.game.delete({
        where: { id }
    })
}

export async function updateGameService(id, { title, genre }) {
    return prisma.game.update({
        where: { id },
        data: { title, genre }
    })
}