var maxSubArray = function (nums) {
  let n = nums.length;
  let maxSum = -Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;

      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }

      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
};

module.exports = maxSubArray;
