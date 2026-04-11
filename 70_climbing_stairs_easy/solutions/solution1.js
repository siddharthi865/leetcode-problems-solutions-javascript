const climbStairs = (n) => {
  function helper(step) {
    if (step === 0) return 1;
    if (step < 0) return 0;

    return helper(step - 1) + helper(step - 2);
  }

  return helper(n);
};

module.exports = climbStairs;
