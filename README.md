# Rock-Paper-Scissors

### DUMP Internship - JavaScript #2 (Fetch API)

## Task

Web-based **Rock-Paper-Scissors** game built with **HTML, CSS, and JavaScript**, using a **public REST API** to store and manage game state.  
The game simulates online play by persisting data remotely via the **Fetch API**.

## Game Rules

- One game consists of **5 rounds**
- Player plays against a computer bot with **randomly generated moves**
- Game data is stored on `https://restful-api.dev/`

## Features

- Create a new game (5 rounds stored via **POST** requests)
- Play rounds one by one with **Rock / Paper / Scissors**
- Update player moves using **PUT** requests
- Immediate round result display (win / lose / draw)
- Review all rounds and final score (e.g. `2/5`)
- Fetch multiple rounds at once using **GET** requests with query parameters
- No full game state stored locally
- Last played game persists after reload

## Setup

1. Clone or download the repository
2. Open the project folder.
3. Open `index.html` in a web browser
