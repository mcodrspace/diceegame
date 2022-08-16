var dice = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
]

var randomNumber1 = Math.floor(Math.random() * dice.length);
var randomNumber2 = Math.floor(Math.random() * dice.length);

document.querySelector(".img1").setAttribute("src", dice[randomNumber1]);

document.querySelector(".img2").setAttribute("src", dice[randomNumber2]);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
  document.querySelector(".plyr1").innerHTML = "🚩 Player 1";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
  document.querySelector(".plyr2").innerHTML = "🚩 Player 2";
}
