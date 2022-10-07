import { Router } from 'express';
import UserController from '../controllers/users.controller';
import { validateBodyProductUsers } from '../middlewares/validateBody';

const router = Router();

const userController = new UserController();

router.post('/', validateBodyProductUsers, userController.create);

export default router;