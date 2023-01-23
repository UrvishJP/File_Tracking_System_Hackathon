const mongoose=require('mongoose');
const validator=require('validator');

const deskSchema=new mongoose.Schema(
    {
        office:
        {
            type:String,
        },
         
        branch:
        {
            type:String,
            enum:{
                values:['Revenue','Panchayat','Development','Construction','Irrigation','Statistics','Health','Education','Animal Husbandry','Social welfare','Co-Operation','Agriculture','ICDS','Family Welfare','Ayurveda','Malaria','Accounting','Establishment','General','Mission Mangalam','MGNREGA','IRD','Free Period','SBM','Other'], 
                message:'Enter valid Department',
            }
        },

        designation:
        {
            type:String
        },

        user:
        {
            type: mongoose.Schema.ObjectId,
            ref:'User'
        }
    }
)

const Desk = mongoose.model('Desk',deskSchema);
module.exports=Desk;