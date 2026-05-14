import { createGameService, getGamesService, deleteGameService, updateGameService } from '../services/gameService.js'

export async function createGame(req, res) {
    const game = await createGameService(req.body)
    res.status(201).json(game)
}

export async function getGames(req, res) {
    const{ id, title, genre } = req.query

    const Games = await getGamesService({ id, title, genre })
    res.status(200).json(Games)
}

export async function deleteGame(req, res){
    const { id } = req.params

    await deleteGameService(id)

    res.status(200).json({message: 'Game deletado com sucesso!'})
}

export async function updateGame(req, res){
    const { id } = req.params

    await updateGameService(id, req.body)

    res.status(201).json(req.body)
}