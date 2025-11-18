import {Router} from 'express'
import vinylController from '../controllers/vinylController'

const router = Router()

router.get('/', vinylController.getAll)
router.get('/:id', vinylController.getOne)
router.post('/', vinylController.create)
router.delete('/', vinylController.delete)
router.patch('/', vinylController.update)

export default router