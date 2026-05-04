var minPathSum = function (grid) {
  function dfs(i, j) {
    let m = grid.length;
    let n = grid[0].length;

    // Out of bounds
    if (i >= m || j >= n) return Infinity;

    // Destination
    if (i === m - 1 && j === n - 1) {
      return grid[i][j];
    }

    let right = dfs(i, j + 1);
    let down = dfs(i + 1, j);

    return grid[i][j] + (right < down ? right : down);
  }

  return dfs(0, 0);
};

module.exports = minPathSum;
