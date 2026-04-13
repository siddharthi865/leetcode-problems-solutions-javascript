var maxDepth = function (root) {
  if (root === null) return 0;

  let queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    depth++;
  }

  return depth;
};

module.exports = maxDepth;
