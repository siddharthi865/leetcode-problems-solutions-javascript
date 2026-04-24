var jump = function (nums) {
  function helper(index) {
    if (index >= nums.length - 1) return 0;

    let minJumps = Infinity;

    for (let step = 1; step <= nums[index]; step++) {
      let nextIndex = index + step;

      if (nextIndex < nums.length) {
        let jumps = helper(nextIndex);
        if (jumps !== Infinity) {
          minJumps = Math.min(minJumps, jumps + 1);
        }
      }
    }

    return minJumps;
  }

  return helper(0);
};

module.exports = jump;
