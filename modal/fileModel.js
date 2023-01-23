const mongoose=require('mongoose');
const validator=require('validator');

const fileSchema=new mongoose.Schema(
    {
        fileId:
        {
            type:String,
        },
         
        subject:
        {
            type:String,
        },

        dateOfLastForward:
        {
            type:Date,
            validate:[validator.isDate,'enter a valid date']
        },

        currentDesk:
        {
            type: mongoose.Schema.ObjectId,
            ref:'Desk'
        },

        previousDesk:
        {
            type: mongoose.Schema.ObjectId,
            ref:'Desk'
        },

        timeline:[
            {
                type: mongoose.Schema.ObjectId,
                ref:'Timeline'
            }
        ],

        mode:
        {
            type:String,
            enum:{
                values:['Physical','Digital'],
                message:'Enter a valid Mode(Digitalor Physical)'
            }
        },

        creationDate:{
            type:Date,
            validate:[validator.isDate,'enter a valid creation date']
        },

        expectedDate:
        {
            type:Date,
            validate:[validator.isDate,'enter a valid expected date']
        },

        delayed:{
            type:Boolean
        },

        timeTakenInDays:{
            type:Number
        },

        applicantDetails:
        {
            name:String,
            mobileNumber:Number,
            email:{
                type:String,
                validate:[validator.isEmail,'enter a valid Email Id']
            }
        }
    }
)

const File = mongoose.model('File',fileSchema);
module.exports=File;