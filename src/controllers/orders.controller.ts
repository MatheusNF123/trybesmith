import 'express-async-errors';
import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  findAll = async (_req: Request, res: Response): Promise<void> => {
    const produtos = await this.service.findAll();
    res.status(200).json(produtos);
  };
}