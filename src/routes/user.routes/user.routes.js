import express from 'express';
const userRoutes = express.Router();

//Importing Controllers
import { getAllEmployees,getEmployeeReview,dashboard,postEmployeeReview, getMyRatings } from '../../controller/user.controller/user.controller.js';


userRoutes.get('/', dashboard);

userRoutes.get('/employees',getAllEmployees );

userRoutes.get('/ratings', getMyRatings);
userRoutes.post('/review',postEmployeeReview );
//has to put this in last;
userRoutes.get('/review/:id', getEmployeeReview);

export default userRoutes;