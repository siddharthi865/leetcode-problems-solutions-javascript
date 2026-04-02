const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;

  var k = 1; // First element is always unique

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

module.exports = removeDuplicates;
