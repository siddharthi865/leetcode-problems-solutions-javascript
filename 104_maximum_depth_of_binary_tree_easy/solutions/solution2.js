var maxDepth = function (root) {
  if (root === null) return 0;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return 1 + (left > right ? left : right);
};

module.exports = maxDepth;
