let player1, player2, currentPlayer, gameActive, board;

function startGame() {
  player1 = document.getElementById("player1").value || "Player 1";
  player2 = document.getElementById("player2").value || "Player 2";
  currentPlayer = player1;
  gameActive = true;
  board = ["", "", "", "", "", "", "", "", ""];

  document.getElementById("playerForm").style.display = "none";
  document.getElementById("message").innerText = currentPlayer + "'s turn (X)";
  drawBoard();
}

function drawBoard() {
  const boardDiv = document.getElementById("board");
  boardDiv.innerHTML = "";
  board.forEach((val, index) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    if (val) {
      cell.textContent = val;
      cell.classList.add("taken");
    }
    cell.addEventListener("click", () => makeMove(index, cell));
    boardDiv.appendChild(cell);
  });
}

function makeMove(index, cell) {
  if (!gameActive || board[index]) return;

  const symbol = currentPlayer === player1 ? "X" : "O";
  board[index] = symbol;
  cell.textContent = symbol;
  cell.classList.add("taken");

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
    
