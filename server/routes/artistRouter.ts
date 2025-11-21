import {Router} from 'express'
import artistController from '../controllers/artistController.ts'

const router = Router()

router.get('/', artistController.getAll)
router.post('/', artistController.create)
router.delete('/:id', artistController.delete)
router.patch('/:id', artistController.update)

export default router

