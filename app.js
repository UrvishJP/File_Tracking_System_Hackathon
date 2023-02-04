const path=require('path');
const express=require('express');
const morgan=require('morgan');
const bodyParser = require('body-parser');
const userRoute = require('./route/userRoutes');
const fileRoute=require('./route/fileRoutes');
const deskRoute=require('./route/deskRoutes');
const viewRoute=require('./route/viewRoutes');
const cookieParser = require('cookie-parser');

const app=express();

app.set('view engine', 'pug');
app.set('views',path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(cookieParser())
app.use(bodyParser.json());

app.use('/', viewRoute);
app.use('/api/users', userRoute);
app.use('/api/files', fileRoute);
app.use('/api/desks', deskRoute);

module.exports=app;