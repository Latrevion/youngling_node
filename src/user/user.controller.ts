import  {Request,Response,NextFunction} from 'express';
import{UserModel} from './user.model';
import * as userService from './user.service';


/**
 * create user
 */
export const store = async (request:Request,response:Response,next:NextFunction)=>{
  //Prepare the data
  const {name,password} = request.body;

  //create user
  try {
    const data = await userService.createUser({name,password});
    response.status(201).send(data);
  }catch (e) {
    next(e);
  }

}