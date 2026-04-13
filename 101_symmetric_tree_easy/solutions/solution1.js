function isSymmetric(root) {
  function clone(node) {
    if (node === null) return null;

    let newNode = { val: node.val, left: null, right: null };
    newNode.left = clone(node.left);
    newNode.right = clone(node.right);

    return newNode;
  }

  function mirror(node) {
    if (node === null) return null;

    let newNode = { val: node.val, left: null, right: null };
    newNode.left = mirror(node.right);
    newNode.right = mirror(node.left);

    return newNode;
  }

  function isSame(a, b) {
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;

    if (a.val !== b.val) return false;

    return isSame(a.left, b.left) && isSame(a.right, b.right);
  }

  let cloned = clone(root);
  let mirrored = mirror(root);

  return isSame(cloned, mirrored);
}

module.exports = isSymmetric;
