function totalNQueens(n) {
  let count = 0;
  let board = new Array(n);

  for (let i = 0; i < n; i++) {
    board[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      board[i][j] = ".";
    }
  }

  function isSafe(row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Check left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // Check right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function backtrack(row) {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = ".";
      }
    }
  }

  backtrack(0);
  return count;
}

module.exports = totalNQueens;
