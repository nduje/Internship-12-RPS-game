import { generateRounds, applyPlayerMove } from "./logic.js";

const API_URL = "https://api.restful-api.dev/objects";

let currentGameId = null;
let previousGameId = null;

let currentRoundNumber = null;

export function createNewGame() {
    fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
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
        })
        .then(response => response.json())
        .then(data => {
            currentGameId = data.id;
            console.log("Game created: ", currentGameId);
        })
        .catch(error => {
            console.log("Something went wrong: ", error);
        });
}

export function startGame() {
        fetch(`${API_URL}/${currentGameId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        const gameData = data.data;

        gameData.status = "started";

        return fetch(`${API_URL}/${currentGameId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: gameData
            })
        });
    })
    .then(response => response.json())
    .then(data => {
        currentGameId = data.id;
        currentRoundNumber = data.data.currentRoundNumber;
        console.log("Game started: ", currentGameId);
        console.log("Current round number: ", currentRoundNumber);
    })
    .catch(error => {
        console.log("Something went wrong: ", error);
    });
}

export function playRound(move) {
        fetch(`${API_URL}/${currentGameId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        const gameData = applyPlayerMove(data.data, move);

        return fetch(`${API_URL}/${currentGameId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: gameData
            })
        });
    })
    .then(response => response.json())
    .then(data => {
        currentGameId = data.id;
        currentRoundNumber = data.data.currentRoundNumber;
        let winner = data.data.rounds[data.data.currentRoundNumber - 2].winner;
        let computerMove = data.data.rounds[data.data.currentRoundNumber - 2].computerMove;
        console.log("Game started: ", currentGameId);
        console.log("Current round number: ", currentRoundNumber);
        console.log("Winner: ", winner);
        console.log("Computer played: ", computerMove);
    })
    .catch(error => {
        console.log("Something went wrong: ", error);
    });
}