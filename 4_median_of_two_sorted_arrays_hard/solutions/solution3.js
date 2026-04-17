var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    var temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  var m = nums1.length;
  var n = nums2.length;

  var low = 0;
  var high = m;

  while (low <= high) {
    var partitionX = Math.floor((low + high) / 2);
    var partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    var maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    var minRightX = partitionX === m ? Infinity : nums1[partitionX];

    var maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    var minRightY = partitionY === n ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 === 0) {
        var leftMax = maxLeftX > maxLeftY ? maxLeftX : maxLeftY;
        var rightMin = minRightX < minRightY ? minRightX : minRightY;
        return (leftMax + rightMin) / 2;
      } else {
        return maxLeftX > maxLeftY ? maxLeftX : maxLeftY;
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  return 0;
};

module.exports = findMedianSortedArrays;
