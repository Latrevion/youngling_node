import {Request,Response,NextFunction} from 'express';
import * as userService from './user.service';
import bcrypt from 'bcrypt';


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

/**
 * hash password
 */
export const hashPassword = async (req: Request, res: Response, next: NextFunction) => {
  //prepare data
  const {password} = req.body;

  //hash password
  req.body.password=await bcrypt.hash(password, 10);

  //next
  next();
}
