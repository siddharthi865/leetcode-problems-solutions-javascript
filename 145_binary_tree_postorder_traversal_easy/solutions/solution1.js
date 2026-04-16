var postorderTraversal = function (root) {
  const result = [];

  function dfs(node) {
    if (node === null) return;

    dfs(node.left);
    dfs(node.right);
    result[result.length] = node.val;
  }

  dfs(root);
  return result;
};

module.exports = postorderTraversal;
