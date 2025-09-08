import express, { Router } from 'express';
import * as authController from './auth.controller';
import {validateLoginData} from './auth.middleware';

const router:Router = express.Router();

/**
 * login
 */
router.post('/login',validateLoginData, authController.login);

/**
 * export router
 */
export default router;