// Import all 4 solutions
const maxDepthBrute = require("./solutions/solution1");
const maxDepthDFS = require("./solutions/solution2");
const maxDepthBFS = require("./solutions/solution3");
const maxDepthIterative = require("./solutions/solution4");

// Store solutions
const solutions = [
  { name: "Brute Force DFS", fn: maxDepthBrute },
  { name: "Recursive DFS", fn: maxDepthDFS },
  { name: "BFS Level Order", fn: maxDepthBFS },
  { name: "Iterative DFS", fn: maxDepthIterative },
];

// Helper: Build Tree from array (LeetCode style)
function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;

  let root = { val: arr[0], left: null, right: null };
  let queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    let node = queue.shift();

    if (arr[i] !== null) {
      node.left = { val: arr[i], left: null, right: null };
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = { val: arr[i], left: null, right: null };
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// Store test cases
const testCases = [
  { root: [3, 9, 20, null, null, 15, 7], expected: 3 },
  { root: [1, null, 2], expected: 2 },
  { root: [], expected: 0 },
  { root: [1], expected: 1 },
  { root: [1, 2], expected: 2 },
  { root: [1, null, 2, 3], expected: 3 },
  { root: [1, 2, 3, 4, 5], expected: 3 },
  { root: [1, 2, null, 3, null, 4, null], expected: 4 },
  { root: [1, null, 2, null, 3, null, 4], expected: 4 },
  { root: [1, 2, 3, 4, null, null, 5], expected: 3 },

  { root: [1, 2, 3, 4, 5, 6, 7, 8, 9], expected: 4 },
  { root: [1, null, 2, null, 3, null, 4, null, 5], expected: 5 },
  { root: [1, 2, null, 3, null, 4, null, 5, null], expected: 5 },
  { root: [1, 2, 3, null, 4, null, 5, null, null, 6], expected: 4 },
  { root: [1, 2, 3, 4, null, null, 5, 6, null, null, null, 7], expected: 5 },

  { root: [1, 2, 3, 4, 5, 6, 7, 8], expected: 4 },
  { root: [1, null, 2, 3, 4, 5, 6], expected: 4 },
  { root: [1, 2, null, 3, 4, null, 5], expected: 4 },
  { root: [1, null, 2, null, 3, null, 4, null, 5, null, 6], expected: 6 },
  { root: [1, 2, 3, null, null, 4, 5, null, null, 6, 7], expected: 4 },

  { root: [1, 2, 3, 4, 5, null, null, 6, 7], expected: 4 },
  { root: [1, null, 2, 3, null, 4, null, 5, null], expected: 5 },
  { root: [1, 2, 3, 4, null, null, 5, 6, null, null, 7, 8], expected: 5 },
  {
    root: [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7],
    expected: 7,
  },
  { root: [1, 2, 3, 4, 5, 6, 7, null, null, null, null, 8, 9], expected: 4 },

  { root: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: 4 },
  { root: [1, null, 2, 3, 4, 5, 6, 7, 8], expected: 4 },
  { root: [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7], expected: 7 },
  { root: [1, 2, 3, null, 4, null, 5, null, 6, null, 7, null, 8], expected: 5 },
  { root: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], expected: 4 },
];

// Run tests
describe("Maximum Depth of Binary Tree - All Implementations", () => {
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
