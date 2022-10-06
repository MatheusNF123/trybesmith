import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/index';
import connection from './connection';

export default class OderModel {
  conn: Pool;

  constructor() {
    this.conn = connection;
  }

  async findAll(): Promise<IOrder[]> {
    const query = `SELECT ord.id, ord.userId, JSON_ARRAYAGG(pr.id) as productsIds
    FROM Trybesmith.Orders as ord
    JOIN Trybesmith.Users as us ON ord.userId = us.id
    JOIN Trybesmith.Products as pr ON pr.orderId = ord.id
    group by orderId`; 
    const [orders] = await this.conn.execute<RowDataPacket[] & IOrder[] >(query);
    return orders;
  }
}