const merge = (nums1, m, nums2, n) => {
  // Step 1: Copy nums2 into nums1
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  // Step 2: Bubble Sort
  let total = m + n;

  for (let i = 0; i < total - 1; i++) {
    for (let j = 0; j < total - i - 1; j++) {
      if (nums1[j] > nums1[j + 1]) {
        let temp = nums1[j];
        nums1[j] = nums1[j + 1];
        nums1[j + 1] = temp;
      }
    }
  }
};

module.exports = merge;
