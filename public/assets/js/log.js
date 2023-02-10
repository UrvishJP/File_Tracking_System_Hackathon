const passmonth=async (month)=>{
    if(!month){
        alert('enter file ID please');
    }
    else{
        location.assign(`/adminDashboard/logDesk?month=${month}`);
    }
}

document.querySelector('.logForm').addEventListener('submit',e=>{
    e.preventDefault();
    const month=document.getElementById('selectMonth').value;
    passmonth(month);
})