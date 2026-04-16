var postorderTraversal = function (root) {
  if (root === null) return [];

  const stack1 = [];
  const stack2 = [];
  const result = [];

  stack1[stack1.length] = root;

  while (stack1.length > 0) {
    const node = stack1.pop();
    stack2[stack2.length] = node;

    if (node.left !== null) {
      stack1[stack1.length] = node.left;
    }

    if (node.right !== null) {
      stack1[stack1.length] = node.right;
    }
  }

  while (stack2.length > 0) {
    result[result.length] = stack2.pop().val;
  }

  return result;
};

module.exports = postorderTraversal;
