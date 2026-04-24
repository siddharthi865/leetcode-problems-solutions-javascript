function permute(nums) {
  const result = [];
  const visited = new Array(nums.length).fill(false);

  function backtrack(path) {
    if (path.length === nums.length) {
      result.push([...path]); // Add a copy of path
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      path.push(nums[i]);
      backtrack(path);
      path.pop(); // backtrack
      visited[i] = false;
    }
  }

  backtrack([]);
  return result;
}

module.exports = permute;
