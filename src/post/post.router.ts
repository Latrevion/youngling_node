import  express from "express";
import * as postController from '../post/post.controller'
import {requestUrl} from '../app/app.middleware';
import {authGuard} from '../auth/auth.middleware';

const router:express.Router = express.Router();

/**
 * post list
 */
router.get('/posts',requestUrl,postController.index);


/**
 * create post
 */
router.post('/posts',authGuard,postController.store);

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