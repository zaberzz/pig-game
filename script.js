"use strict";

// Defining variables
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const curren0EL = document.querySelector("#current--0");
const curren1EL = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Initial condiction of game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;

//Rolling the dice
btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 0) {
    currentScore += dice;
    curren0EL.textContent = currentScore;
  } else {
  }
});
