function isBalanced(root) {
  if (root === null) return true;

  const stack = [];
  const heights = new Map();
  let lastVisited = null;
  let current = root;

  while (stack.length > 0 || current !== null) {
    if (current !== null) {
      stack.push(current);
      current = current.left;
    } else {
      const node = stack[stack.length - 1];

      if (node.right !== null && lastVisited !== node.right) {
        current = node.right;
      } else {
        stack.pop();

        const left = heights.get(node.left) || 0;
        const right = heights.get(node.right) || 0;

        if (left - right > 1 || right - left > 1) {
          return false;
        }

        heights.set(node, 1 + (left > right ? left : right));
        lastVisited = node;
      }
    }
  }

  return true;
}

module.exports = isBalanced;
