"use strict";

// Defining variables
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");

//Initial condiction of game
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
