var preorderTraversal = function (root) {
  let result = [];

  function dfs(node) {
    if (node === null) return;

    result[result.length] = node.val; // visit root
    dfs(node.left); // left
    dfs(node.right); // right
  }

  dfs(root);
  return result;
};

module.exports = preorderTraversal;
