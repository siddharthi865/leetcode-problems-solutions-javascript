function minDepth(root) {
  if (root === null) return 0;

  function dfs(node) {
    if (node === null) return 0;

    if (node.left === null) {
      return dfs(node.right) + 1;
    }

    if (node.right === null) {
      return dfs(node.left) + 1;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    return Math.min(left, right) + 1;
  }

  return dfs(root);
}

module.exports = minDepth;
