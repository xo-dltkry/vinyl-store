import {Router} from 'express'
import artistRouter from './artistRouter.ts'
import genreRouter from './genreRouter.ts'
import vinylRouter from './vinylRouter.ts'
import userRouter from './userRouter.ts'

const router = Router()

router.use('/user', userRouter)
router.use('/artist', artistRouter)
router.use('/genre', genreRouter)
router.use('/vinyl', vinylRouter)

export default router


