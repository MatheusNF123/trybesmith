import { Request, Response, NextFunction } from 'express';
import CustomError from '../helpers/CustomError';
import validateBody, { joiValidateBodyProducts, joiValidateBodyUsers } from './Schema/JOIValidate';

const validateLogin = (req: Request, _res: Response, next:NextFunction) => {
  const { error } = validateBody(req.body);
  if (error) throw new CustomError(error.message, 400);
  
  next();
};

const validateBodyProduct = (req: Request, _res: Response, next:NextFunction) => {
  const { error } = joiValidateBodyProducts(req.body);
  
  if (error?.message.includes('is required')) throw new CustomError(error.message, 400);
  if (error) throw new CustomError(error.message, 422);
  
  next();
};

const validateBodyProductUsers = (req: Request, _res: Response, next:NextFunction) => {
  const { error } = joiValidateBodyUsers(req.body);
  
  if (error?.message.includes('is required')) throw new CustomError(error.message, 400);
  if (error) throw new CustomError(error.message, 422);
  
  next();
};

export { validateBodyProduct, validateBodyProductUsers };

export default validateLogin;