export function showRoundNumber(roundNumber) {
    const roundNumberContainer = document.querySelector(".round-number");

    roundNumberContainer.textContent = `Round: ${roundNumber}/5`
}

export function showResult(computerMove, winner, isFinished) {
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

    const btnNextRound = document.querySelector(".next-round-button");
    const btnFinishGame = document.querySelector(".finish-game-button");

    if (isFinished) {
        btnNextRound.classList.add("hidden");
        btnFinishGame.classList.remove("hidden");
    }

    else {
        btnNextRound.classList.remove("hidden");
        btnFinishGame.classList.add("hidden");
    }
}

export function showScore(gameData) {
    const roundsContainer = document.querySelector(".rounds-review-container");
    
    for (let i = 0; i < gameData.rounds.length; i++) {
        const round = gameData.rounds[i];

        const roundContainer = document.createElement("div");
        roundContainer.classList.add("round-container");

        const roundTitle = document.createElement("h2");
        roundTitle.textContent = `Round ${round.roundNumber}/${gameData.totalRounds}`;
        roundContainer.appendChild(roundTitle);

        const playerMove = document.createElement("h3");
        playerMove.textContent = `Player Move: ${round.playerMove}`;
        roundContainer.appendChild(playerMove);

        const computerMove = document.createElement("h3");
        computerMove.textContent = `Computer Move: ${round.computerMove}`;
        roundContainer.appendChild(computerMove);

        const winner = document.createElement("h3");
        winner.textContent = `Winner: ${round.winner}`;
        roundContainer.appendChild(winner);

        roundsContainer.appendChild(roundContainer);
    }
    
    const playerWinsContainer = document.querySelector(".player-score");
    const computerWinsContainer = document.querySelector(".computer-score");
    
    playerWinsContainer.textContent = `Player Score: ${gameData.playerScore}/${gameData.totalRounds}`;
    computerWinsContainer.textContent = `Computer Score: ${gameData.computerScore}/${gameData.totalRounds}`;
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

export function toggleReview() {
    const reviewContainer = document.querySelector(".review-container");
    const noReviewContainer = document.querySelector(".no-review-container");
    
    reviewContainer.classList.toggle("hidden");
    noReviewContainer.classList.toggle("hidden");
}

export function showStartGame() {
    const gameContainer = document.querySelector(".start-game-container");
    const noGameContainer = document.querySelector(".no-game-container");
    
    gameContainer.classList.remove("hidden");
    noGameContainer.classList.add("hidden");
}

export function hideStartGame() {
    const gameContainer = document.querySelector(".start-game-container");
    const noGameContainer = document.querySelector(".no-game-container");
    
    gameContainer.classList.add("hidden");
    noGameContainer.classList.remove("hidden");
}