function totalNQueens(n) {
  let count = 0;

  // Create empty board
  let board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      board[i][j] = ".";
    }
  }

  function isValid() {
    let queens = [];

    // Collect all queen positions
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === "Q") {
          queens[queens.length] = [i, j];
        }
      }
    }

    // Must have exactly n queens
    if (queens.length !== n) return false;

    // Check all pairs
    for (let i = 0; i < queens.length; i++) {
      for (let j = i + 1; j < queens.length; j++) {
        let r1 = queens[i][0],
          c1 = queens[i][1];
        let r2 = queens[j][0],
          c2 = queens[j][1];

        // Same row or column
        if (r1 === r2 || c1 === c2) return false;

        // Same diagonal
        if (r1 - c1 === r2 - c2) return false;
        if (r1 + c1 === r2 + c2) return false;
      }
    }

    return true;
  }

  function generate(index) {
    if (index === n * n) {
      if (isValid()) count++;
      return;
    }

    let row = Math.floor(index / n);
    let col = index % n;

    // Option 1: Place Queen
    board[row][col] = "Q";
    generate(index + 1);

    // Option 2: Don't place Queen
    board[row][col] = ".";
    generate(index + 1);
  }

  generate(0);
  return count;
}

module.exports = totalNQueens;
