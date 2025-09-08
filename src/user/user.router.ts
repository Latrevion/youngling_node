import express, { Router } from 'express';
import * as userController from './user.controller';
import  {validateUserData} from './user.middleware';

const router:Router = express.Router();

/**
 * create user
 */
router.post('/users',validateUserData,userController.store);

/**
 * export router
 */
export default router ;