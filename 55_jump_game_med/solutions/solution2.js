function canJump(nums) {
  let memo = new Array(nums.length);

  function dfs(index) {
    if (index >= nums.length - 1) return true;
    if (memo[index] !== undefined) return memo[index];

    let maxJump = nums[index];

    for (let step = 1; step <= maxJump; step++) {
      if (dfs(index + step)) {
        memo[index] = true;
        return true;
      }
    }

    memo[index] = false;
    return false;
  }

  return dfs(0);
}

module.exports = canJump;
