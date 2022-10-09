import 'express-async-errors';
import { Request, Response } from 'express';
import OrderService from '../services/orders.service';
import { UserResquest } from '../interfaces';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  findAll = async (_req: Request, res: Response): Promise<void> => {
    const produtos = await this.service.findAll();
    res.status(200).json(produtos);
  };

  createOrder = async (req: UserResquest, res: Response): Promise<void> => {
    const { productsIds } = req.body;
    const id = req.user?.id as number;
    const produtos = await this.service.createNewOrder(productsIds, id);
    res.status(201).json(produtos);
  };
}