export function generateRounds() {
    const moves = ["rock", "paper", "scissors"];
    const rounds = [];

    for (let i = 0; i < 5; i++) {
        const move = moves[Math.floor(Math.random() * moves.length)];
        rounds.push({
            roundNumber: i + 1,
            playerMove: "pending",
            computerMove: move,
            winner: null
        });
    }

    return rounds;
}

function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) return "draw";
    
    if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper")
    ) return "player";
    
    return "computer";
}

export function applyPlayerMove(gameData, playerMove) {
    const round = gameData.rounds[gameData.currentRoundNumber - 1];

    round.playerMove = playerMove;
    const winner = determineWinner(playerMove, round.computerMove);
    round.winner = winner;

    if (winner === "player") gameData.playerScore += 1;
    
    else if (winner === "computer") gameData.computerScore += 1;

    gameData.currentRoundNumber += 1;

    return gameData;
}