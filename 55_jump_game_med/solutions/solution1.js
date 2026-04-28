function canJump(nums) {
  function dfs(index) {
    if (index >= nums.length - 1) return true;

    let maxJump = nums[index];

    for (let step = 1; step <= maxJump; step++) {
      if (dfs(index + step)) return true;
    }

    return false;
  }

  return dfs(0);
}

module.exports = canJump;
