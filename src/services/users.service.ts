import Token from '../helpers/JWT';
import { IUser } from '../interfaces/index';
import UserModel from '../models/users.model';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  async create(body:IUser): Promise<string> {
    const { username } = body;
    const id = await this.model.create(body);
    const token = new Token().generateToken({ username, id });
    return token;
  }

  // async findAll(): Promise<IProduct[]> {
  //   const products = await this.model.findAll();
  //   return products;
  // }
}