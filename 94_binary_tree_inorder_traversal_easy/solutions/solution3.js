const inorderTraversal = (root) => {
  let result = [];
  let current = root;

  while (current !== null) {
    if (current.left === null) {
      result[result.length] = current.val;
      current = current.right;
    } else {
      let predecessor = current.left;

      // Find rightmost node in left subtree
      while (predecessor.right !== null && predecessor.right !== current) {
        predecessor = predecessor.right;
      }

      if (predecessor.right === null) {
        // Create thread
        predecessor.right = current;
        current = current.left;
      } else {
        // Remove thread
        predecessor.right = null;
        result[result.length] = current.val;
        current = current.right;
      }
    }
  }

  return result;
};

module.exports = inorderTraversal;
