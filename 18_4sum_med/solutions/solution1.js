function fourSum(nums, target) {
  const result = [];
  const n = nums.length;

  for (let a = 0; a < n - 3; a++) {
    for (let b = a + 1; b < n - 2; b++) {
      for (let c = b + 1; c < n - 1; c++) {
        for (let d = c + 1; d < n; d++) {
          if (nums[a] + nums[b] + nums[c] + nums[d] === target) {
            const quad = [nums[a], nums[b], nums[c], nums[d]];

            let exists = false;

            for (let k = 0; k < result.length; k++) {
              let count = 0;

              for (let m = 0; m < 4; m++) {
                for (let p = 0; p < 4; p++) {
                  if (result[k][m] === quad[p]) {
                    count++;
                    break;
                  }
                }
              }

              if (count === 4) {
                exists = true;
                break;
              }
            }

            if (!exists) result[result.length] = quad;
          }
        }
      }
    }
  }

  return result;
}

module.exports = fourSum;
