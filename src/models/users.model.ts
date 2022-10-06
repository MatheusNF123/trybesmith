import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/index';
import connection from './connection';

export default class UserModel {
  conn: Pool;

  constructor() {
    this.conn = connection;
  }

  async create(body:IUser): Promise<number> {
    const { username, classe, level, password } = body;
    const query = `
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    values (?,?,?,?)`; 
    const [{ insertId }] = await this
      .conn.execute<ResultSetHeader>(query, [username, classe, level, password]);

    return insertId;
  }

  // async findAll(): Promise<IProduct[]> {
  //   const query = 'SELECT * FROM Trybesmith.Products'; 
  //   const [products] = await this.conn.execute<RowDataPacket[] & IProduct[] >(query);
  //   return products;
  // }
}