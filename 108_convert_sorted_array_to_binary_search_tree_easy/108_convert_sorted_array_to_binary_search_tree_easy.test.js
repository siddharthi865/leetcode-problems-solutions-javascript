// Import only Solution 2 and Solution 3
const sortedArrayToBSTRecursive = require("./solutions/solution1");
const sortedArrayToBSTIterative = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Recursive (Optimal)", fn: sortedArrayToBSTRecursive },
  { name: "Iterative (Stack)", fn: sortedArrayToBSTIterative },
];

// Helper: Inorder Traversal
function inorder(root, arr = []) {
  if (!root) return arr;
  inorder(root.left, arr);
  arr[arr.length] = root.val;
  inorder(root.right, arr);
  return arr;
}

// Helper: Check Height Balanced
function isBalanced(root) {
  function height(node) {
    if (!node) return 0;

    let left = height(node.left);
    if (left === -1) return -1;

    let right = height(node.right);
    if (right === -1) return -1;

    if (left - right > 1 || right - left > 1) return -1;

    return (left > right ? left : right) + 1;
  }

  return height(root) !== -1;
}

// Store test cases (VALID sorted arrays only)
const testCases = [
  { nums: [0] },
  { nums: [1, 3] },
  { nums: [-10, -3, 0, 5, 9] },
  { nums: [1, 2, 3] },
  { nums: [1, 2, 3, 4] },
  { nums: [1, 2, 3, 4, 5] },
  { nums: [-5, -4, -3, -2, -1] },
  { nums: [0, 1, 2, 3, 4, 5, 6] },
  { nums: [-3, -1, 0, 2, 4, 6] },
  { nums: [10, 20, 30, 40, 50, 60] },
  { nums: [-10, -5, 0, 5, 10, 15] },
  { nums: [1, 2, 3, 4, 5, 6, 7, 8] },
  { nums: [-8, -6, -4, -2, 0, 2, 4, 6] },
  { nums: [5, 10, 15, 20, 25, 30, 35] },
  { nums: [1, 3, 5, 7, 9, 11, 13] },
  { nums: [-7, -3, -1, 2, 4, 6, 8] },
  { nums: [2, 4, 6, 8, 10, 12, 14, 16, 18] },
  { nums: [-9, -7, -5, -3, -1, 1, 3, 5, 7] },
  { nums: [100] },
  { nums: [-100, 0, 100] },
  { nums: [-1000, -500, 0, 500, 1000] },
  { nums: [1, 2] },
  { nums: [1, 2, 3, 4, 5, 6] },
  { nums: [-6, -5, -4, -3, -2, -1] },
  { nums: [0, 2, 4, 6, 8, 10, 12] },
  { nums: [3, 6, 9, 12, 15, 18, 21] },
  { nums: [-15, -10, -5, 0, 5, 10, 15] },
  { nums: [1, 4, 7, 10, 13, 16, 19, 22] },
  { nums: [-20, -10, 0, 10, 20, 30, 40] },
  { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
];

// Run tests
describe("Sorted Array to BST - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const root = fn(nums);

          // Check inorder traversal matches original array
          const result = inorder(root);
          expect(result).toEqual(nums);

          // Check if tree is height-balanced
          expect(isBalanced(root)).toBe(true);
        });
      });
    });
  });
});
