import {Request,Response,NextFunction} from 'express';
import * as userService from './user.service';


/**
 * Validate user data
 */
export const validateUserData = async (req: Request, res: Response, next: NextFunction) => {
  console.log('validateUserData');

  //prepare data
  const {name ,password} = req.body;

  //Validate required data
  if(!name)return next(new Error('name required'));
  if(!password) return next(new Error('password required'));

  //Validate user name
  const user =await userService.getUserByName(name);
  if(user)return next(new Error('user already exists'));

  next();
}