import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

  async findAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products'; 
    const [products] = await this.conn.execute<RowDataPacket[] & IProduct[] >(query);
    return products;
  }

  public async updateProduct(idProduct: number, idOrder: number): Promise<number> {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?'; 
    const [{ affectedRows }] = await this
      .conn.execute<ResultSetHeader>(query, [idOrder, idProduct]);
    return affectedRows;
  }
}