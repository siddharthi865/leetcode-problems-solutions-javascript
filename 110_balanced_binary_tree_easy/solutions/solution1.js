function isBalanced(root) {
  if (root === null) return true;

  function height(node) {
    if (node === null) return 0;

    const left = height(node.left);
    const right = height(node.right);

    return 1 + (left > right ? left : right);
  }

  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  if (leftHeight - rightHeight > 1 || rightHeight - leftHeight > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
}

module.exports = isBalanced;
