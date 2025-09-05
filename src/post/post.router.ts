import  express from "express";
import * as postController from '../post/post.controller'
import {requestUrl} from '../app/app.middleware';

const router:express.Router = express.Router();

/**
 * post list
 */
router.get('/posts',requestUrl,postController.index);


/**
 * create post
 */
router.post('/posts',postController.store);

/**
 * update post
 */
router.patch('/posts/:postId',postController.update)

/**
 * delete post
 */
router.delete('/posts/:postId',postController.destroy);

/**
 * export router
 */
export default router;