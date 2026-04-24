function solveNQueens(n) {
  let result = [];
  let board = [];

  // Initialize board
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) row += ".";
    board.push(row);
  }

  function backtrack(row, cols, diag1, diag2) {
    if (row === n) {
      let copy = [];
      for (let i = 0; i < n; i++) copy.push(board[i]);
      result.push(copy);
      return;
    }

    let available = ~(cols | diag1 | diag2) & ((1 << n) - 1);

    while (available !== 0) {
      let position = available & -available; // rightmost 1 bit

      // Find column index
      let col = 0;
      let temp = position;
      while (temp >> 1 !== 0) {
        temp = temp >> 1;
        col++;
      }

      // Place queen
      let original = board[row];
      let newRow = "";
      for (let i = 0; i < n; i++) {
        if (i === col) newRow += "Q";
        else newRow += ".";
      }
      board[row] = newRow;

      // Recurse
      backtrack(
        row + 1,
        cols | position,
        (diag1 | position) << 1,
        (diag2 | position) >> 1,
      );

      // Backtrack
      board[row] = original;

      // Remove this bit
      available = available & (available - 1);
    }
  }

  backtrack(0, 0, 0, 0);
  return result;
}

module.exports = solveNQueens;
