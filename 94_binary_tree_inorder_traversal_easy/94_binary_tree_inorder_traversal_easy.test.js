// Import all 3 solutions
const inorderRecursive = require("./solutions/solution1");
const inorderIterative = require("./solutions/solution2");
const inorderMorris = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Recursive", fn: inorderRecursive },
  { name: "Iterative Stack", fn: inorderIterative },
  { name: "Morris Traversal", fn: inorderMorris },
];

// Helper to build tree from array (level-order)
function buildTree(arr) {
  if (!arr.length) return null;

  let root = { val: arr[0], left: null, right: null };
  let queue = [root];
  let i = 1;

  while (i < arr.length) {
    let current = queue[0];
    queue.shift();

    if (arr[i] !== null) {
      current.left = { val: arr[i], left: null, right: null };
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = { val: arr[i], left: null, right: null };
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// Store test cases
const testCases = [
  { root: [], expected: [] },
  { root: [1], expected: [1] },
  { root: [1, null, 2, 3], expected: [1, 3, 2] },
  { root: [2, 1, 3], expected: [1, 2, 3] },
  { root: [4, 2, 6, 1, 3, 5, 7], expected: [1, 2, 3, 4, 5, 6, 7] },
  { root: [1, 2, null, 3], expected: [3, 2, 1] },
  { root: [1, null, 2, null, 3], expected: [1, 2, 3] },
  { root: [5, 3, 7, 2, 4, 6, 8], expected: [2, 3, 4, 5, 6, 7, 8] },
  { root: [10, 5, 15, null, null, 12, 20], expected: [5, 10, 12, 15, 20] },
  { root: [0], expected: [0] },
  { root: [-1, -2, -3], expected: [-2, -1, -3] },
  { root: [1, null, 2], expected: [1, 2] },
  { root: [3, 1, 4, null, 2], expected: [1, 2, 3, 4] },
  { root: [1, 2, 3, 4, null, null, 5], expected: [4, 2, 1, 3, 5] },
  {
    root: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
    expected: [0, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  { root: [1, null, 2, 3, 4], expected: [1, 3, 2, 4] },
  { root: [2, null, 3, null, 4, null, 5], expected: [2, 3, 4, 5] },
  { root: [5, 4, null, 3, null, 2, null, 1], expected: [1, 2, 3, 4, 5] },
  { root: [1, 2, 3, 4, 5, 6, 7], expected: [4, 2, 5, 1, 6, 3, 7] },
  {
    root: [8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13],
    expected: [1, 3, 4, 6, 7, 8, 10, 13, 14],
  },
  { root: [1, 2, null, null, 3], expected: [2, 3, 1] },
  { root: [7, 3, 9, 1, 5, 8, 10], expected: [1, 3, 5, 7, 8, 9, 10] },
  { root: [2, 1, 3, null, null, null, 4], expected: [1, 2, 3, 4] },
  { root: [4, 2, 5, 1, 3], expected: [1, 2, 3, 4, 5] },
  { root: [1, null, 2, null, 3, null, 4], expected: [1, 2, 3, 4] },
  { root: [9, 7, 11, 6, 8, 10, 12], expected: [6, 7, 8, 9, 10, 11, 12] },
  { root: [3, 2, 4, 1], expected: [1, 2, 3, 4] },
  { root: [1, null, 2, 3], expected: [1, 3, 2] },
  { root: [2, 1, null], expected: [1, 2] },
  {
    root: [100, 50, 150, 25, 75, 125, 175],
    expected: [25, 50, 75, 100, 125, 150, 175],
  },
];

// Run tests
describe("Binary Tree Inorder Traversal - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ root, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const treeRoot = buildTree(root);
          const result = fn(treeRoot);

          expect(result).toEqual(expected);
        });
      });
    });
  });
});
