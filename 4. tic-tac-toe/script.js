document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const restartBtn = document.getElementById("restartBtn");
  const player1Input = document.getElementById("player1");
  const player2Input = document.getElementById("player2");
  const playerSetup = document.getElementById("player-setup");
  const gameSection = document.getElementById("game");
  const boardElement = document.getElementById("board");
  const turnInfo = document.getElementById("turn-info");
  const winnerDisplay = document.getElementById("winner");

  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let player1 = "";
  let player2 = "";
  let gameActive = false;

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function renderBoard() {
    boardElement.innerHTML = "";
    board.forEach((cell, index) => {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.textContent = cell;
      cellElement.addEventListener("click", () => makeMove(index));
      boardElement.appendChild(cellElement);
    });
  }

  function makeMove(index) {
    if (!gameActive || board[index] !== "") return;

    board[index] = currentPlayer;
    renderBoard();

    if (checkWinner()) {
      const winnerName = currentPlayer === "X" ? player1 : player2;
      winnerDisplay.textContent = `🎉 ${winnerName} wins!`;
      gameActive = false;
      return;
    }

    if (!board.includes("")) {
      winnerDisplay.textContent = "🤝 It's a Draw!";
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    const nextPlayerName = currentPlayer === "X" ? player1 : player2;
    turnInfo.textContent = `${nextPlayerName}'s turn (${currentPlayer})`;
  }

  function checkWinner() {
    return winningCombinations.some((combo) => {
      return (
        board[combo[0]] &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[0]] === board[combo[2]]
      );
    });
  }

  function resetGame() {
    playerSetup.classList.remove("hidden");
    gameSection.classList.add("hidden");
    player1Input.value = "";
    player2Input.value = "";
  }

  startBtn.addEventListener("click", startGame() {
    player1 = player1Input.value.trim() || "Player 1";
    player2 = player2Input.value.trim() || "Player 2";
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    winnerDisplay.textContent = "";

    playerSetup.classList.add("hidden");
    gameSection.classList.remove("hidden");

    turnInfo.textContent = `${player1}'s turn (X)`;
    renderBoard();
  });
  restartBtn.addEventListener("click", restartGame);
});

  if (checkWinner(symbol)) {
    document.getElementById("message").innerText = "🎉 " + currentPlayer + " wins!";
    highlightWinner(symbol);
    gameActive = false;
    document.getElementById("reset").style.display = "block";
    return;
  }

  if (board.every(cell => cell !== "")) {
    document.getElementById("message").innerText = "🤝 It's a draw!";
    gameActive = false;
    document.getElementById("reset").style.display = "block";
    return;
  }

  currentPlayer = currentPlayer === player1 ? player2 : player1;
  document.getElementById("message").innerText =
    currentPlayer + "'s turn (" + (currentPlayer === player1 ? "X" : "O") + ")";
}

function checkWinner(symbol) {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winPatterns.some(pattern =>
    pattern.every(index => board[index] === symbol)
  );
}

function highlightWinner(symbol) {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  winPatterns.forEach(pattern => {
    if (pattern.every(index => board[index] === symbol)) {
      const boardDiv = document.getElementById("board").children;
      pattern.forEach(index => {
        boardDiv[index].classList.add("win");
      });
    }
  });
}

function resetGame() {
  document.getElementById("playerForm").style.display = "block";
  document.getElementById("message").innerText = "";
  document.getElementById("board").innerHTML = "";
  document.getElementById("reset").style.display = "none";
}

  if (checkWinner(symbol)) {
    document.getElementById("message").innerText = "🎉 " + currentPlayer + " wins!";
    gameActive = false;
    document.getElementById("reset").style.display = "block";
    return;
  }

  if (board.every(cell => cell !== "")) {
    document.getElementById("message").innerText = "🤝 It's a draw!";
    gameActive = false;
    document.getElementById("reset").style.display = "block";
    return;
  }

  currentPlayer = currentPlayer === player1 ? player2 : player1;
  document.getElementById("message").innerText =
    currentPlayer + "'s turn (" + (currentPlayer === player1 ? "X" : "O") + ")";
}

function checkWinner(symbol) {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winPatterns.some(pattern =>
    pattern.every(index => board[index] === symbol)
  );
}

function resetGame() {
  document.getElementById("playerForm").style.display = "block";
  document.getElementById("message").innerText = "";
  document.getElementById("board").innerHTML = "";
  document.getElementById("reset").style.display = "none";
    }
    
