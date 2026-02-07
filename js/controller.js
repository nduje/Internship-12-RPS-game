import { generateRounds, applyPlayerMove } from "./logic.js";
import { clearGame, showGame, showResult, showRoundNumber, toggleGame } from "./ui.js";
import { addGame, getGame, updateGame } from "./api.js";

let currentGameId = null;
let currentRoundNumber = null;

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
}

export async function startGame() {
    const game = await getGame(currentGameId);

    const updatedData = {
        ...game.data,
        status: "started"
    };

    const updatedGame = await updateGame(currentGameId, updatedData);

    showGame();
    showRoundNumber(updatedGame.data.currentRoundNumber);
}

export async function playRound(move) {
    const game = await getGame(currentGameId);

    const updatedData = applyPlayerMove(game.data, move);
    const updatedGame = await updateGame(currentGameId, updatedData);

    const roundIndex = updatedGame.data.currentRoundNumber - 2;
    const lastRound = updatedGame.data.rounds[roundIndex];

    toggleGame();
    showRoundNumber(updatedGame.data.currentRoundNumber);
    showResult(lastRound.computerMove, lastRound.winner);
}
