const removeElement = (nums, val) => {
  let temp = [];
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      temp[k] = nums[i];
      k++;
    }
  }

  for (let i = 0; i < k; i++) {
    nums[i] = temp[i];
  }

  return k;
};

module.exports = removeElement;
