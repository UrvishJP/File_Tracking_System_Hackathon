const mongoose=require('mongoose');
const validator=require('validator');

const userSchema=new mongoose.Schema(
    {
        role:
        {
            type:String,
            enum:{
                values:['user','admin'],
                message:'enter valid role'
            }
        },
        name:
        {
            type:String,
        },
        email:
        {
            type:String,
            validate:[validator.isEmail,'please enter valid email address']
        },
        password: {
            type: String,
            required: [true, 'Please provide a password'],
            minlength: 8
          },
        currentDesk:
        {
            type: mongoose.Schema.ObjectId,
            ref:'Desk'
        },
        onDesk:
        {
            type:Boolean
        }
    }
)

const User = mongoose.model('User',userSchema);
module.exports=User;