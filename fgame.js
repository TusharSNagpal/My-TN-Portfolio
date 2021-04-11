var buttonResp = document.querySelector("#button-resp");
var output = document.querySelector("#output");
var output2 = document.querySelector("#output2");
var result = document.querySelector("#result");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var a5 = document.querySelector("#a5");
var username = prompt("Please Enter Your Name: ");
alert("Hey "+ username + "! Tushar Welcomes You To His Game Page! Please Scroll Down..");


function doThis(){
var score=0;

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

output.innerText = "YOUR SCORE IS: " + score + " out of 5.";

if(score>2)
{
result.innerText = "RESULT: 👇";
output2.innerText = "Yeah! You know him. Thanks please play again.";
}

else{
result.innerText = "RESULT: 👇";
output2.innerText = "You don't know much about him. Thanks please play again.";
}

a1.innerText= "Correct Answer is 20.";
a2.innerText= "Correct Answer is 2.";
a3.innerText= "Correct Answer is Yes.";
a4.innerText= "Correct Answer is Gurugram.";
a5.innerText= "Correct Answer is Rajma Chawal.";

};

buttonResp.addEventListener("click", doThis);





