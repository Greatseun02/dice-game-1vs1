//this gets a random number from 1-6 and stores the number in a variable randomNumber1
let randomNumber1 = Math.floor( (Math.random()*6) + 1);
//this gets the path of to access the image of the random number gotten from the variable randomNUmber1
let randomDice1 = "images/dice" + randomNumber1 + ".png"
//using query selector I access the element with class img1 and set the image source attribute to the path we got from randomDice1
document.querySelector(".img1").setAttribute("src", randomDice1)

//this gets a random number from 1-6 and stores the number in a variable randomNumber1
let randomNumber2 = Math.floor( (Math.random()*6) + 1);
//this gets the path of to access the image of the random number gotten from the variable randomNUmber1
let randomDice2 = "images/dice" + randomNumber2 + ".png"
//using query selector I access the element with class img1 and set the image source attribute to the path we got from randomDice1
document.querySelector(".img2").setAttribute("src", randomDice2)

//if randomDice2 is greater than randomDice1 it should change the element h1 to player 2 wins
if (randomDice2 > randomDice1) {
  document.querySelector("h1").textContent = "Player 2 Wins!"
}
//else if randomDice1 is greater than randomDice2 it should change the element h1 to player 1 wins
else if (randomDice2 < randomDice1) {
  document.querySelector("h1").textContent = "Player 1 Wins!"
}
//else if randomDice1 and randomDice 2 are equal then it is a draw
else if (randomDice2 === randomDice1) {
  document.querySelector("h1").textContent = "Draw!"
}
