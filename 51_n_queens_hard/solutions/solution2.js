function solveNQueens(n) {
  let result = [];
  let board = [];

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) row += ".";
    board.push(row);
  }

  function isSafe(row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Check diagonal (top-left)
    let i = row - 1;
    let j = col - 1;
    while (i >= 0 && j >= 0) {
      if (board[i][j] === "Q") return false;
      i--;
      j--;
    }

    // Check diagonal (top-right)
    i = row - 1;
    j = col + 1;
    while (i >= 0 && j < n) {
      if (board[i][j] === "Q") return false;
      i--;
      j++;
    }

    return true;
  }

  function backtrack(row) {
    if (row === n) {
      let copy = [];
      for (let i = 0; i < n; i++) copy.push(board[i]);
      result.push(copy);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        let original = board[row];

        let newRow = "";
        for (let i = 0; i < n; i++) {
          if (i === col) newRow += "Q";
          else newRow += ".";
        }

        board[row] = newRow;

        backtrack(row + 1);

        board[row] = original;
      }
    }
  }

  backtrack(0);
  return result;
}

module.exports = solveNQueens;
