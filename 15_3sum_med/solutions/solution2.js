function threeSum(nums) {
  let result = [];
  let unique = {};

  for (let i = 0; i < nums.length; i++) {
    let seen = {};

    for (let j = i + 1; j < nums.length; j++) {
      let complement = -nums[i] - nums[j];

      if (seen[complement] === 1) {
        let a = nums[i];
        let b = nums[j];
        let c = complement;

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

        if (!unique[key]) {
          unique[key] = true;
          result[result.length] = [a, b, c];
        }
      }

      seen[nums[j]] = 1;
    }
  }

  return result;
}

module.exports = threeSum;
