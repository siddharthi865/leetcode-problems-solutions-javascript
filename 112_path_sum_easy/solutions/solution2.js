var hasPathSum = function (root, targetSum) {
  if (root === null) return false;

  function dfs(node, remainingSum) {
    if (node === null) return false;

    remainingSum -= node.val;

    // Leaf node
    if (node.left === null && node.right === null) {
      return remainingSum === 0;
    }

    return dfs(node.left, remainingSum) || dfs(node.right, remainingSum);
  }

  return dfs(root, targetSum);
};

module.exports = hasPathSum;
