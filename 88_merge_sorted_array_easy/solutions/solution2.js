const merge = (nums1, m, nums2, n) => {
  let result = new Array(m + n);

  let i = 0,
    j = 0,
    k = 0;

  // Merge both arrays
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      result[k++] = nums1[i++];
    } else {
      result[k++] = nums2[j++];
    }
  }

  // Remaining elements
  while (i < m) {
    result[k++] = nums1[i++];
  }

  while (j < n) {
    result[k++] = nums2[j++];
  }

  // Copy back to nums1
  for (let x = 0; x < m + n; x++) {
    nums1[x] = result[x];
  }
};

module.exports = merge;
