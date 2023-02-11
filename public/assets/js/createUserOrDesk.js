const createUser=async (userName,userEmail,password,userRole)=>{
    try{
        const res= await axios({
            method: 'POST',
            url: '/api/users/createUser',
            data:{
                role:userRole,
                name:userName,
                email:userEmail,
                password:password
            }
        });
        // console.log("in handleTransfer.js");
        // var name=res.data.data.newUser.name
        // console.log(res);
        // console.log(name);
        if(res.data.status==='new user creted'){
            alert(`new user created with name ${res.data.data.newUser.name} and id-${res.data.data.newUser._id}`);
            window.setTimeout(()=>{
                    location.assign('/adminDashboard/createUser');
            },1);  
        }
        else{
            alert(res.data.messege);
        }
    }
    catch(err){
        alert('error from server');
    }
}

const addDesk=async (deskOffice,deskDesignation,deskBranch)=>{
    try{
        const res= await axios({
            method: 'POST',
            url: '/api/desks/createnewDesk',
            data:{
                office:deskOffice,
                branch:deskBranch,
                designation:deskDesignation,
            }
        });
        // console.log("in handleTransfer.js");
        // var name=res.data.data.newUser.name
        // console.log(res);
        // console.log(name);
        if(res.data.status==='added data!'){
            alert(`new desk added with post of ${res.data.data.data.designation} and id-${res.data.data.data._id}`);
            window.setTimeout(()=>{
                    location.assign('/adminDashboard/createUser');
            },1);  
        }
        else{
            alert(res.data.messege);
        }
    }
    catch(err){
        alert('error from server');
    }
}

const assignDesk=async (assignDeskUserId,assignDeskDeskId)=>{
    try{
        // alert('in desk assign');
        alert(assignDeskDeskId)
        const res= await axios({
            method: 'PATCH',
            url: `/api/desks/assignUserToDesk/${assignDeskDeskId}`,
            data:{
                user:assignDeskUserId
            }
        });
        // console.log("in handleTransfer.js");
        // var name=res.data.data.newUser.name
        // console.log(res);
        // console.log(name);
        // if(res.data.status==='Success'){
        //     alert(`an employee of has been asssigned the desk`);
        //     window.setTimeout(()=>{
        //             location.assign('/adminDashboard/createUser');
        //     },1);  
        // }
        // else{
        //     alert(res.data.messege);
        // }
        alert("the user has been assigned the desk");
    }
    catch(err){
        alert('error from server');
    }
}

document.querySelector('.createUserForm').addEventListener('submit',e=>{
    e.preventDefault();
    const userName= document.getElementById('nameOfUser').value;
    const userEmail=document.getElementById('emailIdOfUser').value;
    const password=document.getElementById('passwordOfUser').value;
    const userRole=document.getElementById('roleOfUser').value;
    createUser(userName,userEmail,password,userRole);
})

document.querySelector('.addNewDeskForm').addEventListener('submit',e=>{
    e.preventDefault();
    const deskOffice= document.getElementById('officeOfDesk').value;
    const deskDesignation=document.getElementById('designationOfDesk').value;
    const deskBranch=document.getElementById('branchOfDesk').value;
    addDesk(deskOffice,deskDesignation,deskBranch);
})

document.querySelector('.assignDeskForm').addEventListener('submit',e=>{
    e.preventDefault();
    const assignDeskUserId= document.getElementById('nextUserId').value;
    const assignDeskDeskId=document.getElementById('deskId').value;
    const array1=assignDeskUserId.split(" - ");
    const array2=assignDeskDeskId.split(" - ");
    const UserName=array1[0];
    const deskName=array2[0];
    assignDesk(UserName,deskName);
})