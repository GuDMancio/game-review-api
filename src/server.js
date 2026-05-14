import express from 'express'
import userRoutes from './routes/userRoutes.js'
import gameRoutes from './routes/gameRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express()
app.use(express.json())

app.use('/user', userRoutes)
app.use('/game', gameRoutes)
app.use('/reviews', reviewRoutes)
app.use('/auth', authRoutes)

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))