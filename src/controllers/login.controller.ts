import 'express-async-errors';
import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  service: LoginService;

  constructor() {
    this.service = new LoginService();
  }
 
  findLogin = async (req: Request, res: Response): Promise<void> => {
    const token = await this.service.findLogin(req.body);
    res.status(200).json({ token });
  };
}