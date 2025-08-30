import {Request,Response,NextFunction} from 'express';
import { getPostList,createPost } from './post.service';

/**
 * posts list
 */
export const index=async (request:Request, response:Response,next:NextFunction) => {
  try {

  const postList=await getPostList();
  response.send(postList)
  }catch (err){
    next(err);
  }
}

/**
 * create content
 */
export const store= async (request:Request,response:Response,next:NextFunction)=>{
    const {title,content }= request.body;

    //create post
  try {
     const data= await createPost({title,content});
     response.status(201).send(data);
  }catch (err){
    next(err);
  }

}