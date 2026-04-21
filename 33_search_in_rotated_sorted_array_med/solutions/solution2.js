function search(nums, target) {
  var low = 0;
  var high = nums.length - 1;

  while (low <= high) {
    var mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Check if left half is sorted
    if (nums[low] <= nums[mid]) {
      // Target lies in left half
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // Right half is sorted
    else {
      // Target lies in right half
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

module.exports = search;
