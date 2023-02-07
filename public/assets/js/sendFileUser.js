const sendFileUser=async(fileId,nextUserId,status,remarks)=>{
    // alert("in sendFileUser function");
    try{
        const res= await axios({
            method: 'POST',
            url: '/api/files/sendFile',
            data:{
                fileId:fileId,
                nextUserId:nextUserId,
                status:status,
                remarks:remarks
            }
        });

        // console.log("in handleTransfer.js");
        // console.log(res);
        if(res.data.status==='Success'){
            alert(`file of subject ${res.data.file.subject} has been sent to ${res.data.file.currentUserName}`);
            window.setTimeout(()=>{
                    location.assign('/userDashboard/digitalDesk');
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

document.querySelector('.sendFileUserForm').addEventListener('submit',e=>{
    e.preventDefault();
    const fileId=document.getElementById('idOfFile').value;
    const nextUserId=document.getElementById('idOfNextUser').value;
    const status=document.getElementById('statusOfSending').value;
    const remarks=document.getElementById('remarksOfSending').value;
    sendFileUser(fileId,nextUserId,status,remarks);
})