function isMatch(s, p) {
  let m = s.length;
  let n = p.length;

  let dp = [];

  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      dp[i][j] = false;
    }
  }

  dp[0][0] = true;

  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2];

        if (p[j - 2] === "." || p[j - 2] === s[i - 1]) {
          if (dp[i - 1][j]) {
            dp[i][j] = true;
          }
        }
      }
    }
  }

  return dp[m][n];
}

module.exports = isMatch;
