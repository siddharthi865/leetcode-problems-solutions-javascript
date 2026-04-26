var maxSubArray = function (nums) {
  let n = nums.length;
  let maxSum = -Infinity;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += nums[j];

      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
};

module.exports = maxSubArray;
