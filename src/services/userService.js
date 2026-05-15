import { prisma } from '../../prisma/prismaClient.js'
import bcrypt from 'bcrypt'

export async function createUserService({ email, name, password }) {
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: { email, name, password: hashedPassword }
    })
    return user
}

export async function getUsersService({ id, name }) {
    return prisma.user.findMany({
        where: {
            id: id || undefined,
            name: name || undefined
        }
    })
}

export async function deleteUserService(id, requestingUserId) {
    if (id !== requestingUserId) {
        throw new Error('Você não tem permissão para deletar este usuário')
    }

    await prisma.user.delete({
        where: { id }
    })
}

export async function updateUserService(id, requestingUserId, { name, password }) {
    if (id !== requestingUserId) {
        throw new Error('Você não tem permissão para atualizar este usuário')
    }

    return prisma.user.update({
        where: { id },
        data: { name, password }
    })
}