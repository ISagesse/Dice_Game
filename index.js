//change the dice images for the left with a random number.

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);


//change the dice images for the right with a random number.

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


// check which player is winning.

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player One Win";
} else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a Tie";
} else {
  document.querySelector("h1").innerHTML = "Player Two Win";
}
