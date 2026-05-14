import { loginService } from '../services/authService.js'

export async function login(req, res){
    try {
        const result = await loginService(req.body)
        res.status(200).json(result)
    } catch(error){
        res.status(401).jason({message: error.message})
    }
}