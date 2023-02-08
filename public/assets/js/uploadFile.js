const uploadFile=async(data)=>{
    // alert("in uploadFile");
    const res= await axios({
        method: 'POST',
        url: '/api/files/uploadfile',
        data:data
    });
    if(res.data.status==='Success'){
        alert('file Uploaded Successfully please refresh to view'); 
    }
    else{
        alert(res.data.messege);
    }
}

document.querySelector('.uploadFile').addEventListener('submit',e=>{
    e.preventDefault();
    // const fileid=document.getElementById('fileId').value;
    // const filePdf=document.getElementById('formFileSm').files[0];
    const form = new FormData();
    form.append('fileId', document.getElementById('fileId').value);
    form.append('file', document.getElementById('filePdf').files[0]); 
    uploadFile(form);
})