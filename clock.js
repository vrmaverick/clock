const tog =()=>{
    col1.classList.toggle("op")
    col2.classList.toggle("op")
}
setInterval(tog ,1000)
const days = (da) =>{
    if(da==0)
{
document.getElementById('day').innerHTML="<b>SUNDAY</b>"
}
else if(da==1)
{
document.getElementById('day').innerHTML="<b>MONDAY</b>"
}
else if(da==2)
{
document.getElementById('day').innerHTML="<b>TUESDAY</b>"
}
else if(da==3)
{
document.getElementById('day').innerHTML="<b>WEDNESDAY</b>"
}
else if(da==4)
{
document.getElementById('day').innerHTML="<b>THURSDAY</b>"
}
else if(da==5)
{
document.getElementById('day').innerHTML="<b>FRIDAY</b>"
}
else
{
document.getElementById('day').innerHTML="<b>SATURDAY</b>"
}
}
const hours = (h) =>{
if(h<10){
    document.getElementById("hours").innerHTML="<b>0"+ h +" </b>";
}
else{
    document.getElementById("hours").innerHTML="<b>"+ h +" </b>";
}
}
const Minutes = (m) =>{
if(m<10){
    document.getElementById("minutes").innerHTML="<b>0"+ m +" </b>";
}
else{
    document.getElementById("minutes").innerHTML="<b>"+ m +" </b>";
}
}
const secs = (s) =>{
    if(s<10){
        document.getElementById("seconds").innerHTML="<b>0"+ s +" </b>";
    }
    else{
        document.getElementById("seconds").innerHTML="<b>"+ s +" </b>";
    }
    }
    const dates =(d,m,y) =>{
        let mon;
    // if(d<10){
    //     document.getElementById("date").innerHTML="<b> 0"+ d +" </b>";
    // }
    // else{
    //     document.getElementById("date").innerHTML="<b> "+ d +" </b>";
    // }
    // }
    if(m==0)
    {
    mon="JANUARY"
    } 
    else if(m==1)
    {
    mon="FEBRUARY"
    } 
    else if(m==2)
    {
    mon="MARCH"
    } 
    else if(m==3)
    {
    mon="APRIL"
    } 
    else if(m==4)
    {
    mon="MAY"
    } 
    else if(m==5)
    {
    mon="JUNE"
    } 
    else if(m==6)
    {
    mon="JULY"
    } 
    else if(m==7)
    {
    mon="AUGUST"
    } 
    else if(m==8)
    {
    mon="SEPTEMBER"
    } 
    else if(m==9)
    {
    mon="OCTOBER"
    } 
    else if(m==10)
    {
    mon="NOVEMBER"
    } 
    else
    {
    mon="DECEMBER"
    } 
    if(d<10){
            document.getElementById("date").innerHTML="<b>"+ mon +" 0"+ d +" "+ y +"</b>";
        }
        else{
            document.getElementById("date").innerHTML="<b>"+ mon +" "+ d +" "+ y +"</b>";;
        }
        }

const currentTime =() =>{//define
let d = new Date();
let da= d.getDay();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let date = d.getDate();
let mon = d.getMonth();
let y = d.getFullYear();
// console.log(da,h,m,s,date,mon,y)
days(da);
hours(h);
Minutes(m);
secs(s);
dates(date,mon,y);
let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();//excecute
//https://flexiple.com/javascript/javascript-clock/