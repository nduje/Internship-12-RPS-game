export function showRoundNumber(roundNumber) {
    const roundNumberContainer = document.querySelector(".round-number");

    roundNumberContainer.textContent = `Round: ${roundNumber}/5`
}

export function showResult(computerMove, winner) {
    const computerMoveContainer = document.querySelector(".computer-move");

    computerMoveContainer.textContent = `Computer picked ${computerMove}...`

    const roundResultContainer = document.querySelector(".round-result");

    switch(winner) {
        case 'player':
            roundResultContainer.textContent = "You WIN!";
            break;
        case 'computer':
            roundResultContainer.textContent = "You LOSE!";
        case 'draw':
            roundResultContainer.textContent = "It's a DRAW!";
    }
}

export function showMenu() {
    const menuContainer = document.querySelector(".menu");
    const gameContainer = document.querySelector(".game");
    const reviewContainer = document.querySelector(".review");
    
    menuContainer.classList.remove("hidden");
    gameContainer.classList.add("hidden");
    reviewContainer.classList.add("hidden");
}

export function showReview() {
    const menuContainer = document.querySelector(".menu");
    const gameContainer = document.querySelector(".game");
    const reviewContainer = document.querySelector(".review");
    
    menuContainer.classList.add("hidden");
    gameContainer.classList.add("hidden");
    reviewContainer.classList.remove("hidden");
}

export function showGame() {
    const menuContainer = document.querySelector(".menu");
    const gameContainer = document.querySelector(".game");
    const reviewContainer = document.querySelector(".review");
    
    menuContainer.classList.add("hidden");
    gameContainer.classList.remove("hidden");
    reviewContainer.classList.add("hidden");
}

export function clearGame() {
    const roundResultContainer = document.querySelector(".round-result-container");
    const movesContainer = document.querySelector(".game-container");
    
    roundResultContainer.classList.add("hidden");
    movesContainer.classList.remove("hidden");
}

export function toggleGame() {
    const roundResultContainer = document.querySelector(".round-result-container");
    const movesContainer = document.querySelector(".game-container");
    
    roundResultContainer.classList.toggle("hidden");
    movesContainer.classList.toggle("hidden");
}