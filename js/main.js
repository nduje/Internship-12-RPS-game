import { createNewGame, playRound, startGame } from "./api.js";
import { toggleGame, toggleMenu } from "./ui.js";

function setupEventListeners() {
    const btnCreateGame = document.querySelector(".create-new-game-button");
    btnCreateGame.addEventListener("click", () => createNewGame());

    const btnStartGame = document.querySelector(".start-game-button");
    btnStartGame.addEventListener("click", () => startGame());

    const btnRock = document.querySelector(".rock-button");
    btnRock.addEventListener("click", () => playRound("rock"));

    const btnPaper = document.querySelector(".paper-button");
    btnPaper.addEventListener("click", () => playRound("paper"));

    const btnScissors = document.querySelector(".scissors-button");
    btnScissors.addEventListener("click", () => playRound("scissors"));

    const btnNextRound = document.querySelector(".next-round-button");
    btnNextRound.addEventListener("click", () => toggleGame());

    const btnExit = document.querySelector(".exit-button");
    btnExit.addEventListener("click", () => toggleMenu());
}

setupEventListeners();