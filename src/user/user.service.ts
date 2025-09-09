import { connection } from '../app/database/mysql';
import { UserModel } from './user.model';
import { ResultSetHeader ,RowDataPacket } from 'mysql2';


/**
 * create user
 */
export const createUser = async (user: UserModel): Promise<ResultSetHeader> => {
  //Prepare for a query
  const statement = `
    INSERT INTO user
    SET ?
  `;

  //Execute the query
  const [data] = await  connection.promise().query(statement,user);

  //provide data
  return data as ResultSetHeader;
};


// Define user type
export interface User extends RowDataPacket {
  id: number;
  name: string;
}

/**
 * Find user by username
 */
interface GetUserOptions{
  password?:boolean
}

export  const getUserByName = async (name:string,options:GetUserOptions={}): Promise< User|null> => {
  const {password} = options;


  // //Prepare for a query
  const statement = `
  SELECT id, name ${password?',password':''}
  FROM user
  WHERE name = ?
  `;

  //Execute the query
  const [rows] = await  connection.promise().query<User[]>(statement,name);

  //provide data
  return rows.length > 0 ? rows[0] : null;
}