let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

let randomDiceImage1 = "dice" + randomNumber1 + ".png";

let randomImage1 = "/images/" + randomDiceImage1;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
console.log(randomNumber2);

let randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png-dice6.png

let randomImage2 = "/images/" + randomDiceImage2; //images/dice1.png-dice6.png

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎮 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🎮 Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
