function search(nums, target) {
  var n = nums.length;

  for (var i = 0; i < n; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
}

module.exports = search;
