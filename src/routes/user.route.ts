import { Router } from 'express';
import UserController from '../controllers/users.controller';
import { validateBodyProductUsers } from '../middlewares/validateBody';
// import validateLogin from '../middlewares/validateBody';

const router = Router();

const userController = new UserController();

router.post('/', validateBodyProductUsers, userController.create);
// router.post('/login', validateLogin, userController.findLogin);

export default router;