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

        currentBranch:
        {
            type:String,
            enum:{
                values:['Revenue','Panchayat','Development','Construction','Irrigation','Statistics','Health','Education','Animal Husbandry','Social welfare','Co-Operation','Agriculture','ICDS','Family Welfare','Ayurveda','Malaria','Accounting','Establishment','General','Mission Mangalam','MGNREGA','IRD','Free Period','SBM','Other'], 
                message:'Enter valid Department',
            }
        },

        currentOffice:
        {
            type:String,
        },

        currentUserId:{
            type:String
        },

        currentUserName:{
            type:String
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
                message:'Enter a valid Mode(Digital or Physical)'
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
        },

        file:{
            type:String
        },

        status:{
            type:String,
            enum:{
                values:['In Process','Closed'],
                message:'Enter a valid file status (In Process or Closed)'
            },
            default:'In Process'
        }
    }
)

const File = mongoose.model('File',fileSchema);
module.exports=File;