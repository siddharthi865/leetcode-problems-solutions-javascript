var findMedianSortedArrays = function (nums1, nums2) {
  var m = nums1.length;
  var n = nums2.length;
  var total = m + n;

  var merged = new Array(total);
  var index = 0;

  // Copy nums1
  for (var i = 0; i < m; i++) {
    merged[index++] = nums1[i];
  }

  // Copy nums2
  for (var j = 0; j < n; j++) {
    merged[index++] = nums2[j];
  }

  // Bubble Sort (since no built-in allowed)
  for (var i = 0; i < total - 1; i++) {
    for (var j = 0; j < total - i - 1; j++) {
      if (merged[j] > merged[j + 1]) {
        var temp = merged[j];
        merged[j] = merged[j + 1];
        merged[j + 1] = temp;
      }
    }
  }

  // Find median
  if (total % 2 === 1) {
    return merged[Math.floor(total / 2)];
  } else {
    var mid1 = merged[total / 2 - 1];
    var mid2 = merged[total / 2];
    return (mid1 + mid2) / 2;
  }
};

module.exports = findMedianSortedArrays;
