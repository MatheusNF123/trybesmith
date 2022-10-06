import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/index';
import connection from './connection';

export default class ProductModel {
  conn: Pool;

  constructor() {
    this.conn = connection;
  }

  async create(body:IProduct): Promise<IProduct> {
    const { name, amount } = body;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) values (?,?)'; 
    const [{ insertId }] = await this.conn.execute<ResultSetHeader>(query, [name, amount]);
    return { id: insertId, ...body };
  }
}