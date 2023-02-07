const createNewPhysicalFile=async(fileSubject,expectedDate,applicantName,applicantMobileNumber,applicantEmailId)=>{
    alert("in function of physical file");
    try{
        // alert("in createNewFIle.js")
        // alert(fileSubject)
        const res = await axios ({
            method: 'POST',
            url: '/api/files/addNewFile',
            data:{
                subject:fileSubject,
                mode:'Physical',
                expectedDate:expectedDate,
                applicantName:applicantName,
                applicantMobileNumber:applicantMobileNumber,
                applicantEmailId:applicantEmailId
            }
        });
        // console.log(res.data.data.newFile._id);
        if(res.data.status==='new File created'){
            alert(`new Physical file added with id- ${res.data.data.newFile._id} `); 
        }
        else{
            alert("error in adding file");
        }
    }
    catch(err){
        alert("error in adding the file");
    }
};

document.querySelector('.addNewPhyFileForm').addEventListener('submit',e=>{
    e.preventDefault();
    const fileSubject=document.getElementById('fileSubject').value;
    const expectedDate=document.getElementById('expectedDate').value;
    const applicantName=document.getElementById('appName').value;
    const applicantMobileNumber=document.getElementById('appMobNo').value;
    const applicantEmailId=document.getElementById('appEmail').value;
    createNewPhysicalFile(fileSubject,expectedDate,applicantName,applicantMobileNumber,applicantEmailId);
});