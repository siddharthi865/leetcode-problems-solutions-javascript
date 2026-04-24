var jump = function (nums) {
  let n = nums.length;
  let dp = new Array(n);

  for (let i = 0; i < n; i++) dp[i] = Infinity;
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let step = 1; step <= nums[i]; step++) {
      let nextIndex = i + step;

      if (nextIndex < n) {
        if (dp[i] + 1 < dp[nextIndex]) {
          dp[nextIndex] = dp[i] + 1;
        }
      }
    }
  }

  return dp[n - 1];
};

module.exports = jump;
