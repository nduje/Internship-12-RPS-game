const createNewGameButton = document.querySelector(".create-new-game-button");
const startGameButton = document.querySelector(".start-game-button");
const reviewGameButton = document.querySelector(".review-game-button");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

createNewGameButton.addEventListener("click", () => handleCreateNewGame());
startGameButton.addEventListener("click", () => handleStartGame());
reviewGameButton.addEventListener("click", () => handleReviewGame());
rockButton.addEventListener("click", () => handleRock());
paperButton.addEventListener("click", () => handlePaper());
scissorsButton.addEventListener("click", () => handleScissors());

function handleCreateNewGame() {
    console.log("Create new game");
}

function handleStartGame() {
    console.log("Start game");
}

function handleReviewGame() {
    console.log("Review game");
}

function handleRock() {
    console.log("Rock");
}

function handlePaper() {
    console.log("Paper");
}

function handleScissors() {
    console.log("Scissors");
}