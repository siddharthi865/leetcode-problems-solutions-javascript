function permute(nums) {
  const result = [];

  function backtrack(start) {
    if (start === nums.length) {
      result.push([...nums]); // Copy current arrangement
      return;
    }
    for (let i = start; i < nums.length; i++) {
      // Swap nums[start] and nums[i]
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      // Swap back
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrack(0);
  return result;
}

module.exports = permute;
