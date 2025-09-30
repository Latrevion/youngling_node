import  {Request, Response,NextFunction} from 'express'
import * as userService from '../user/user.service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {PUBLIC_KEY} from '../app/app.config';
import { TokenPayload } from './auth.interface';

/**
 * Validate user data
 */
export const validateLoginData = async (req: Request, res: Response, next: NextFunction) => {
  console.log('validate Login  Data');

  //prepare data
  const {name ,password} = req.body;

  //Validate required data
  if(!name)return next(new Error('name required'));
  if(!password) return next(new Error('password required'));

  //Validate user name
  const user =await userService.getUserByName(name,{password:true});
  if(!user)return next(new Error('user does not exists'));

  //Validate user password
  const matched = await bcrypt.compare(password,user.password)
  if(!matched) return next(new Error('password not match'));

  //Include the user in the request body
  req.body.user = user;

  next();
}


/**
 * Authenticate the user
 */
export const authGuard = (req: Request, res: Response, next: NextFunction) => {
  console.log('Authenticate the user');

  try {
    //extract Authorization
    const authorization  = req.header('Authorization');
    if(!authorization)throw new Error();

    //extract jwt token
    const token  = authorization.replace('Bearer ', '');
    if(!token)throw new Error();

    //validate the token
    // @ts-ignore
    const decoded=jwt.verify(token,PUBLIC_KEY,{
      algorithms:['RS256']
    })

    //Attach the current user to the request.
    req.user = decoded as TokenPayload;

    next();
  }catch (e) {
     next(new Error('un_authorized'));
  }

}
