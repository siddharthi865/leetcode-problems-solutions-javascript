var hasPathSum = function (root, targetSum) {
  if (root === null) return false;

  const paths = [];

  function dfs(node, currentPath) {
    if (node === null) return;

    currentPath.push(node.val);

    // Leaf node
    if (node.left === null && node.right === null) {
      paths.push([...currentPath]);
    } else {
      dfs(node.left, currentPath);
      dfs(node.right, currentPath);
    }

    currentPath.pop(); // backtrack
  }

  dfs(root, []);

  // Check each path sum
  for (let i = 0; i < paths.length; i++) {
    let sum = 0;
    for (let j = 0; j < paths[i].length; j++) {
      sum += paths[i][j];
    }
    if (sum === targetSum) return true;
  }

  return false;
};

module.exports = hasPathSum;
