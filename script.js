"use strict";
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
let secrateNumber = Math.floor(Math.random() * 20 + 1);

console.log(secrateNumber);

// check the guess number
check.addEventListener("click", function () {
  if (!guess.value) {
    message.textContent = "Guess a number ⛔";
  } else if (guess.value > secrateNumber) {
    message.textContent = "Your Guess is high 📈";
  } else if (guess.value < secrateNumber) {
    message.textContent = "Your Guess is low 📉";
  } else if (guess.value == secrateNumber) {
    message.textContent = "your win 🎉";
    document.body.style.backgroundColor = "red";
  }
});
