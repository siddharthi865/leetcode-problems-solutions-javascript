var hasPathSum = function (root, targetSum) {
  if (root === null) return false;

  const stack = [[root, targetSum]];

  while (stack.length > 0) {
    const current = stack.pop();
    const node = current[0];
    let remainingSum = current[1];

    remainingSum -= node.val;

    // Leaf node
    if (node.left === null && node.right === null) {
      if (remainingSum === 0) return true;
    }

    if (node.right !== null) {
      stack.push([node.right, remainingSum]);
    }

    if (node.left !== null) {
      stack.push([node.left, remainingSum]);
    }
  }

  return false;
};

module.exports = hasPathSum;
