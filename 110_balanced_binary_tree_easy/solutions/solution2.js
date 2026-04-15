function isBalanced(root) {
  function dfs(node) {
    if (node === null) return 0;

    const left = dfs(node.left);
    if (left === -1) return -1;

    const right = dfs(node.right);
    if (right === -1) return -1;

    if (left - right > 1 || right - left > 1) {
      return -1;
    }

    return 1 + (left > right ? left : right);
  }

  return dfs(root) !== -1;
}

module.exports = isBalanced;
