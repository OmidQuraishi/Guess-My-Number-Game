"use strict";
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
let secrateNumber = Math.floor(Math.random() * 20 + 1);
let scoreNumber = 20;

console.log(secrateNumber);

// check the guess number
check.addEventListener("click", function () {
  if (!guess.value) {
    message.textContent = "Guess a number ⛔";
  } else if (guess.value > secrateNumber) {
    message.textContent = "Your Guess is high 📈";
    scoreNumber--;
    document.querySelector(".score").textContent = scoreNumber;
  } else if (guess.value < secrateNumber) {
    message.textContent = "Your Guess is low 📉";
    scoreNumber--;
    document.querySelector(".score").textContent = scoreNumber;
  } else if (guess.value == secrateNumber) {
    message.textContent = "your win 🎉";
    document.body.style.backgroundColor = "#60b347";
    number.textContent = secrateNumber;
    document.querySelector(".highscore").textContent = scoreNumber;
  }
});

again.addEventListener("click", function () {
  secrateNumber = Math.floor(Math.random() * 20 + 1);
  document.body.style.backgroundColor = "#222";
  document.querySelector(".score").textContent = 20;
  scoreNumber = 20;
  console.log(secrateNumber);
  guess.value = "";
  number.textContent = "?";
});
