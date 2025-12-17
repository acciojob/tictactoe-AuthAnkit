//your JS code here. If required.
let submitBtn = document.getElementById("submit");
let gameDiv = document.getElementById("game");
let formDiv = document.getElementById("player-form");
let messageDiv = document.querySelector(".message");
let cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "x";
let gameActive = true;

const winPatterns = [
	["1","2","3"],
	["4","5","6"],
	["7","8","9"],
	["1","4","7"],
	["2","5","8"],
	["3","6","9"],
	["1","5","9"],
	["3","5","7"]
];

// Start Game
submitBtn.addEventListener("click", function () {
	player1 = document.getElementById("player-1").value;
	player2 = document.getElementById("player-2").value;

	if (player1 === "" || player2 === "") return;

	formDiv.classList.add("hidden");
	gameDiv.classList.remove("hidden");

	currentPlayer = player1;
	messageDiv.innerText = `${currentPlayer}, you're up`;
});

// Cell Click
cells.forEach(cell => {
	cell.addEventListener("click", function () {
		if (!gameActive || cell.innerText !== "") return;

		cell.innerText = currentSymbol;

		if (checkWinner()) {
			messageDiv.innerText = `${currentPlayer} congratulations you won!`;
			gameActive = false;
			return;
		}

		// Switch turn
		if (currentSymbol === "x") {
			currentSymbol = "o";
			currentPlayer = player2;
		} else {
			currentSymbol = "x";
			currentPlayer = player1;
		}

		messageDiv.innerText = `${currentPlayer}, you're up`;
	});
});

// Check Winner
function checkWinner() {
	return winPatterns.some(pattern => {
		return pattern.every(id => {
			return document.getElementById(id).innerText === currentSymbol;
		});
	});
}
