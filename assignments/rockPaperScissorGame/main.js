"use strict";
// rock, paper and scissors Game:
Object.defineProperty(exports, "__esModule", { value: true });
let playerOne = "Rock";
let playerTwo = "Scissors";
if (playerOne === playerTwo) {
    console.log("It's a tie!");
}
else if ((playerOne === "Rock" && playerTwo === "Scissors")
    || (playerOne === "Scissors" && playerTwo === "Paper") ||
    (playerOne === "Paper" && playerTwo === "Rock")) {
    console.log("Player Win!");
}
