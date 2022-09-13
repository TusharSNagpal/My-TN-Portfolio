var buttonResp = document.querySelector("#button-resp");

var result1 = document.querySelector("#result1");
var a1 = document.querySelector("#a1");


function doThis(){

let y = a1.value%20 + 1;

for (let i = 0; i < 8; i++) {
   output1.innerText += y.toString() + '\n';
   y+=20;
} 
                      
result1.innerText = "THANKS FOR USING! YOU ARE ALWAYS WELCOME HERE.";

};

buttonResp.addEventListener("click", doThis);

