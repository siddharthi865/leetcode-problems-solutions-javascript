function solveSudoku(board) {
  function isValid(board, row, col, ch) {
    // Check row
    for (var i = 0; i < 9; i++) {
      if (board[row][i] === ch) return false;
    }

    // Check column
    for (var i = 0; i < 9; i++) {
      if (board[i][col] === ch) return false;
    }

    // Check 3x3 box
    var startRow = Math.floor(row / 3) * 3;
    var startCol = Math.floor(col / 3) * 3;

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === ch) return false;
      }
    }

    return true;
  }

  function backtrack(board) {
    for (var r = 0; r < 9; r++) {
      for (var c = 0; c < 9; c++) {
        if (board[r][c] === ".") {
          for (var num = 1; num <= 9; num++) {
            var ch = String(num);

            if (isValid(board, r, c, ch)) {
              board[r][c] = ch;

              if (backtrack(board)) return true;

              board[r][c] = ".";
            }
          }

          return false; // no valid number
        }
      }
    }
    return true; // solved
  }

  backtrack(board);
}

module.exports = solveSudoku;
