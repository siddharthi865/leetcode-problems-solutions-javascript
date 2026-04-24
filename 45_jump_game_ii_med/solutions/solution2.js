var jump = function (nums) {
  let memo = new Array(nums.length);

  function helper(index) {
    if (index >= nums.length - 1) return 0;
    if (memo[index] !== undefined) return memo[index];

    let minJumps = Infinity;

    for (let step = 1; step <= nums[index]; step++) {
      let nextIndex = index + step;

      if (nextIndex < nums.length) {
        let jumps = helper(nextIndex);
        if (jumps !== Infinity) {
          if (jumps + 1 < minJumps) {
            minJumps = jumps + 1;
          }
        }
      }
    }

    memo[index] = minJumps;
    return minJumps;
  }

  return helper(0);
};

module.exports = jump;
