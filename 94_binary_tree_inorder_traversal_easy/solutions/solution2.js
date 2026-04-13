const inorderTraversal = (root) => {
  let result = [];
  let stack = [];
  let current = root;

  while (current !== null || stack.length !== 0) {
    // Go left as much as possible
    while (current !== null) {
      stack[stack.length] = current;
      current = current.left;
    }

    // Process node
    current = stack[stack.length - 1];
    stack.length = stack.length - 1;

    result[result.length] = current.val;

    // Move to right subtree
    current = current.right;
  }

  return result;
};

module.exports = inorderTraversal;
