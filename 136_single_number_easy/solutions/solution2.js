const singleNumber = (nums) => {
  let freq = {};

  // Count frequency
  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]] === undefined) {
      freq[nums[i]] = 1;
    } else {
      freq[nums[i]]++;
    }
  }

  // Find single element
  for (let key in freq) {
    if (freq[key] === 1) {
      return Number(key);
    }
  }
};

module.exports = singleNumber;
