import { /* Request */ Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import CustomError from '../helpers/CustomError';
import { UserResquest } from '../interfaces';

dotenv.config();

const secretKey = process.env.JWT_SECRET || 'secret';

const authToken = (req:UserResquest, _res:Response, next:NextFunction): void => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new CustomError('Token not found', 401);
  }

  try {
    const verificaToken = jwt.verify(authorization, secretKey);
        
    req.user = verificaToken as JwtPayload;
    
    next();
  } catch (error) {
    throw new CustomError('Invalid token', 401);
  }
};

export default authToken;