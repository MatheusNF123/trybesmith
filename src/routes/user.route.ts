import { Router } from 'express';
import UserController from '../controllers/users.controller';
// import validateLogin from '../middlewares/validateBody';

const router = Router();

const userController = new UserController();

router.post('/', userController.create);
// router.post('/login', validateLogin, userController.findLogin);

export default router;