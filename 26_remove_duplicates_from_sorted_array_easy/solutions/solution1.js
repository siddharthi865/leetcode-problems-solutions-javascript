const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;

  var temp = [];
  temp[0] = nums[0];
  var k = 1;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      temp[k] = nums[i];
      k++;
    }
  }

  // Copy back to nums
  for (var i = 0; i < k; i++) {
    nums[i] = temp[i];
  }

  return k;
};

module.exports = removeDuplicates;
