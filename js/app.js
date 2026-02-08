import { createNewGame, playRound, resetGame, startGame } from "./controller.js";
import { toggleGame, showMenu, showReview, toggleReview } from "./ui.js";

const clickSound = new Audio("./assets/sounds/click.mp3");
const rockSound = new Audio("./assets/sounds/rock.mp3");
const paperSound = new Audio("./assets/sounds/paper.mp3");
const scissorsSound = new Audio("./assets/sounds/scissors.mp3");

function setupEventListeners() {
    const btnCreateGame = document.querySelector(".create-new-game-button");
    btnCreateGame.addEventListener("click", () => { createNewGame(); clickSound.play(); });
    
    const btnStartGame = document.querySelector(".start-game-button");
    btnStartGame.addEventListener("click", () => { startGame(); clickSound.play(); });
    
    const btnReviewGame = document.querySelector(".review-game-button");
    btnReviewGame.addEventListener("click", () => { showReview(); clickSound.play(); });

    const btnRock = document.querySelector(".rock-button");
    btnRock.addEventListener("click", () => { playRound("rock"); rockSound.play();});

    const btnPaper = document.querySelector(".paper-button");
    btnPaper.addEventListener("click", () => { playRound("paper"); paperSound.play();});

    const btnScissors = document.querySelector(".scissors-button");
    btnScissors.addEventListener("click", () => { playRound("scissors"); scissorsSound.play(); });

    const btnNextRound = document.querySelector(".next-round-button");
    btnNextRound.addEventListener("click", () => { toggleGame(); clickSound.play(); });

    const btnFinishGame = document.querySelector(".finish-game-button");
    btnFinishGame.addEventListener("click", () => { resetGame(); showReview(); toggleReview(); clickSound.play(); });

    const exitButtons = document.querySelectorAll(".exit-button");

    exitButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            showMenu();
            clickSound.play();
        });
    });
}

setupEventListeners();