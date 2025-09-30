import { Request, Response, NextFunction } from 'express';

/**
 * log url
 */
export const requestUrl = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log(request.url);
  next();
};

/**
 * default error handler
 */
export const defaultErrorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction,
) => {

  if(error.message){
    console.log('error', error.message);
  }

  let statusCode: number;
  let message: string;

  /**
   * handle an error
   */
  switch (error.message) {
    case "name required":
      statusCode=400;
      message = "Name is required";
      break;
    case "password required":
      statusCode=400;
      message = "Password is required";
      break;
    case 'user already exists':
      statusCode=409;
      message = "user name already exists";
      break;
    case "user does not exists":
      statusCode=400;
      message = "user does not exists";
      break;
    case "password not match":
      statusCode=400;
      message = "password not match";
      break;
    case 'un_authorized':
      statusCode=401;
      message = "please login";
      break;
    default:
      statusCode = 500;
      message = 'Something went wrong';
      break;
  }
  response.status(statusCode).send({ message });
};
