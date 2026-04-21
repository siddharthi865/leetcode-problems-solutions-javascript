var searchRange = function (nums, target) {
  function findFirst(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);

      if (nums[mid] === target) {
        result = mid;
        right = mid - 1; // keep searching left
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  function findLast(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);

      if (nums[mid] === target) {
        result = mid;
        left = mid + 1; // keep searching right
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  let first = findFirst(nums, target);
  let last = findLast(nums, target);

  return [first, last];
};

module.exports = searchRange;
