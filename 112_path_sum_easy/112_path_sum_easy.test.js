// Import all 3 solutions
const hasPathSumBrute = require("./solutions/solution1");
const hasPathSumDFS = require("./solutions/solution2");
const hasPathSumIterative = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force (Store Paths)", fn: hasPathSumBrute },
  { name: "DFS Recursive (Optimal)", fn: hasPathSumDFS },
  { name: "Iterative DFS (Stack)", fn: hasPathSumIterative },
];

// Helper to build tree from array (level-order)
function buildTree(arr) {
  if (!arr.length) return null;

  const root = { val: arr[0], left: null, right: null };
  const queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const node = queue.shift();

    if (arr[i] !== null && arr[i] !== undefined) {
      node.left = { val: arr[i], left: null, right: null };
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.right = { val: arr[i], left: null, right: null };
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// Store test cases
const testCases = [
  {
    root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
    targetSum: 22,
    expected: true,
  },
  { root: [1, 2, 3], targetSum: 5, expected: false },
  { root: [], targetSum: 0, expected: false },
  { root: [1], targetSum: 1, expected: true },
  { root: [1], targetSum: 2, expected: false },
  { root: [1, 2], targetSum: 3, expected: true },
  { root: [1, 2], targetSum: 1, expected: false },
  { root: [1, null, 2], targetSum: 3, expected: true },
  { root: [1, null, 2], targetSum: 1, expected: false },
  { root: [2, 3, 4], targetSum: 5, expected: true },
  { root: [2, 3, 4], targetSum: 6, expected: true },
  { root: [2, 3, 4], targetSum: 7, expected: false },
  {
    root: [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1],
    targetSum: 18,
    expected: true,
  },
  {
    root: [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1],
    targetSum: 8,
    expected: false,
  },
  { root: [0, 1, 1], targetSum: 1, expected: true },
  { root: [0, 1, 1], targetSum: 2, expected: false },
  { root: [-2, null, -3], targetSum: -5, expected: true },
  { root: [-2, null, -3], targetSum: -2, expected: false },
  { root: [1, 2, 3, 4, 5, 6, 7], targetSum: 7, expected: true },
  { root: [1, 2, 3, 4, 5, 6, 7], targetSum: 10, expected: true },
  { root: [1, 2, 3, 4, 5, 6, 7], targetSum: 100, expected: false },
  {
    root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
    targetSum: 26,
    expected: true,
  },
  {
    root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
    targetSum: 18,
    expected: true,
  },
  {
    root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
    targetSum: 27,
    expected: true,
  },
  {
    root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
    targetSum: 100,
    expected: false,
  },
  { root: [1000, -1000, 1000], targetSum: 0, expected: true },
  { root: [1000, -1000, 1000], targetSum: 2000, expected: true },
  { root: [1000, -1000, 1000], targetSum: -1000, expected: false },
  { root: [1, 2, 3, null, 4, null, 5], targetSum: 7, expected: true },
  { root: [1, 2, 3, null, 4, null, 5], targetSum: 6, expected: false },
];

// Run tests
describe("Path Sum - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ root, targetSum, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const tree = buildTree(root);
          const result = fn(tree, targetSum);

          expect(result).toBe(expected);
        });
      });
    });
  });
});
