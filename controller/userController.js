const User=require('./../modal/userModel');
const jwt = require('jsonwebtoken')

exports.Login = async (req,res,next) => {
try {
    // console.log('req.body');
    const {email,password,role} = req.body
    if(!email || !password ){
        res.status(200).json({
            status:"fail",
            messege : "Provide both Email and Password"
        })
        return next();
    }
    const isuser = await User.findOne({email}).select("+password")
    // console.log(isuser.id);
   

    // const userpassword =  isuser.password
    if(!isuser || (password!=isuser.password)){
        res.status(200).json({
            status:"fail",
            messege:"user and password does not match"
        })
        return next();
    }

    if(isuser.role != role){
            res.status(200).json(
            {
                status:"fail",
                messege:"incorrect role"
            }
        )
        return next();
    }
 
    const token = jwt.sign({ id:isuser._id },process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES
      })
      const cookieOptions = {
        expiresIn : new Date(Date.now()+ process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 *60 * 1000),
        httpOnly:true
      }
      res.cookie('jwt', token, cookieOptions);
      res.status(201).json({
        status: 'success',
        token,
        data: {
          isuser
        }
      })
 next()

} catch (error) {
    res.status(400).json({
        status:"Failed",
        err:error
    })
}

}
exports.isLoggedIn = async (req, res, next) => {
  
    if(req.cookies.jwt){
    //    console.log("hey");
      try {
        const decoded =  jwt.verify(
          req.cookies.jwt,
          process.env.JWT_SECRET
        );
  
        const currentUser = await User.findById(decoded.id);
      
        if (!currentUser) {
          return next();
        }
  
        res.locals.user = currentUser;
        req.user=currentUser;
        return next();
      }
       catch (err) {
        return next();
      }
    
    }
    else{
        res.json({
            error:"please Logging"
        })
    }
    
  };


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
        var body={currentDesk:`${req.params.id}`,onDesk:true};
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
exports.updateUser = async(req,res,next)=>{
    var currentUser = req.body.currentUserId;
    var newUser = req.body.newUserId;
    var desk = req.body.deskId;

    var cuser =await User.findByIdAndUpdate(currentUser,{currentDesk :null,onDesk:false},{
        new:true,
        runValidators:true
    }
    )
    if(!cuser) res.status(400).json({messege:"Current User does not exist,Please Provide a registred User id"})
    var nuser =await User.findByIdAndUpdate(newUser,{currentDesk:desk, onDesk:true},{
        new:true,
        runValidators:true
    })
    if(!nuser) res.status(400).json({messege:"New User does not exist,Please Provide a registred User id"})
    res.status(200).json({
        status:"Success"
    })
}
