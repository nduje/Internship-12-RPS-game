import { generateRounds, applyPlayerMove } from "./logic.js";
import { clearGame, showGame, showResult, showReview, showRoundNumber, showScore, toggleGame, toggleReview, showStartGame, hideStartGame, disableStartGame } from "./ui.js";
import { addGame, getGame, updateGame } from "./api.js";

let currentGameId = null;
let previousGameId = null;

export async function createNewGame() {
    const gamePayload = {
        name: "RPS Game",
        data: {
            status: "created",
            totalRounds: 5,
            currentRoundNumber: 1,
            playerScore: 0,
            computerScore: 0,
            rounds: generateRounds()
        }
    };

    const createdGame = await addGame(gamePayload);

    currentGameId = createdGame.id;

    clearGame();
    showRoundNumber(1);
    disableStartGame();
}

export async function startGame() {
    if (currentGameId) {
        const game = await getGame(currentGameId);

        const updatedData = {
            ...game.data,
            status: "started"
        };

        const updatedGame = await updateGame(currentGameId, updatedData);

        showStartGame();
        showRoundNumber(updatedGame.data.currentRoundNumber);
    }

    else {
        hideStartGame();
    }

    showGame();
}

export async function playRound(move) {
    const game = await getGame(currentGameId);

    console.log(game);

    const updatedData = applyPlayerMove(game.data, move);
    const updatedGame = await updateGame(currentGameId, updatedData);

    const roundIndex = updatedGame.data.currentRoundNumber - 2;
    const lastRound = updatedGame.data.rounds[roundIndex];

    toggleGame();
    showRoundNumber(updatedGame.data.currentRoundNumber);

    if (updatedGame.data.currentRoundNumber > updatedGame.data.totalRounds) {
        showScore(updatedGame.data);
        showResult(lastRound.computerMove, lastRound.winner, true);
    }

    else showResult(lastRound.computerMove, lastRound.winner, false);
}

export function resetGame() {
    previousGameId = currentGameId;
    currentGameId = null;
    disableStartGame();
}
