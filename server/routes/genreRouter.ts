import {Router} from 'express'
import genreController from '../controllers/genreController.ts'

const router = Router()

router.get('/', genreController.getAll)
router.post('/', genreController.create)
router.delete('/:id', genreController.delete)
router.patch('/:id', genreController.update)

export default router