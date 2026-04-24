function permute(nums) {
  const result = [];
  const n = nums.length;

  // Control array initialized to 0
  const c = new Array(n);
  for (let i = 0; i < n; i++) c[i] = 0;

  // Add initial permutation
  result.push([...nums]);

  let i = 0;

  while (i < n) {
    if (c[i] < i) {
      // Swap logic based on parity of i
      if (i % 2 === 0) {
        // Swap nums[0] and nums[i]
        let temp = nums[0];
        nums[0] = nums[i];
        nums[i] = temp;
      } else {
        // Swap nums[c[i]] and nums[i]
        let temp = nums[c[i]];
        nums[c[i]] = nums[i];
        nums[i] = temp;
      }

      result.push([...nums]);

      c[i] += 1;
      i = 0;
    } else {
      c[i] = 0;
      i += 1;
    }
  }

  return result;
}

module.exports = permute;
