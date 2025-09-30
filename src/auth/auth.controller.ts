import { Request, Response ,NextFunction} from 'express';
import {singToken} from './auth.service';

/**
 * login
 */
export const login = async (req:Request,res:Response,next:NextFunction)=>{
//prepare data
  const {user:{id,name}} = req.body;

  const payload ={id,name};

  try{
    //sign token
    const token = singToken({payload});

    //response
    res.send({id,name,token});
  }catch (e) {
    next(e);
  }
  
}

/**
 * Verify Login
 */
export const validate = (req:Request,res:Response,next:NextFunction)=>{
  console.log(req.user);
  res.sendStatus(200);
}