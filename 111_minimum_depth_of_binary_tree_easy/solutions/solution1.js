function minDepth(root) {
  if (root === null) return 0;

  function dfs(node) {
    if (node === null) return Infinity;

    if (node.left === null && node.right === null) {
      return 1;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    return Math.min(left, right) + 1;
  }

  return dfs(root);
}

module.exports = minDepth;
