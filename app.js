// const path=require('path');
const express=require('express');
const morgan=require('morgan');
const bodyParser = require('body-parser');
const userRoute = require('./route/userRoutes');
const fileRoute=require('./route/fileRoutes');
const deskRoute=require('./route/deskRoutes');

const app=express();

// app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cookieParser());

app.use('/api/users', userRoute);
app.use('/api/files', fileRoute);
app.use('/api/desks', deskRoute);

module.exports=app;