import { connection } from '../app/database/mysql';
import { PostModel } from './post.model';
import { OkPacket, ResultSetHeader } from 'mysql2';

export interface Post {
  id: number;
  title: string;
  content: string;
  userId: number;
}

/**
 * Get a list of contents
 */
export const getPostList = async (): Promise<Post[]> => {
  const statement = `SELECT post.id, post.title, post.content, JSON_OBJECT('id', user.id, 'name', user.name) as user
                     FROM post LEFT JOIN user
                     on user.id = post.userId`;

  const [data] = await connection.promise().query(statement);

  return data as Post[];
};

/**
 * create post
 */
export const createPost = async (post: PostModel): Promise<ResultSetHeader> => {
  // Prepare for inquiries
  const statement = `
  INSERT INTO post 
  SET ?
  `;

  //execution query
  const [data] = await connection
    .promise()
    .query<ResultSetHeader>(statement, post);

  //Provide data
  return data;
};

/**
 * update post
 */
export const updatePost = async (postId: number, post: PostModel):Promise<OkPacket> => {
  //Ready to query the database
  const statement = `UPDATE post
                     SET ?
                     WHERE id = ?`;

  //Execute query
  const [data] = await connection.promise().query(statement,[post,postId]) as OkPacket[];


  //provide data
  return data;
};
