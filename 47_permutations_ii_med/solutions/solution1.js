function permuteUnique(nums) {
  const results = [];
  const n = nums.length;

  function backtrack(path, used) {
    if (path.length === n) {
      results.push([...path]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack(path, used);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([], Array(n).fill(false));

  // Remove duplicates
  const uniqueResults = [];
  const seen = new Set();
  for (let perm of results) {
    const key = perm.join(",");
    if (!seen.has(key)) {
      seen.add(key);
      uniqueResults.push(perm);
    }
  }
  return uniqueResults;
}

module.exports = permuteUnique;
