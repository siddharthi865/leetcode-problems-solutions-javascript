function threeSum(nums) {
  let result = [];
  let seen = {};

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let a = nums[i];
          let b = nums[j];
          let c = nums[k];

          // sort triplet manually
          if (a > b) {
            let t = a;
            a = b;
            b = t;
          }
          if (a > c) {
            let t = a;
            a = c;
            c = t;
          }
          if (b > c) {
            let t = b;
            b = c;
            c = t;
          }

          let key = a + "," + b + "," + c;

          if (!seen[key]) {
            result[result.length] = [a, b, c];
            seen[key] = 1;
          }
        }
      }
    }
  }

  return result;
}

module.exports = threeSum;
