function solveSudoku(board) {
  // Track usage
  var rows = new Array(9);
  var cols = new Array(9);
  var boxes = new Array(9);

  for (var i = 0; i < 9; i++) {
    rows[i] = new Array(9).fill(0);
    cols[i] = new Array(9).fill(0);
    boxes[i] = new Array(9).fill(0);
  }

  // Initialize trackers
  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      if (board[r][c] !== ".") {
        var num = board[r][c].charCodeAt(0) - "1".charCodeAt(0);
        var boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

        rows[r][num] = 1;
        cols[c][num] = 1;
        boxes[boxIndex][num] = 1;
      }
    }
  }

  function backtrack(r, c) {
    // Move to next row
    if (c === 9) {
      return backtrack(r + 1, 0);
    }

    // Finished
    if (r === 9) {
      return true;
    }

    // Skip filled cell
    if (board[r][c] !== ".") {
      return backtrack(r, c + 1);
    }

    // Try numbers 1–9
    for (var num = 0; num < 9; num++) {
      var boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (
        rows[r][num] === 0 &&
        cols[c][num] === 0 &&
        boxes[boxIndex][num] === 0
      ) {
        // Place number
        board[r][c] = String.fromCharCode(num + "1".charCodeAt(0));

        rows[r][num] = 1;
        cols[c][num] = 1;
        boxes[boxIndex][num] = 1;

        if (backtrack(r, c + 1)) {
          return true;
        }

        // Backtrack
        board[r][c] = ".";
        rows[r][num] = 0;
        cols[c][num] = 0;
        boxes[boxIndex][num] = 0;
      }
    }

    return false;
  }

  backtrack(0, 0);
}

module.exports = solveSudoku;
