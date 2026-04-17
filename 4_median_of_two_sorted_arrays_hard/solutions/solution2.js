var findMedianSortedArrays = function (nums1, nums2) {
  var m = nums1.length;
  var n = nums2.length;
  var total = m + n;

  var merged = new Array(total);

  var i = 0,
    j = 0,
    k = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      merged[k++] = nums1[i++];
    } else {
      merged[k++] = nums2[j++];
    }
  }

  while (i < m) {
    merged[k++] = nums1[i++];
  }

  while (j < n) {
    merged[k++] = nums2[j++];
  }

  if (total % 2 === 1) {
    return merged[Math.floor(total / 2)];
  } else {
    var mid1 = merged[total / 2 - 1];
    var mid2 = merged[total / 2];
    return (mid1 + mid2) / 2;
  }
};

module.exports = findMedianSortedArrays;
