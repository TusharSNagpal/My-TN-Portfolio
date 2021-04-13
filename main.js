var username = prompt("Please Enter Your Name: ");
alert("Hey "+ username + "! Tushar Welcomes You To His PORTFOLIO!");

var serverLink = "https://TN-PORTFOLIO-SERVER.tusharnagpal.repl.co/translate/yoda.json"

function urlGenerator(i)
{
    return serverLink+"?"+"text="+"Entry by: "+i
}

fetch(urlGenerator(username))
.then(response => response.json())
.then(json => console.log(json))