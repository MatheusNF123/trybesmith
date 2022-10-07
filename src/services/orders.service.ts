// import Token from '../helpers/JWT';
import { IOrder } from '../interfaces/index';
import OrderModel from '../models/orders.model';
import ProductModel from '../models/products.model';

export default class OrderService {
  model: OrderModel;

  modelP: ProductModel;

  constructor() {
    this.model = new OrderModel();
    this.modelP = new ProductModel();
  }

  async findAll(): Promise<IOrder[]> {
    const orders = await this.model.findAll();
    return orders;
  }

  async createNewOrder(productsIds: number[], id: number): Promise<IOrder> {
    const idOrder = await this.model.create(id);
    const allProducts = productsIds.map((el) => this.modelP.updateProduct(el, idOrder));
    await Promise.all(allProducts);
    return { userId: id, productsIds };
  }
}