const inorderTraversal = (root) => {
  let result = [];

  function traverse(node) {
    if (node === null) return;

    traverse(node.left); // Left
    result[result.length] = node.val; // Root
    traverse(node.right); // Right
  }

  traverse(root);
  return result;
};

module.exports = inorderTraversal;
