import {Router} from 'express'
import artistController from '../controllers/artistController.ts'
import { roleMiddleware } from '../middlewares/checkRoleMiddleware.ts'

const router = Router()

router.get('/', artistController.getAll)
router.post('/', roleMiddleware('ADMIN'), artistController.create)
router.delete('/:id', roleMiddleware('ADMIN'), artistController.delete)
router.patch('/:id', roleMiddleware('ADMIN'), artistController.update)

export default router

