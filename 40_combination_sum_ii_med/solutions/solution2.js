var combinationSum2 = function (candidates, target) {
  let result = [];

  // manual sort
  for (let i = 0; i < candidates.length; i++) {
    for (let j = i + 1; j < candidates.length; j++) {
      if (candidates[j] < candidates[i]) {
        let temp = candidates[i];
        candidates[i] = candidates[j];
        candidates[j] = temp;
      }
    }
  }

  function backtrack(start, current, sum) {
    if (sum === target) {
      result.push([...current]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      current.push(candidates[i]);
      backtrack(i + 1, current, sum + candidates[i]);
      current.pop();
    }
  }

  backtrack(0, [], 0);
  return result;
};

module.exports = combinationSum2;
