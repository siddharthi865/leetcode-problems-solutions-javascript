const searchInsert = (nums, target) => {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }

  return n;
};

module.exports = searchInsert;
