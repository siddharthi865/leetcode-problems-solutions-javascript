var preorderTraversal = function (root) {
  let result = [];
  if (root === null) return result;

  let stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();

    result[result.length] = node.val;

    // Push right first
    if (node.right !== null) {
      stack[stack.length] = node.right;
    }

    // Push left second
    if (node.left !== null) {
      stack[stack.length] = node.left;
    }
  }

  return result;
};

module.exports = preorderTraversal;
