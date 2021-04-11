var buttonResp = document.querySelector("#button-resp");

var result = document.querySelector("#result");
var a1 = document.querySelector("#a1");

var username = prompt("Please Enter Your Name: ");
alert("Hey "+ username + "! Tushar Welcomes You To His Game Page! Please Scroll Down..");


function doThis(){

if(a1.value%400 === 0)
output.innerText = "YEAR ENTERED IS : " + a1.value + " and it is LEAP.";

if(a1.value%100 === 0)
output.innerText = "YEAR ENTERED IS : " + a1.value + " and it is NOT LEAP.";

if(a1.value%4 === 0)
output.innerText = "YEAR ENTERED IS : " + a1.value + " and it is LEAP.";

else
output.innerText = "YEAR ENTERED IS : " + a1.value + " and it is NOT LEAP.";

result.innerText = "THANKS FOR USING! YOU ARE ALWAYS WELCOME HERE.";

};

buttonResp.addEventListener("click", doThis);






