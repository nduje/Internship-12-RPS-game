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

export function toggleGame() {
    const roundResultContainer = document.querySelector(".round-result-container");
    const movesContainer = document.querySelector(".game-container");
    
    roundResultContainer.classList.toggle("hidden");
    movesContainer.classList.toggle("hidden");
}

export function toggleMenu() {
    const menuContainer = document.querySelector(".menu");
    const gameContainer = document.querySelector(".game");
    
    menuContainer.classList.toggle("hidden");
    gameContainer.classList.toggle("hidden");
}