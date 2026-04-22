var isMatch = function (s, p) {
  let n = s.length;
  let m = p.length;

  let dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(m + 1);
    for (let j = 0; j <= m; j++) {
      dp[i][j] = false;
    }
  }

  dp[0][0] = true;

  // handle patterns like *, **, ***
  for (let j = 1; j <= m; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else if (p[j - 1] === "?" || s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[n][m];
};

module.exports = isMatch;
