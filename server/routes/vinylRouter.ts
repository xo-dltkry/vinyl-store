import {Router} from 'express'
import vinylController from '../controllers/vinylController.ts'
import { roleMiddleware } from '../middlewares/checkRoleMiddleware.ts'

const router = Router()

router.get('/', vinylController.getAll)
router.get('/:id', vinylController.getOne)
router.post('/', roleMiddleware('ADMIN'), vinylController.create)
router.delete('/:id', roleMiddleware('ADMIN'), vinylController.delete)
router.patch('/:id', roleMiddleware('ADMIN'), vinylController.update)

export default router