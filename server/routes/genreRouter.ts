import {Router} from 'express'
import genreController from '../controllers/genreController.ts'
import { roleMiddleware } from '../middlewares/checkRoleMiddleware.ts'

const router = Router()

router.get('/', genreController.getAll)
router.post('/', roleMiddleware('ADMIN'), genreController.create)
router.delete('/:id', roleMiddleware('ADMIN'), genreController.delete)
router.patch('/:id', roleMiddleware('ADMIN'), genreController.update)

export default router