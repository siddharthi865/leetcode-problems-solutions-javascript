var nextPermutation = function (nums) {
  let n = nums.length;

  // Step 1: Find pivot (first decreasing element from right)
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // Step 2: If pivot exists, find element just larger than nums[i]
  if (i >= 0) {
    let j = n - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    // Swap nums[i] and nums[j]
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  // Step 3: Reverse the suffix (i+1 to end)
  let left = i + 1;
  let right = n - 1;

  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right--;
  }
};

module.exports = nextPermutation;
