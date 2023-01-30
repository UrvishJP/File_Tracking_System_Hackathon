const User=require('./../modal/userModel');

exports.createNewUser=async (req,res)=>
{
    try{
        const newUser= await User.create(req.body);
        res.status(201);
        res.json(
            {
                status:"new user creted",
                data:
                {
                    newUser
                }
            }
        )
    }
    catch(err)
    {
        console.log(err);
        res.json(
            {
                status:"fail",
                erroe:(err)
            }
        )
    }
}

exports.assignDesk=async(req,res)=>{
    try{
        // console.log(req.params.id);
        // console.log(req.body);
        var body={currentDesk:`${req.params.id}`};
        var userId=req.body.user;
        // console.log(userId);
        // console.log(body);
        const doc= await User.findByIdAndUpdate(userId,body,
            {
                new:true,
                runValidators:true
            });
    }
    catch(error)
    {
        console.log(err);
    } 
}

exports.getAllUsers=async(req,res)=> 
{
    const docs=await User.find().populate({
        path:'currentDesk'
    });
    try{
        res.status(200)
        .json(
            {
                NoOfResults:docs.length,
                data:{
                    docs
                }
            }
        )
    }
    catch(error)
    {
        res.json(error)
    }
}
