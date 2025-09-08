import express, { Router } from 'express';
import * as userController from './user.controller';

const router:Router = express.Router();

/**
 * create user
 */
router.post('/users',userController.store);

/**
 * export router
 */
export default router ;