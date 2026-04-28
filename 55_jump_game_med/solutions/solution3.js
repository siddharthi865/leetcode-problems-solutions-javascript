function canJump(nums) {
  let n = nums.length;
  let dp = new Array(n);

  for (let i = 0; i < n; i++) dp[i] = false;
  dp[0] = true;

  for (let i = 0; i < n; i++) {
    if (!dp[i]) continue;

    let maxJump = nums[i];
    for (let step = 1; step <= maxJump && i + step < n; step++) {
      dp[i + step] = true;
    }
  }

  return dp[n - 1];
}

module.exports = canJump;
