var combinationSum2 = function (candidates, target) {
  let result = [];

  // Manual sort (since no built-in allowed)
  function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }

  sort(candidates);

  function backtrack(start, current, sum) {
    if (sum === target) {
      result.push([...current]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      // 🚫 Skip duplicates
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      // Early stopping (since sorted)
      if (sum + candidates[i] > target) break;

      current.push(candidates[i]);
      backtrack(i + 1, current, sum + candidates[i]);
      current.pop();
    }
  }

  backtrack(0, [], 0);
  return result;
};

module.exports = combinationSum2;
