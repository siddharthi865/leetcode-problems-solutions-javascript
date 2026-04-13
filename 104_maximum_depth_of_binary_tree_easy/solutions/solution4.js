var maxDepth = function (root) {
  if (root === null) return 0;

  let stack = [[root, 1]];
  let max = 0;

  while (stack.length > 0) {
    let pair = stack.pop();
    let node = pair[0];
    let depth = pair[1];

    if (depth > max) max = depth;

    if (node.left !== null) {
      stack.push([node.left, depth + 1]);
    }

    if (node.right !== null) {
      stack.push([node.right, depth + 1]);
    }
  }

  return max;
};

module.exports = maxDepth;
