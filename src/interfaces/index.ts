export interface IProduct {
  id?: number,
  name: string,
  amount: string
}

export interface IUser {
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
  id: number,
  userId: string,
  productsIds: number[]
}