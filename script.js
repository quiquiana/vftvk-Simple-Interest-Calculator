function compute(){
    p = document.getElementById("principal").value; var rate = document.getElementById("rate").value;
    var principal = document.getElementById("principal").value;
var years = document.getElementById("years").value;
var year = new Date().getFullYear()+parseInt(years);
var rate = document.getElementById("rate").value;
var interest = principal * years * rate / 100;
document.getElementById("result").innerHTML="If you deposit\<mark>\ "+principal+",\</mark><br\>at an interest rate of\<mark>\ "+rate+"%\</mark><br\>You will receive an amount of\<mark>\ "+interest+",\</mark><br\>in the year\<mark>\ "+year+"\</mark><br\>";
 if (principal<= 0) {alert("Enter a positive number")
}
}
var principal = document.getElementById("principal").value;
var result = document.getElementById("result");

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        