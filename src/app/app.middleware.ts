import {Request,Response,NextFunction} from 'express';

/**
 * log url
 */
export const requestUrl = (request:Request,respose:Response,next:NextFunction)=>{
  console.log(request.url);
  next();
}

/**
 * default error handler
 */
export const defaultErrorHandler=(error:any,request:Request,response:Response,next:NextFunction)=>{
  let statusCode :number
  let message:string

  /**
   * handle an error
   */
  switch (error.message){
    default:
      statusCode = 500;
      message = 'Something went wrong';
      break;
  }
  response.status(statusCode).send({message})

}
