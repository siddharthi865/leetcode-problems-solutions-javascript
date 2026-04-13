var maxDepth = function (root) {
  let max = 0;

  function dfs(node, depth) {
    if (node === null) {
      if (depth > max) max = depth;
      return;
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);
  return max;
};

module.exports = maxDepth;
