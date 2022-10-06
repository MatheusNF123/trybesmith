import { IProduct } from '../interfaces/index';
import ProductModel from '../models/products.model';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  async create(body:IProduct): Promise<IProduct> {
    const produto = await this.model.create(body);
    return produto;
  }
}