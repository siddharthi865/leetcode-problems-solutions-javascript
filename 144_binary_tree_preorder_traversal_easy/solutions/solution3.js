var preorderTraversal = function (root) {
  let result = [];
  let current = root;

  while (current !== null) {
    if (current.left === null) {
      // No left subtree → visit and move right
      result[result.length] = current.val;
      current = current.right;
    } else {
      // Find predecessor (rightmost in left subtree)
      let predecessor = current.left;

      while (predecessor.right !== null && predecessor.right !== current) {
        predecessor = predecessor.right;
      }

      if (predecessor.right === null) {
        // Create thread
        result[result.length] = current.val; // preorder visit
        predecessor.right = current;
        current = current.left;
      } else {
        // Remove thread
        predecessor.right = null;
        current = current.right;
      }
    }
  }

  return result;
};

module.exports = preorderTraversal;
