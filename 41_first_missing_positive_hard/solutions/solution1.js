function firstMissingPositive(nums) {
  let n = nums.length;

  for (let i = 1; i <= n + 1; i++) {
    let found = false;

    for (let j = 0; j < n; j++) {
      if (nums[j] === i) {
        found = true;
        break;
      }
    }

    if (!found) return i;
  }
}

module.exports = firstMissingPositive;
