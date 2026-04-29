function getPermutation(n, k) {
  let count = 0;
  let answer = "";
  let used = {};

  function backtrack(path) {
    if (path.length === n) {
      count++;

      if (count === k) {
        answer = path.join("");
        return true; // stop further recursion
      }
      return false;
    }

    for (let i = 1; i <= n; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(i);

      if (backtrack(path)) return true;

      path.pop();
      used[i] = false;
    }

    return false;
  }

  backtrack([]);
  return answer;
}

module.exports = getPermutation;
