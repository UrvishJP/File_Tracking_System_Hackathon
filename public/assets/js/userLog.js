// alert("in user log js file");
const pleasePassmonth=async (month)=>{
    if(!month){
        alert('enter file ID please');
    }
    else{
        location.assign(`/userDashboard/logDesk?month=${month}`);
    }
}
 
document.querySelector('.userLogForm').addEventListener('submit',e=>{
    // alert('in user log');
    e.preventDefault();
    const month=document.getElementById('userSelectMonth').value;
    pleasePassmonth(month);
})