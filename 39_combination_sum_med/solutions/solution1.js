var combinationSum = function (candidates, target) {
  let result = [];

  function backtrack(index, current, sum) {
    // Base case
    if (sum === target) {
      result.push([...current]);
      return;
    }

    if (sum > target || index === candidates.length) {
      return;
    }

    // Pick current element (stay at same index since unlimited usage)
    current.push(candidates[index]);
    backtrack(index, current, sum + candidates[index]);

    // Backtrack
    current.pop();

    // Skip current element
    backtrack(index + 1, current, sum);
  }

  backtrack(0, [], 0);
  return result;
};

module.exports = combinationSum;
