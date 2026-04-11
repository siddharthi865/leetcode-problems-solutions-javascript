function climbStairs(n) {
  let memo = [];

  function helper(step) {
    if (step === 0) return 1;
    if (step < 0) return 0;

    if (memo[step] !== undefined) return memo[step];

    memo[step] = helper(step - 1) + helper(step - 2);
    return memo[step];
  }

  return helper(n);
}

module.exports = climbStairs;
