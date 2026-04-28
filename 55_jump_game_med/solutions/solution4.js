function canJump(nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;

    let reach = i + nums[i];
    if (reach > maxReach) {
      maxReach = reach;
    }
  }

  return true;
}

module.exports = canJump;
