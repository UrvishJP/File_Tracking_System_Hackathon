const search=async (mobNo)=>{
    // alert("in search mobile no");
    if(!mobNo){
        alert('enter your mobile Number first');
    }
    else{
        location.assign(`/applicant/files?applicantMobileNumber=${mobNo}`);
    }
}

document.querySelector('.applicantSearch').addEventListener('submit',e=>{
    // alert("on clicking get");
    e.preventDefault();
    const modNo=document.getElementById('mobileNumber').value;
    search(modNo);
})