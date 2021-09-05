function addrow()
{
var fname=document.sample.fname.value;
var lname=document.sample.lname.value;
var address=document.sample.addr.value;
var pincode=document.sample.pin.value;
var gender=document.sample.male.value;
var food=document.sample.food.value;
var state=document.sample.state.value;
var country=document.sample.cou.value;

var tr=document.createElement('tr');

var td1=tr.appendChild(document.createElement('td'));
var td2=tr.appendChild(document.createElement('td'));
var td3=tr.appendChild(document.createElement('td'));
var td4=tr.appendChild(document.createElement('td'));
var td5=tr.appendChild(document.createElement('td'));
var td6=tr.appendChild(document.createElement('td'));
var td7=tr.appendChild(document.createElement('td'));
var td8=tr.appendChild(document.createElement('td'));

td1.innerHTML=fname;
td2.innerHTML=lname;
td3.innerHTML=address;
td4.innerHTML=pincode;
td5.innerHTML=gender;
td6.innerHTML=food;
td7.innerHTML=state;
td8.innerHTML=country;

document.getElementById("tb").appendChild(tr);






}
    