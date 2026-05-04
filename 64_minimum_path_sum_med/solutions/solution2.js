var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let memo = [];
  for (let i = 0; i < m; i++) {
    memo[i] = [];
    for (let j = 0; j < n; j++) {
      memo[i][j] = -1;
    }
  }

  function dfs(i, j) {
    if (i >= m || j >= n) return Infinity;

    if (i === m - 1 && j === n - 1) {
      return grid[i][j];
    }

    if (memo[i][j] !== -1) return memo[i][j];

    let right = dfs(i, j + 1);
    let down = dfs(i + 1, j);

    let result = grid[i][j] + (right < down ? right : down);
    memo[i][j] = result;

    return result;
  }

  return dfs(0, 0);
};

module.exports = minPathSum;
