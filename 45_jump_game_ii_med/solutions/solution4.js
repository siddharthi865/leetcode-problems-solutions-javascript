var jump = function (nums) {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    // Update farthest reachable index
    if (i + nums[i] > farthest) {
      farthest = i + nums[i];
    }

    // End of current jump range
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
};

module.exports = jump;
