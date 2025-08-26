import express from "express";
import postRouter from '../post/post.router';
import {defaultErrorHandler} from './app.middleware';

/**
 * create app
 */
const app:express.Express = express();


/**
 * handler json
 */
app.use(express.json());

/**
 * router
 */
app.use(postRouter);

/**
 * default error handler
 */
app.use(defaultErrorHandler);


/**
 * export app
 */
export default app;