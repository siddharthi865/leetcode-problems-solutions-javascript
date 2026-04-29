function getPermutation(n, k) {
  let result = [];

  function backtrack(path, used) {
    if (path.length === n) {
      result.push(path.join(""));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(i);

      backtrack(path, used);

      path.pop();
      used[i] = false;
    }
  }

  backtrack([], {});

  // Manual sort (since no built-in allowed)
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        let temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }

  return result[k - 1];
}

module.exports = getPermutation;
