var postorderTraversal = function (root) {
  const result = [];
  const stack = [];
  let lastVisited = null;
  let current = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack[stack.length] = current;
      current = current.left;
    }

    const peekNode = stack[stack.length - 1];

    if (peekNode.right !== null && lastVisited !== peekNode.right) {
      current = peekNode.right;
    } else {
      result[result.length] = peekNode.val;
      lastVisited = stack.pop();
    }
  }

  return result;
};

module.exports = postorderTraversal;
