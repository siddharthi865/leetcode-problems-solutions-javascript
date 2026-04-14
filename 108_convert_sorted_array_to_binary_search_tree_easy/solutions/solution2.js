class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;

  let root = new TreeNode(0);

  let stack = [];
  stack.push([root, 0, nums.length - 1]);

  while (stack.length > 0) {
    let current = stack[stack.length - 1];
    stack.length--;

    let node = current[0];
    let left = current[1];
    let right = current[2];

    let mid = left + Math.floor((right - left) / 2);

    node.val = nums[mid];

    // Left subtree
    if (left <= mid - 1) {
      node.left = new TreeNode(0);
      stack.push([node.left, left, mid - 1]);
    }

    // Right subtree
    if (mid + 1 <= right) {
      node.right = new TreeNode(0);
      stack.push([node.right, mid + 1, right]);
    }
  }

  return root;
}

module.exports = sortedArrayToBST;
