var trap = function (height) {
  let n = height.length;
  let leftMax = new Array(n);
  let rightMax = new Array(n);
  let totalWater = 0;

  // Fill leftMax
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    if (leftMax[i - 1] > height[i]) {
      leftMax[i] = leftMax[i - 1];
    } else {
      leftMax[i] = height[i];
    }
  }

  // Fill rightMax
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (rightMax[i + 1] > height[i]) {
      rightMax[i] = rightMax[i + 1];
    } else {
      rightMax[i] = height[i];
    }
  }

  // Calculate water
  for (let i = 0; i < n; i++) {
    let minHeight = leftMax[i] < rightMax[i] ? leftMax[i] : rightMax[i];
    totalWater += minHeight - height[i];
  }

  return totalWater;
};

module.exports = trap;
