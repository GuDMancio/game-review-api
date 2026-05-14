import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { prisma } from '../../prisma/prismaClient.js'

export async function loginService({ email, password}){
    const user = await prisma.user.findUnique({where: { email }})

    if(!user) throw new Error("Usuário não encontrado")

    const correctPassword = await bcrypt.compare(password, user.password)

    if(!correctPassword) throw new Error("Senha incorreta")
    
    const token = jwt.sign(
        {id: user.id},
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    )

    return  { token }
}