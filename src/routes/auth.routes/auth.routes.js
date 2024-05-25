import express from 'express';
import {getSignup, postSignup, getLogin, postLogin,logout } from '../../controller/auth.controller/auth.controller.js';
import { jwtAuth } from '../../middlewares/jwtAuthentication.js';
import { adminAuth } from '../../middlewares/adminAuthentication.js';
const authRoutes = express.Router();

// authRoutes.get('/', getSignup);
authRoutes.get('/', getLogin)
authRoutes.post('/', postLogin );

authRoutes.get('/signup',jwtAuth,adminAuth, getSignup);
authRoutes.post('/signup',jwtAuth,adminAuth, postSignup);

authRoutes.get('/logout',logout);

export default authRoutes;