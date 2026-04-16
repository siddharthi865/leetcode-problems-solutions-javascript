// Import all 3 solutions
const preorderBrute = require("./solutions/solution1");
const preorderIterative = require("./solutions/solution2");
const preorderMorris = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Recursive (DFS)", fn: preorderBrute },
  { name: "Iterative Stack", fn: preorderIterative },
  { name: "Morris Traversal (Optimal)", fn: preorderMorris },
];

// Helper to build tree from array (level order)
function buildTree(arr) {
  if (!arr.length) return null;

  let root = { val: arr[0], left: null, right: null };
  let queue = [root];
  let i = 1;

  while (i < arr.length) {
    let current = queue.shift();

    if (arr[i] !== null && i < arr.length) {
      current.left = { val: arr[i], left: null, right: null };
      queue.push(current.left);
    }
    i++;

    if (arr[i] !== null && i < arr.length) {
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
  { root: [1, 2], expected: [1, 2] },
  { root: [1, null, 2], expected: [1, 2] },
  { root: [1, null, 2, 3], expected: [1, 2, 3] },
  { root: [1, 2, 3], expected: [1, 2, 3] },
  { root: [1, 2, 3, 4, 5], expected: [1, 2, 4, 5, 3] },
  { root: [1, 2, 3, null, 5], expected: [1, 2, 5, 3] },
  { root: [1, null, 2, null, 3], expected: [1, 2, 3] },
  { root: [1, 2, null, 3, null, 4], expected: [1, 2, 3, 4] },
  { root: [1, 2, 3, 4, null, null, 5], expected: [1, 2, 4, 3, 5] },
  { root: [1, 2, 3, 4, 5, 6, 7], expected: [1, 2, 4, 5, 3, 6, 7] },
  { root: [10, 5, 15, 3, 7, null, 18], expected: [10, 5, 3, 7, 15, 18] },
  { root: [1, null, 2, 3, 4], expected: [1, 2, 3, 4] },
  { root: [1, 2, null, null, 3], expected: [1, 2, 3] },
  { root: [1, 2, 3, null, null, 4, 5], expected: [1, 2, 3, 4, 5] },
  { root: [1, 2, 3, 4, null, 5, null], expected: [1, 2, 4, 3, 5] },
  { root: [1, null, 2, null, 3, null, 4], expected: [1, 2, 3, 4] },
  { root: [1, 2, 3, 4, 5, null, null, 6], expected: [1, 2, 4, 6, 5, 3] },
  { root: [1, 2, 3, null, 4, null, 5], expected: [1, 2, 4, 3, 5] },
  { root: [5, 3, 8, 1, 4, 7, 9], expected: [5, 3, 1, 4, 8, 7, 9] },
  { root: [0, -3, 9, -10, null, 5], expected: [0, -3, -10, 9, 5] },
  { root: [1, 2, 3, 4, 5, 6, null, 7], expected: [1, 2, 4, 7, 5, 3, 6] },
  { root: [2, 1, 3], expected: [2, 1, 3] },
  { root: [3, 1, 4, null, 2], expected: [3, 1, 2, 4] },
  { root: [1, 2, 3, null, null, null, 4], expected: [1, 2, 3, 4] },
  { root: [1, null, 2, 3, null, 4, null], expected: [1, 2, 3, 4] },
  { root: [7, 3, 9, 1, 5, 8, 10], expected: [7, 3, 1, 5, 9, 8, 10] },
  { root: [1, 2, null, 3, 4, null, null, 5], expected: [1, 2, 3, 4, 5] },
  { root: [1, null, 2, null, 3, null, 4, null, 5], expected: [1, 2, 3, 4, 5] },
];

// Run tests
describe("Binary Tree Preorder Traversal - All Implementations", () => {
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
