function solveNQueens(n) {
  let result = [];
  let board = [];

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) row += ".";
    board.push(row);
  }

  let cols = new Array(n);
  let diag1 = new Array(2 * n);
  let diag2 = new Array(2 * n);

  for (let i = 0; i < n; i++) cols[i] = false;
  for (let i = 0; i < 2 * n; i++) {
    diag1[i] = false;
    diag2[i] = false;
  }

  function backtrack(row) {
    if (row === n) {
      let copy = [];
      for (let i = 0; i < n; i++) copy.push(board[i]);
      result.push(copy);
      return;
    }

    for (let col = 0; col < n; col++) {
      let d1 = row + col;
      let d2 = row - col + n - 1;

      if (cols[col] || diag1[d1] || diag2[d2]) continue;

      cols[col] = true;
      diag1[d1] = true;
      diag2[d2] = true;

      let original = board[row];
      let newRow = "";
      for (let i = 0; i < n; i++) {
        if (i === col) newRow += "Q";
        else newRow += ".";
      }

      board[row] = newRow;

      backtrack(row + 1);

      board[row] = original;
      cols[col] = false;
      diag1[d1] = false;
      diag2[d2] = false;
    }
  }

  backtrack(0);
  return result;
}

module.exports = solveNQueens;
