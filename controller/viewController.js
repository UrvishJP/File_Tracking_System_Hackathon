const File =require('./../modal/fileModel');

exports.getLoginPage=(req,res)=>{
    res.status(200).render('login',{
        title:'DP-Patan'
    })
};

exports.getAdminDigitalDesk=async (req,res,next)=>
{
    console.log(req.user);
    try{
        const files= await File.find({
            currentUserName:req.user.name,
            mode:'Digital',
            status:'In Process'
        }).populate({
            path:'previousDesk'
        });
        console.log(files);
        res.status(200).render('adminDigitalDesk',{
            title:'Admin Dashboard DDO',
            files:files
        })
    }
    catch(err)
    {
        res.status(401).send(
            {
                error:err
            }
        )
    }
}

exports.getAdminPhysicalDesk=async (req,res,next)=>
{
    // console.log(req.user);
    try{
        const files= await File.find({
            currentUserName:req.user.name,
            mode:'Physical',
            status:'In Process'
        }).populate({
            path:'previousDesk',
        });
        // console.log(files);
        res.status(200).render('adminPhysicalDesk',{
            title:'Admin Dashboard DDO',
            files:files
        })
    }
    catch(err)
    {
        res.status(401).send(
            {
                error:err
            }
        )
    }
}