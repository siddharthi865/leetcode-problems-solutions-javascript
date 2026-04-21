var searchRange = function (nums, target) {
  let start = -1;
  let end = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (start === -1) {
        start = i;
      }
      end = i;
    }
  }

  return [start, end];
};

module.exports = searchRange;
