function random()
{
    var Number1 = Math.floor(Math.random() * 6) + 1;  
    return Number1;
}

var random1 = random();
var random2 = random();
document.querySelector(".img1").src = "images/dice" + random1 +".png";
document.querySelector(".img2").src = "images/dice" + random2 +".png";

if(random1 > random2)
{
document.querySelector("h1").innerHTML = "player1 wins";
}
else
{
document.querySelector("h1").innerHTML = "player2 wins";
};