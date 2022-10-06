// import Token from '../helpers/JWT';
import { IOrder } from '../interfaces/index';
import OrderModel from '../models/orders.model';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  async findAll(): Promise<IOrder[]> {
    const orders = await this.model.findAll();
    return orders;
  }
}