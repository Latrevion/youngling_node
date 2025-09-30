import jwt from 'jsonwebtoken';
import {PRIVATE_KEY} from '../app/app.config';


/**
 * Issuance Info
 */
interface  SingTokenOptions{
  payload?:any;
}

export const singToken = (options:SingTokenOptions)=>{
  //payload
  const {payload} = options;

  //sign jwt
    // @ts-ignore
  const token = jwt.sign(payload,PRIVATE_KEY,{algorithm:'RS256'});

    //provide jwt
  return token;

}