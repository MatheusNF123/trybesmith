import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateLogin from '../middlewares/validateBody';

const router = Router();

const loginController = new LoginController();

router.post('/', validateLogin, loginController.findLogin);

export default router;