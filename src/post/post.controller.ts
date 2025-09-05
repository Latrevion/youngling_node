import {Request,Response,NextFunction} from 'express';
import { getPostList,createPost, updatePost } from './post.service';
import _ from 'lodash';

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

/**
 * update post
 */

export const update = async (request:Request,response:Response,next:NextFunction)=>{
//Get the post-ID
  const {postId} =request.params;

  //Get the data
   const post = _.pick(request.body,['title','content']);

  //update
  try{
    const data = await updatePost(parseInt(postId,10),post);
    response.send(data);
  }catch (e) {
    next(e);
  }
}
