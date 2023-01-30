const mongoose=require('mongoose');
const validator=require('validator');

const userSchema=new mongoose.Schema(
    {
        role:
        {
            type:String,
            enum:{
                values:['User','Admin'],
                message:'the role should be either User or Admin only'
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
            type:Boolean,
            default:false
        }
    }
)

const User = mongoose.model('User',userSchema);
module.exports=User;