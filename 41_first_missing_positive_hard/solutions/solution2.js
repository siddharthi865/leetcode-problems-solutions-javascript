function firstMissingPositive(nums) {
  let n = nums.length;
  let set = {};

  for (let i = 0; i < n; i++) {
    set[nums[i]] = true;
  }

  for (let i = 1; i <= n + 1; i++) {
    if (!set[i]) return i;
  }
}

module.exports = firstMissingPositive;
