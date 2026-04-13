const isSameTree = (p, q) => {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  var leftSame = isSameTree(p.left, q.left);
  var rightSame = isSameTree(p.right, q.right);

  return leftSame && rightSame;
};

module.exports = isSameTree;
