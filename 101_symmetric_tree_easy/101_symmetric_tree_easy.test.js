// Import all 3 solutions
const isSymmetricBrute = require("./solutions/solution1");
const isSymmetricRecursive = require("./solutions/solution2");
const isSymmetricIterative = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force (Clone + Mirror)", fn: isSymmetricBrute },
  { name: "Recursive (Optimal)", fn: isSymmetricRecursive },
  { name: "Iterative (Queue)", fn: isSymmetricIterative },
];

// Helper: Convert array to binary tree
function buildTree(arr) {
  if (!arr.length) return null;

  let root = { val: arr[0], left: null, right: null };
  let queue = [root];
  let i = 1;

  while (i < arr.length) {
    let current = queue.shift();

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
  { root: [1], expected: true },
  { root: [1, 2, 2], expected: true },
  { root: [1, 2, 2, 3, 4, 4, 3], expected: true },
  { root: [1, 2, 2, null, 3, null, 3], expected: false },
  { root: [1, 2, 2, 3, null, null, 3], expected: true },
  { root: [1, 2, 2, null, 3, 3, null], expected: true },
  { root: [1, 2, 2, 3, 4, 5, 3], expected: false },
  { root: [1, 2, 2, 2, null, 2], expected: false },
  { root: [1, 2, 2, null, null, null, null], expected: true },
  { root: [1, null, null], expected: true },
  { root: [1, 2, 2, 3, null, null, 4], expected: false },
  { root: [1, 2, 2, null, 3, 4, null], expected: false },
  { root: [1, 2, 2, 3, 4, 4, 3, 5, null, null, 5], expected: false },
  { root: [1, 2, 2, 3, 4, 4, 3, null, 5, 5, null], expected: false },
  { root: [1, 2, 2, 3, null, null, 3, 4, null, null, 4], expected: true },
  { root: [1, 2, 2, 3, null, null, 3, 4, 5, 5, 4], expected: true },
  { root: [0, 0, 0], expected: true },
  { root: [-1, -2, -2], expected: true },
  { root: [-1, -2, -2, -3, -4, -4, -3], expected: true },
  { root: [-1, -2, -2, null, -3, null, -3], expected: false },
  { root: [1, 2, 2, 3, 3, 3, 3], expected: true },
  { root: [1, 2, 2, 3, 3, null, 3], expected: false },
  { root: [1, 2, 2, null, 3, 3, null, 4, null, null, 4], expected: true },
  { root: [1, 2, 2, null, 3, 3, null, null, 4, 4, null], expected: true },
  { root: [5, 3, 3, 2, 4, 4, 2], expected: true },
  { root: [5, 3, 3, 2, 4, 2, 4], expected: false },
  { root: [10, 20, 20, 30, 40, 40, 30], expected: true },
  { root: [10, 20, 20, 30, null, null, 30, 40], expected: false },
  {
    root: [1, 2, 2, 3, 4, 4, 3, null, null, null, null, null, null, null, null],
    expected: true,
  },
  { root: [1, 2, 2, 3, 4, 4, 3, null, 5], expected: false },
];

// Run tests
describe("Symmetric Tree - All Implementations", () => {
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
