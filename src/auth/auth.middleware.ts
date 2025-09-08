import  {Request, Response,NextFunction} from 'express'
import * as userService from '../user/user.service';


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
  const user =await userService.getUserByName(name);
  if(!user)return next(new Error('user does not exists'));

  next();
}
