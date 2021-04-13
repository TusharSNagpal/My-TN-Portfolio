var buttonResp = document.querySelector("#button-resp");

var result1 = document.querySelector("#result1");
var a1 = document.querySelector("#a1");


function doThis(){

if(a1.value%400 === 0)
output1.innerText = "YEAR ENTERED IS : " + a1.value + " and it is LEAP.";

if(a1.value%100 === 0)
output1.innerText = "YEAR ENTERED IS : " + a1.value + " and it is NOT LEAP.";

if(a1.value%4 === 0)
output1.innerText = "YEAR ENTERED IS : " + a1.value + " and it is LEAP.";

else
output.innerText = "YEAR ENTERED IS : " + a1.value + " and it is NOT LEAP.";

result1.innerText = "THANKS FOR USING! YOU ARE ALWAYS WELCOME HERE.";

};

buttonResp.addEventListener("click", doThis);






