const sendFileAdmin=async(fileId,nextUserId,status,remarks)=>{
    // alert("in sendFile function");
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
                    location.assign('/adminDashboard/digitalDesk');
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

document.querySelector('.sendFileAdminForm').addEventListener('submit',e=>{
    e.preventDefault();
    const fileId=document.getElementById('IdOfFile').value;
    const nextUserId=document.getElementById('nextUserId').value;
    const status=document.getElementById('sendFileStatus').value;
    const remarks=document.getElementById('remarks').value;
    sendFileAdmin(fileId,nextUserId,status,remarks);
})