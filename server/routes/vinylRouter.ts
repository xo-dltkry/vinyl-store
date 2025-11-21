import {Router} from 'express'
import vinylController from '../controllers/vinylController.ts'

const router = Router()

router.get('/', vinylController.getAll)
router.get('/:id', vinylController.getOne)
router.post('/', vinylController.create)
router.delete('/:id', vinylController.delete)
router.patch('/:id', vinylController.update)

export default router