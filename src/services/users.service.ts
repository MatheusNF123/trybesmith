// import CustomError from '../helpers/CustomError';
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

  // async findLogin(body: ILogin): Promise<string> {
  //   const { username } = body;
  //   const user = await this.model.findLogin(body);
  //   if (user.username) {
  //     throw new CustomError('Username or password invalid', 401);
  //   }
  //   const token = new Token().generateToken({ username, id: user.id });
  //   return token;
  // }
}