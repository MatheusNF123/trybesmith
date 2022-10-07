import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import { validateBodyProductId } from '../middlewares/validateBody';
import auth from '../middlewares/auth';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.findAll);
router.post('/', auth, validateBodyProductId, orderController.createOrder);
// router.get('/', productController.findAll);

export default router;