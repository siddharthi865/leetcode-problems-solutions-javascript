function threeSumClosest(nums, target) {
  let n = nums.length;

  // Selection Sort (no built-in sort)
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    let temp = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = temp;
  }

  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      let diff1 = closestSum - target;
      if (diff1 < 0) diff1 = -diff1;

      let diff2 = sum - target;
      if (diff2 < 0) diff2 = -diff2;

      if (diff2 < diff1) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }

  return closestSum;
}

module.exports = threeSumClosest;
