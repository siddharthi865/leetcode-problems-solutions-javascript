function threeSum(nums) {
  // Manual sort (selection sort)
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }

    let temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }

  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result[result.length] = [nums[i], nums[left], nums[right]];

        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

module.exports = threeSum;
