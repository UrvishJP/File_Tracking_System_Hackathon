const mongoose=require('mongoose');

require('dotenv').config({path:'./config.env'});

const app=require('./app');

mongoose.connect('mongodb+srv://milanPadhariya:3dZxGhmCFsl3MEud@cluster0.8wq7upp.mongodb.net/dataModel?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('connected to mongodb')).catch(err=>{console.log('error: ',err)});

const port=4000;

app.listen(port, ()=>
{
    console.log('server started on port '+ port +' .....');
});