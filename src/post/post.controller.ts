import {Request,Response,NextFunction} from 'express';
import { getPostList } from './post.service';

/**
 * posts list
 */
export const index=(request:Request, response:Response,next:NextFunction) => {
  if(request.headers.authorization!=='Token'){
    return next(new Error('Authorization token required'));
  }
  const postList=getPostList();
  response.send(postList)
}