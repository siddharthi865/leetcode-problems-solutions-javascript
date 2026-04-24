function solveNQueens(n) {
  let result = [];
  let board = [];

  // Initialize empty board
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) row += ".";
    board.push(row);
  }

  function isValid(board) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === "Q") {
          // Check row, col, diagonals
          for (let k = 0; k < n; k++) {
            if (k !== j && board[i][k] === "Q") return false;
            if (k !== i && board[k][j] === "Q") return false;
          }

          for (let x = -n; x < n; x++) {
            let r = i + x;
            let c = j + x;
            if (r >= 0 && r < n && c >= 0 && c < n && (r !== i || c !== j)) {
              if (board[r][c] === "Q") return false;
            }

            r = i + x;
            c = j - x;
            if (r >= 0 && r < n && c >= 0 && c < n && (r !== i || c !== j)) {
              if (board[r][c] === "Q") return false;
            }
          }
        }
      }
    }
    return true;
  }

  function generate(row, queensPlaced) {
    if (queensPlaced === n) {
      if (isValid(board)) {
        let copy = [];
        for (let i = 0; i < n; i++) copy.push(board[i]);
        result.push(copy);
      }
      return;
    }

    if (row >= n) return;

    for (let col = 0; col < n; col++) {
      let original = board[row];
      let newRow = "";
      for (let i = 0; i < n; i++) {
        if (i === col) newRow += "Q";
        else newRow += original[i];
      }

      board[row] = newRow;
      generate(row + 1, queensPlaced + 1);

      board[row] = original;
    }
  }

  generate(0, 0);
  return result;
}

module.exports = solveNQueens;
