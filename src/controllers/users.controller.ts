import 'express-async-errors';
import { Request, Response } from 'express';
import UserService from '../services/users.service';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  create = async (req: Request, res: Response): Promise<void> => {
    const token = await this.service.create(req.body);
    res.status(201).json({ token });
  };

  // findAll = async (_req: Request, res: Response): Promise<void> => {
  //   const produtos = await this.service.findAll();
  //   res.status(200).json(produtos);
  // };
}