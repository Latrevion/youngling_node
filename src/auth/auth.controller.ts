import { Request, Response ,NextFunction} from 'express';

/**
 * login
 */
export const login = async (req:Request,res:Response,next:NextFunction)=>{
//prepare data
  const {name,password} = req.body;

  //response
  res.send({message:`welcome,${name}`});
}