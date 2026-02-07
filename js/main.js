import { createNewGame, playRound, startGame } from "./api.js";
import { toggleGame, toggleMenu } from "./ui.js";

const clickSound = new Audio("./assets/sounds/click.mp3");
const rockSound = new Audio("./assets/sounds/rock.mp3");
const paperSound = new Audio("./assets/sounds/paper.mp3");
const scissorsSound = new Audio("./assets/sounds/scissors.mp3");

function setupEventListeners() {
    const btnCreateGame = document.querySelector(".create-new-game-button");
    btnCreateGame.addEventListener("click", () => createNewGame());
    btnCreateGame.addEventListener("click", () => clickSound.play());
    
    const btnStartGame = document.querySelector(".start-game-button");
    btnStartGame.addEventListener("click", () => startGame());
    btnStartGame.addEventListener("click", () => clickSound.play());

    const btnRock = document.querySelector(".rock-button");
    btnRock.addEventListener("click", () => playRound("rock"));
    btnRock.addEventListener("click", () => rockSound.play());

    const btnPaper = document.querySelector(".paper-button");
    btnPaper.addEventListener("click", () => playRound("paper"));
    btnPaper.addEventListener("click", () => paperSound.play());

    const btnScissors = document.querySelector(".scissors-button");
    btnScissors.addEventListener("click", () => playRound("scissors"));
    btnScissors.addEventListener("click", () => scissorsSound.play());

    const btnNextRound = document.querySelector(".next-round-button");
    btnNextRound.addEventListener("click", () => toggleGame());
    btnNextRound.addEventListener("click", () => clickSound.play());

    const btnExit = document.querySelector(".exit-button");
    btnExit.addEventListener("click", () => toggleMenu());
    btnExit.addEventListener("click", () => clickSound.play());
}

setupEventListeners();