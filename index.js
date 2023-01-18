var randomNumber=Math.floor(Math.random()*6)+1;

var randomDiceImages="images/dice-six-faces-"+ randomNumber + ".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImages);



var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImages1="images/dice-six-faces-" + randomNumber1 +".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImages1);

if(randomNumber === randomNumber1)
{
    document.querySelector("h1").innerHTML="it's a draw!!!!";
}
else if(randomNumber > randomNumber1)
{
    document.querySelector("h1").innerHTML="PLayer1 wins!!!!!";
}
else{
    document.querySelector("h1").innerHTML="PLayer2 wins!!!!!";
}