function threeSumClosest(nums, target) {
  let n = nums.length;
  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = nums[i] + nums[j] + nums[k];

        let diff1 = closestSum - target;
        if (diff1 < 0) diff1 = -diff1;

        let diff2 = sum - target;
        if (diff2 < 0) diff2 = -diff2;

        if (diff2 < diff1) {
          closestSum = sum;
        }
      }
    }
  }

  return closestSum;
}

module.exports = threeSumClosest;
