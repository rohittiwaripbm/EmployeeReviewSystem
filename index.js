import './dotenv.js'
import express from 'express';
import ejslayout from 'express-ejs-layouts';
import path from 'path';
import cookieParser from 'cookie-parser';

//just checking mongodbConnection have to remove all this once work
// import { executeDbCommand } from './config/DbConfig.js';
//Importing jwtAuthentication
import { jwtAuth } from './src/middlewares/jwtAuthentication.js';
import { adminAuth } from './src/middlewares/adminAuthentication.js';

//Importing routes
import authRoutes from './src/routes/auth.routes/auth.routes.js';
import userRoutes from './src/routes/user.routes/user.routes.js';
import adminRoutes from './src/routes/admin.routes/admin.routes.js';

const server = express();

server.use(cookieParser());


server.use('/static', express.static(path.join(path.resolve(),'public')));
// server.use(express.static('public'))
// import { userModel } from './src/model/auth.model/user.model.js';

//setting view Engine
server.use(ejslayout);
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'));
server.use(express.urlencoded({extended:true}));
//server.use(express.json()); // only works with api




//Handling authRoutes
server.use('/', authRoutes);

//Handling userRoutes
server.use('/user',jwtAuth, userRoutes);

//Handling Admin Routes
server.use('/admin', jwtAuth, adminAuth, adminRoutes);

export default server;