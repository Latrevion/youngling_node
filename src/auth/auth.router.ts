import express, { Router } from 'express';
import * as authController from './auth.controller';
import { authGuard, validateLoginData } from './auth.middleware';

const router:Router = express.Router();

/**
 * login
 */
router.post('/login',validateLoginData, authController.login);

/**
 * validate login
 *
 */
router.post('/auth/validate',authGuard,authController.validate);

/**
 * export router
 */
export default router;