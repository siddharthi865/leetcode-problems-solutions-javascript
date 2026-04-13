function isSymmetric(root) {
  let queue = [];
  queue.push(root);
  queue.push(root);

  while (queue.length > 0) {
    let left = queue.shift();
    let right = queue.shift();

    if (left === null && right === null) continue;
    if (left === null || right === null) return false;

    if (left.val !== right.val) return false;

    queue.push(left.left);
    queue.push(right.right);

    queue.push(left.right);
    queue.push(right.left);
  }

  return true;
}

module.exports = isSymmetric;
