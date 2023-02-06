const handleTransfer=(deskId,currentUserId,nextUserId)=>{
    alert(deskId);
    console.log(currentUserId);
    console.log(nextUserId);
}

document.querySelector('.handleTransferForm').addEventListener('submit',e=>{
    e.preventDefault();
    const deskId= document.getElementById('handleTransferDeskId').value;
    const currentUserId=document.getElementById('handleTransferCurrentUserId').value;
    const nextUserId=document.getElementById('handleTransferNextUserId').value;
    handleTransfer(deskId,currentUserId,nextUserId);
})