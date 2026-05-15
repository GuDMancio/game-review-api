import { createUserService, getUsersService, deleteUserService, updateUserService } from '../services/userService.js'

export async function createUser(req, res) {
    const user = await createUserService(req.body)
    res.status(201).json(user)
}

export async function getUsers(req, res) {
    const{ id, name } = req.query

    const users = await getUsersService({id, name})
    res.status(200).json(users)
}

export async function deleteUser(req, res){
    const { id } = req.params

    await deleteUserService(id, req.userId)

    res.status(200).json({message: 'Usuário deletado com sucesso!'})
}

export async function updateUser(req, res){
    const { id } = req.params

    await updateUserService(id, req.body, req.userId)

    res.status(201).json(req.body)
}