const mongoose=require('mongoose');
const validator=require('validator');

const timelineSchema=new mongoose.Schema(
    {
        fileId:
        {
            type:String,
            required:[true,'Enter file ID :']
        },
         
        status:
        {
            type:String,
            enum:{
                values:['Approved','Rejected'], 
                message:'Enter valid Status(Approved or Rejected)',
            }
        },

        dateOfReceiving:
        {
            type:Date,
            validate:[validator.isDate,'please type correct Date ']
        },
    
        dateOfForwarding:
        {
            type:Date,
            validate:[validator.isDate,'please type correct Date ']
        },

        remarks:
        {
            type:String,
        },

        desk:
        {
            type: mongoose.Schema.ObjectId,
            ref:'Desk'
        }
        
    }
)

const Timeline = mongoose.model('Timeline',timelineSchema);
module.exports=Timeline;