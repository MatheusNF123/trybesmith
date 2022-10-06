import { Pool, ResultSetHeader /* RowDataPacket */ } from 'mysql2/promise';
import { IUser/* ILogin */ } from '../interfaces/index';
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

  // async findLogin(body: ILogin): Promise<IUser> {
  //   const { username, password } = body;
  //   const query = 'SELECT INTO Trybesmith.Users WHERE username = ? and password = ? '; 
  //   const [[user]] = await this
  //     .conn.execute<RowDataPacket[] & IUser[] >(query, [username, password]);
  //   return user;
  // }
}