// Import all 3 solutions
const minDepthBrute = require("./solutions/solution1");
const minDepthDFS = require("./solutions/solution2");
const minDepthBFS = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force DFS", fn: minDepthBrute },
  { name: "Optimized DFS", fn: minDepthDFS },
  { name: "BFS (Optimal)", fn: minDepthBFS },
];

// Helper to build tree from array (level-order)
function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;

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
  { root: [], expected: 0 },
  { root: [1], expected: 1 },
  { root: [1, 2], expected: 2 },
  { root: [1, null, 2], expected: 2 },
  { root: [3, 9, 20, null, null, 15, 7], expected: 2 },
  { root: [2, null, 3, null, 4, null, 5, null, 6], expected: 5 },
  { root: [1, 2, 3, 4, 5], expected: 2 },
  { root: [1, 2, null, 3, null, 4], expected: 4 },
  { root: [1, null, 2, 3, 4, 5], expected: 3 },
  { root: [1, 2, 3, null, null, 4, 5], expected: 2 },
  { root: [1, 2, 3, 4, null, null, 5], expected: 3 },
  { root: [1, 2, 3, null, 4], expected: 2 },
  { root: [1, null, 2, null, 3], expected: 3 },
  { root: [1, 2, 3, 4, 5, 6, 7], expected: 3 },
  { root: [1, 2, 3, 4, null, null, null, 5], expected: 2 },
  { root: [1, 2, 3, null, null, null, 4], expected: 2 },
  { root: [1, 2, null, null, 3], expected: 3 },
  { root: [1, null, 2, null, 3, null, 4], expected: 4 },
  { root: [1, 2, 3, null, null, 4, null, 5], expected: 2 },
  { root: [1, 2, 3, 4, 5, null, null, null, null, 6], expected: 2 },
  { root: [1, 2, null, 3, 4, null, null, 5], expected: 3 },
  { root: [1, null, 2, 3, null, 4], expected: 4 },
  { root: [1, 2, 3, null, 4, 5, 6], expected: 3 },
  { root: [1, 2, 3, 4, null, 5, null, 6], expected: 3 },
  { root: [1, 2, 3, null, null, null, null], expected: 2 },
  { root: [1, null, 2], expected: 2 },
  { root: [1, 2, null], expected: 2 },
  { root: [1, 2, 3, 4, 5, 6, null, 7], expected: 3 },
  { root: [1, 2, 3, null, 4, null, 5, 6], expected: 3 },
  { root: [1, null, 2, 3, 4, null, null, 5, 6], expected: 3 },
];

// Run tests
describe("Minimum Depth of Binary Tree - All Implementations", () => {
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
