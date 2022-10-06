import { Request, Response, NextFunction } from 'express';
import CustomError from '../helpers/CustomError';
import validateBody from './Schema/JOIValidate';

const validateLogin = (req: Request, _res: Response, next:NextFunction) => {
  console.log('chegou no middleware de validar login');
  
  const { error } = validateBody(req.body);
  if (error) throw new CustomError(error.message, 400);
  console.log('saiu do if');
  
  next();
};

export default validateLogin;