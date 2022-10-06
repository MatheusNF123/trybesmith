import 'express-async-errors';
import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  create = async (req: Request, res: Response): Promise<void> => {
    const produto = await this.service.create(req.body);
    res.status(201).json(produto);
  };

  findAll = async (_req: Request, res: Response): Promise<void> => {
    const produtos = await this.service.findAll();
    res.status(200).json(produtos);
  };
}