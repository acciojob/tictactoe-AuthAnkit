let submit = document.getElementById("submit");
let message = document.querySelector(".message");
let cells = document.querySelectorAll(".cell");
let game = document.getElementById("game");

let player1, player2;
let currentPlayer;
let symbol = "x";
let active = true;

const wins = [
  ["1","2","3"], ["4","5","6"], ["7","8","9"],
  ["1","4","7"], ["2","5","8"], ["3","6","9"],
  ["1","5","9"], ["3","5","7"]
];

submit.addEventListener("click", () => {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;

  if (!player1 || !player2) return;

  game.classList.remove("hidden");
  currentPlayer = player1;
  message.innerText = `${currentPlayer}, you're up`;
});

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (!active || cell.innerText !== "") return;

    cell.innerText = symbol;

    if (checkWin()) {
      message.innerText = `${currentPlayer} congratulations you won!`;
      active = false;
      return;
    }

    if (symbol === "x") {
      symbol = "o";
      currentPlayer = player2;
    } else {
      symbol = "x";
      currentPlayer = player1;
    }

    message.innerText = `${currentPlayer}, you're up`;
  });
});

function checkWin() {
  return wins.some(pattern =>
    pattern.every(id =>
      document.getElementById(id).innerText === symbol
    )
  );
}
