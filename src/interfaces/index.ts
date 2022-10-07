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

export interface IPayload {
  username: string,
  id: number,
  iat: number,
  exp: number
}

export interface IProductId {
  productsIds: number[]
}

export interface ITokenPayload {
  id: number,
}
