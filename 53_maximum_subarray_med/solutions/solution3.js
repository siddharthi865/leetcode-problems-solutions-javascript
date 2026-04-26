var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either start new subarray or extend existing one
    if (currentSum + nums[i] > nums[i]) {
      currentSum = currentSum + nums[i];
    } else {
      currentSum = nums[i];
    }

    // Update global maximum
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
};

module.exports = maxSubArray;
