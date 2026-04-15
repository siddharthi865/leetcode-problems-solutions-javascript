// Import all 3 solutions
const isBalancedBrute = require("./solutions/solution1");
const isBalancedDFS = require("./solutions/solution2");
const isBalancedIterative = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: isBalancedBrute },
  { name: "Optimized DFS", fn: isBalancedDFS },
  { name: "Iterative Postorder", fn: isBalancedIterative },
];

// Helper to build tree from array (level-order)
function buildTree(arr) {
  if (!arr.length) return null;

  const root = { val: arr[0], left: null, right: null };
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    if (arr[i] !== null && i < arr.length) {
      node.left = { val: arr[i], left: null, right: null };
      queue.push(node.left);
    }
    i++;

    if (arr[i] !== null && i < arr.length) {
      node.right = { val: arr[i], left: null, right: null };
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// Store test cases
const testCases = [
  { root: [], expected: true },
  { root: [1], expected: true },
  { root: [1, 2], expected: true },
  { root: [1, null, 2], expected: true },
  { root: [1, 2, 3], expected: true },
  { root: [3, 9, 20, null, null, 15, 7], expected: true },
  { root: [1, 2, 2, 3, 3, null, null, 4, 4], expected: false },
  { root: [1, 2, null, 3, null, 4], expected: false },
  { root: [1, null, 2, null, 3, null, 4], expected: false },
  { root: [1, 2, 3, 4, 5, 6, 7], expected: true },
  { root: [1, 2, 3, 4, null, null, null, 5], expected: false },
  { root: [1, 2, 2, 3, null, null, 3, 4], expected: false },
  { root: [1, 2, 2, null, 3, null, 3], expected: true },
  { root: [1, 2, 3, null, null, 4, 5], expected: true },
  { root: [1, 2, 3, 4, null, null, 5, 6], expected: false },
  { root: [1, 2, null, 3, 4], expected: false },
  { root: [1, null, 2, 3], expected: false },
  { root: [1, 2, 3, 4, 5, null, null, 6, 7], expected: false },
  { root: [1, 2, 3, 4, 5, null, null, 6, null, 7], expected: false },
  { root: [1, 2, 3, 4, 5, 6, null, 7], expected: true },
  { root: [1, 2, null, 3, null, null, null, 4], expected: false },
  { root: [1, 2, 2, 3, 3, 3, 3, 4, 4], expected: true },
  { root: [1, 2, 2, null, null, null, null], expected: true },
  { root: [1, 2, 3, 4, null, null, null], expected: true },
  { root: [1, 2, 3, null, 4, null, 5], expected: true },
  { root: [1, 2, 3, null, 4, null, 5, null, 6], expected: false },
  { root: [1, null, 2, null, 3, null, 4, null, 5], expected: false },
  { root: [1, 2, 3, 4, 5, 6, 7, 8, 9], expected: true },
  {
    root: [1, 2, 3, 4, 5, 6, 7, 8, null, null, null, null, null, null, 9],
    expected: true,
  },
  { root: [1, 2, 3, 4, 5, null, null, 6, null, 7, null], expected: false },
];

// Run tests
describe("Balanced Binary Tree - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ root, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const tree = buildTree(root);
          const result = fn(tree);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
