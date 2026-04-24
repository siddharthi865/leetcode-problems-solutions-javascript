function totalNQueens(n) {
  let count = 0;

  let columns = new Array(n);
  let diag1 = new Array(2 * n);
  let diag2 = new Array(2 * n);

  for (let i = 0; i < n; i++) columns[i] = false;
  for (let i = 0; i < 2 * n; i++) {
    diag1[i] = false;
    diag2[i] = false;
  }

  function backtrack(row) {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      let d1 = row + col;
      let d2 = row - col + (n - 1);

      if (columns[col] || diag1[d1] || diag2[d2]) continue;

      columns[col] = true;
      diag1[d1] = true;
      diag2[d2] = true;

      backtrack(row + 1);

      columns[col] = false;
      diag1[d1] = false;
      diag2[d2] = false;
    }
  }

  backtrack(0);
  return count;
}

module.exports = totalNQueens;
