import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import { validateBodyProduct } from '../middlewares/validateBody';

const router = Router();

const productController = new ProductController();

router.post('/', validateBodyProduct, productController.create);
router.get('/', productController.findAll);

export default router;