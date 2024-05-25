//have to implement user route and its middleware that only admin can access admin routes !!

import express from 'express';
import { getUsers, makeEmployeeAdmin,deleteuser,deletePage } from '../../controller/admin.controller/admin.controller.js';

const adminRoutes = express.Router();

adminRoutes.get('/', getUsers);

adminRoutes.get('/changepost/:id', makeEmployeeAdmin );
adminRoutes.get('/users',deletePage );
adminRoutes.get('/delete/:id',deleteuser);

export default adminRoutes;