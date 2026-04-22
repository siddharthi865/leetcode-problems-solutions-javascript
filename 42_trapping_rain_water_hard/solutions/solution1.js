var trap = function (height) {
  let n = height.length;
  let totalWater = 0;

  for (let i = 0; i < n; i++) {
    let leftMax = 0;
    let rightMax = 0;

    // Find left max
    for (let j = 0; j <= i; j++) {
      if (height[j] > leftMax) {
        leftMax = height[j];
      }
    }

    // Find right max
    for (let j = i; j < n; j++) {
      if (height[j] > rightMax) {
        rightMax = height[j];
      }
    }

    let water = Math.min(leftMax, rightMax) - height[i];
    totalWater += water;
  }

  return totalWater;
};

module.exports = trap;
