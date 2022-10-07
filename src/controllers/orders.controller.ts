import 'express-async-errors';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import OrderService from '../services/orders.service';
import { ITokenPayload } from '../interfaces';

const secretKey = process.env.JWT_SECRET || 'secret';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  findAll = async (_req: Request, res: Response): Promise<void> => {
    const produtos = await this.service.findAll();
    res.status(200).json(produtos);
  };

  createOrder = async (req: Request, res: Response): Promise<void> => {
    const { productsIds } = req.body;
    const { authorization } = req.headers;
   
    const verificaToken = jwt.verify(authorization as string, secretKey) as ITokenPayload;

    const produtos = await this.service.createNewOrder(productsIds, verificaToken.id);
    res.status(201).json(produtos);
  };
}