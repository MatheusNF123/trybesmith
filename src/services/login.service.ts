import CustomError from '../helpers/CustomError';
import Token from '../helpers/JWT';
import { ILogin } from '../interfaces';
import LoginModel from '../models/login.model';

export default class LoginService {
  model: LoginModel;

  constructor() {
    this.model = new LoginModel();
  }

  async findLogin(body: ILogin): Promise<string> {
    const { username } = body;
    const user = await this.model.findLogin(body);
    if (!user) {
      throw new CustomError('Username or password invalid', 401);
    }
    const token = new Token().generateToken({ username, id: user.id });
    return token;
  }
}