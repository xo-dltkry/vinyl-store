import {Router} from 'express'
import artistController from '../controllers/artistController'

const router = Router()

router.get('/', artistController.getAll)
router.post('/', artistController.create)
router.delete('/', artistController.delete)
router.patch('/', artistController.update)

export default router

