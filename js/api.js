import { generateRounds, applyPlayerMove } from "./logic.js";
import { showResult, showRoundNumber, toggleGame, toggleMenu } from "./ui.js";

const API_URL = "https://api.restful-api.dev/objects";

let currentGameId = null;
let currentRoundNumber = null;

export async function createNewGame() {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "RPS Game",
                data: {
                    status: "created",
                    totalRounds: 5,
                    currentRoundNumber: 1,
                    playerScore: 0,
                    computerScore: 0,
                    rounds: generateRounds()
                }
            })
        });

        const data = await response.json();
        currentGameId = data.id;
        currentRoundNumber = 1;
        console.log("Game created: ", currentGameId);

        showRoundNumber(currentRoundNumber);
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
}

export async function startGame() {
    try {
        const getResponse = await fetch(`${API_URL}/${currentGameId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        const getData = await getResponse.json();
        const gameData = getData.data;
        gameData.status = "started";

        const patchResponse = await fetch(`${API_URL}/${currentGameId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: gameData })
        });

        const patchData = await patchResponse.json();
        currentRoundNumber = patchData.data.currentRoundNumber;
        console.log("Game started: ", currentGameId);
        console.log("Current round number: ", currentRoundNumber);

        toggleMenu();
        showRoundNumber(currentRoundNumber);
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
}

export async function playRound(move) {
    try {
        const getResponse = await fetch(`${API_URL}/${currentGameId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        const getData = await getResponse.json();

        const updatedGameData = applyPlayerMove(getData.data, move);

        const patchResponse = await fetch(`${API_URL}/${currentGameId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: updatedGameData })
        });

        const patchData = await patchResponse.json();
        currentRoundNumber = patchData.data.currentRoundNumber;

        const lastRound = patchData.data.rounds[currentRoundNumber - 2];
        const winner = lastRound.winner;
        const computerMove = lastRound.computerMove;

        toggleGame();
        showRoundNumber(currentRoundNumber);
        showResult(computerMove, winner);
    } catch (error) {
        console.log("Something went wrong: ", error);
    }
}
