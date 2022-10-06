import { Pool, RowDataPacket } from 'mysql2/promise';
import { IUser, ILogin } from '../interfaces/index';
import connection from './connection';

export default class LoginModel {
  conn: Pool;

  constructor() {
    this.conn = connection;
  }

  async findLogin(body: ILogin): Promise<IUser | undefined> {
    const { username, password } = body;
    const query = 'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?'; 
    const [[result]] = await this
      .conn.execute<RowDataPacket[] &(IUser[] | undefined)>(query, [username, password]);

    console.log(`log antes do retorno da model ${JSON.stringify(result)}`);
      
    return result;
  }
}