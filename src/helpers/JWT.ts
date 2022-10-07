import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IToken } from '../interfaces';
// import CustomError from './CustomError';

dotenv.config();

const secretKey = process.env.JWT_SECRET || 'secret';

const jwtConfig = {
  expiresIn: '20h',
};

export default class Token {
  generateToken = (payload: IToken): string => {
    const token = jwt.sign(payload, secretKey, jwtConfig);
    return token;
  };
}