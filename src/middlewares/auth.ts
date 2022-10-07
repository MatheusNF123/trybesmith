import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import CustomError from '../helpers/CustomError';
// import CustomError from './CustomError';

dotenv.config();

const secretKey = process.env.JWT_SECRET || 'secret';

const authToken = (req:Request, _res:Response, next:NextFunction): void => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new CustomError('Token not found', 401);
  }

  try {
    jwt.verify(authorization, secretKey);
        
    // req.params = verificaToken;
    next();
  } catch (error) {
    throw new CustomError('Invalid token', 401);
  }
};

export default authToken;