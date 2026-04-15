function minDepth(root) {
  if (root === null) return 0;

  let queue = [];
  queue.push([root, 1]);

  while (queue.length > 0) {
    let front = queue[0];
    queue.shift();

    let node = front[0];
    let depth = front[1];

    if (node.left === null && node.right === null) {
      return depth;
    }

    if (node.left !== null) {
      queue.push([node.left, depth + 1]);
    }

    if (node.right !== null) {
      queue.push([node.right, depth + 1]);
    }
  }
}

module.exports = minDepth;
