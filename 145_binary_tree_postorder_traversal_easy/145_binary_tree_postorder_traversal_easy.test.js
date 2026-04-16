// Import all 3 solutions
const postorderRecursive = require("./solutions/solution1");
const postorderTwoStacks = require("./solutions/solution2");
const postorderOptimal = require("./solutions/solution3");

// Helper to build tree from array (level order)
function buildTree(arr) {
  if (!arr.length) return null;

  const root = { val: arr[0], left: null, right: null };
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    if (arr[i] !== null && arr[i] !== undefined) {
      current.left = { val: arr[i], left: null, right: null };
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      current.right = { val: arr[i], left: null, right: null };
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// Store solutions
const solutions = [
  { name: "Recursive DFS", fn: postorderRecursive },
  { name: "Two Stacks", fn: postorderTwoStacks },
  { name: "Optimal Single Stack", fn: postorderOptimal },
];

// Store test cases
const testCases = [
  { root: [1, null, 2, 3], expected: [3, 2, 1] },
  { root: [1, 2, 3], expected: [2, 3, 1] },
  { root: [], expected: [] },
  { root: [1], expected: [1] },
  { root: [1, 2, null], expected: [2, 1] },
  { root: [1, null, 2], expected: [2, 1] },
  { root: [1, 2, 3, 4, 5], expected: [4, 5, 2, 3, 1] },
  { root: [1, 2, 3, null, 4], expected: [4, 2, 3, 1] },
  { root: [1, null, 2, null, 3], expected: [3, 2, 1] },
  { root: [1, 2, null, 3, null, 4], expected: [4, 3, 2, 1] },
  { root: [1, 2, 3, 4, null, null, 5], expected: [4, 2, 5, 3, 1] },
  { root: [1, 2, 3, 4, 5, 6, 7], expected: [4, 5, 2, 6, 7, 3, 1] },
  { root: [1, null, 2, 3, 4], expected: [3, 4, 2, 1] },
  { root: [1, 2, null, null, 3], expected: [3, 2, 1] },
  { root: [1, 2, 3, null, null, 4, null], expected: [2, 4, 3, 1] },
  { root: [10, 5, 15], expected: [5, 15, 10] },
  { root: [10, 5, 15, 3, 7], expected: [3, 7, 5, 15, 10] },
  { root: [10, null, 20, 15, 25], expected: [15, 25, 20, 10] },
  { root: [1, 2, 3, 4, null, null, 5, 6], expected: [6, 4, 2, 5, 3, 1] },
  { root: [1, 2, 3, null, 4, 5, null], expected: [4, 2, 5, 3, 1] },
  { root: [1, null, 2, 3, null, null, 4], expected: [4, 3, 2, 1] },
  { root: [1, 2, null, 3, 4, null, null, 5], expected: [3, 5, 4, 2, 1] },
  { root: [1, 2, 3, 4, 5, null, 6], expected: [4, 5, 2, 6, 3, 1] },
  { root: [1, 2, 3, null, null, null, 4], expected: [2, 4, 3, 1] },
  { root: [1, null, 2, null, 3, null, 4], expected: [4, 3, 2, 1] },
  { root: [5, 3, 8, 1, 4, 7, 9], expected: [1, 4, 3, 7, 9, 8, 5] },
  { root: [5, 3, 8, null, 4, 7], expected: [4, 3, 7, 8, 5] },
  { root: [2, 1, 3, null, null, null, 4], expected: [1, 4, 3, 2] },
  { root: [2, 1, 3, 4, null, null, 5], expected: [4, 1, 5, 3, 2] },
  {
    root: [100, -50, 200, -100, -25, 150, 300],
    expected: [-100, -25, -50, 150, 300, 200, 100],
  },
];

// Run tests
describe("Binary Tree Postorder Traversal - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ root, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const tree = buildTree(root);
          const result = fn(tree);

          expect(result).toEqual(expected);
        });
      });
    });
  });
});
