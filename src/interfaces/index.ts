import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface IProduct {
  id?: number,
  name: string,
  amount: string
}

export interface IUser {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password?: string
}

export interface IToken {
  id?: number,
  username: string
}
export interface IOrder {
  id?: number,
  userId: string | number,
  productsIds: number[]
}

export interface ILogin {
  username: string,
  password: string
}

export interface IProductId {
  productsIds: number[]
}

// export interface IDecode {
//   id: number,
//   username: string
// }
export interface UserResquest extends Request {
  user?: JwtPayload,
}

export interface TypedRequestBody<T> extends Express.Request {
  user: T
}