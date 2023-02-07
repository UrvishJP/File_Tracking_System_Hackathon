const handleTransfer=async (deskId,currentUserId,nextUserId)=>{
    try{
        const res= await axios({
            method: 'PATCH',
            url: '/api/desks/handleTransfer',
            data:{
                deskId:deskId,
                currentUserId:currentUserId,
                newUserId:nextUserId
            }
        });
        // console.log("in handleTransfer.js");
        // console.log(res);
        if(res.data.status==='Success'){
            alert('Transfer has been held Successfully');
            window.setTimeout(()=>{
                    location.assign('/adminDashboard/handleTransfer');
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

document.querySelector('.handleTransferForm').addEventListener('submit',e=>{
    e.preventDefault();
    const deskId= document.getElementById('handleTransferDeskId').value;
    const currentUserId=document.getElementById('handleTransferCurrentUserId').value;
    const nextUserId=document.getElementById('handleTransferNextUserId').value;
    handleTransfer(deskId,currentUserId,nextUserId);
})