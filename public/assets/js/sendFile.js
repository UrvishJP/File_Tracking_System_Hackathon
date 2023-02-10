const sendFileAdmin=async(fileId,nextUserName,status,remarks)=>{
    // alert(nextUserId);
    try{
        const res= await axios({
            method: 'POST',
            url: '/api/files/sendFile',
            data:{
                fileId:fileId,
                nextUserName:nextUserName,
                status:status,
                remarks:remarks
            }
        });

        // console.log("in handleTransfer.js");
        // console.log(res);
        if(res.data.status==='Success'){
            alert(`file of subject ${res.data.file.subject} has been sent to ${res.data.file.currentUserName}`);
            if(res.data.user.role==="Admin"){
                window.setTimeout(()=>{
                    location.assign('/adminDashboard/digitalDesk');
            },1); 
            }
            else{
                window.setTimeout(()=>{
                    location.assign('/userDashboard/digitalDesk');
            },1);  
            }
        }
        else{
            alert(res.data.messege);
        }
    }
    catch(err){
        alert('error from server');
    }
}

document.querySelector('.sendFileAdminForm').addEventListener('submit',e=>{
    e.preventDefault();
    const fileId=document.getElementById('IdOfFile').value;
    const UserId=document.getElementById('nextUserId').value;
    const status=document.getElementById('sendFileStatus').value;
    const remarks=document.getElementById('remarks').value;
    const array=UserId.split(" - ");
    const nextUserId=array[2];
    sendFileAdmin(fileId,nextUserId,status,remarks);
})