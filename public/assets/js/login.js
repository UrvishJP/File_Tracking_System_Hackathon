
const login=async(email,password,role)=>{
    try{
        const res=await axios({
            method: 'POST',
            url: '/api/users/login',
            data:{
                email:email,
                password:password,
                role:role
            }
        });
        console.log("in login.js");
        console.log(res);
        if(res.data.status==='success'){
            alert('logged in sucessfully');
            window.setTimeout(()=>{
                if(role==='User'){
                    location.assign('/userDashboard');
                }
                else{
                    location.assign('/adminDashboard');
                }
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

document.querySelector('.form').addEventListener('submit',e=>{
    e.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const role=document.getElementById('role').value;
    login(email,password,role);
})