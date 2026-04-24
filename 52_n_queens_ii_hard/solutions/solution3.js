function totalNQueens(n) {
  let count = 0;

  function backtrack(row, cols, diag1, diag2) {
    if (row === n) {
      count++;
      return;
    }

    let available = ((1 << n) - 1) & ~(cols | diag1 | diag2);

    while (available !== 0) {
      let position = available & -available;
      available = available ^ position;

      backtrack(
        row + 1,
        cols | position,
        (diag1 | position) << 1,
        (diag2 | position) >> 1,
      );
    }
  }

  backtrack(0, 0, 0, 0);
  return count;
}

module.exports = totalNQueens;
