function uniquePaths(m, n) {
  let N = m + n - 2;
  let r = m - 1;

  let result = 1;

  for (let i = 1; i <= r; i++) {
    result = (result * (N - r + i)) / i;
  }

  return Math.round(result);
}

module.exports = uniquePaths;
