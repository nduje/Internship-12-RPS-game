const API_URL = "https://api.restful-api.dev/objects";

export async function addGame(gameData) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(gameData)
    });

    return response.json();
}

export async function getGame(gameId) {
    const response = await fetch(`${API_URL}/${gameId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json"}
    });

    return response.json();
}

export async function updateGame(gameId, gameData) {
    const response = await fetch(`${API_URL}/${gameId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ data: gameData})
    });

    return response.json();
}