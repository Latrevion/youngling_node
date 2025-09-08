import { connection } from '../app/database/mysql';
import { UserModel } from './user.model';
import { ResultSetHeader } from 'mysql2';


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

  //provider data
  return data as ResultSetHeader;
};
