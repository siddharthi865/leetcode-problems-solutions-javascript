class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function build(nums, left, right) {
  if (left > right) {
    return null;
  }

  // Find middle
  let mid = left + Math.floor((right - left) / 2);

  let root = new TreeNode(nums[mid]);

  // Build left subtree
  root.left = build(nums, left, mid - 1);

  // Build right subtree
  root.right = build(nums, mid + 1, right);

  return root;
}

function sortedArrayToBST(nums) {
  return build(nums, 0, nums.length - 1);
}

module.exports = sortedArrayToBST;
