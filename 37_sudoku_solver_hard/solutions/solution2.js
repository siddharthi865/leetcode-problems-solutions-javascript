function solveSudoku(board) {
  var emptyCells = [];

  // Store all empty cells first
  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      if (board[r][c] === ".") {
        emptyCells.push([r, c]);
      }
    }
  }

  function isValid(board, row, col, ch) {
    for (var i = 0; i < 9; i++) {
      if (board[row][i] === ch) return false;
      if (board[i][col] === ch) return false;
    }

    var startRow = Math.floor(row / 3) * 3;
    var startCol = Math.floor(col / 3) * 3;

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === ch) return false;
      }
    }

    return true;
  }

  function backtrack(index) {
    if (index === emptyCells.length) return true;

    var r = emptyCells[index][0];
    var c = emptyCells[index][1];

    for (var num = 1; num <= 9; num++) {
      var ch = String(num);

      if (isValid(board, r, c, ch)) {
        board[r][c] = ch;

        if (backtrack(index + 1)) return true;

        board[r][c] = ".";
      }
    }

    return false;
  }

  backtrack(0);
}
module.exports = solveSudoku;
