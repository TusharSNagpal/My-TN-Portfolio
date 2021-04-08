var buttonResp = document.querySelector("#button-resp");
var output = document.querySelector("#output");
var output2 = document.querySelector("#output2");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var a5 = document.querySelector("#a5");
var username = prompt("Please Enter Your Name: ");
alert("Hey "+ username + "! Tushar Welcomes You To His Game Page! Please Scroll Down..");

var score=0;

function doThis(){

if(a1.value==='20')
score++;

if(a2.value==='2')
score++;

if(a3.value==='Yes')
score++;

if(a4.value==='Gurugram')
score++;

if(a5.value==='Rajma Chawal')
score++;

output.innerText = "YOUR SCORE IS: " + score;

if(score>2)
output2.innerText = "Yeah! You know him.";

else
output2.innerText = "You dont know much about him.";

};

buttonResp.addEventListener("click", doThis);





