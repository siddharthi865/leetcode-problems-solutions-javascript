// Import all 3 solutions
const isSameTreeBrute = require("./solutions/solution1");
const isSameTreeDFS = require("./solutions/solution2");
const isSameTreeBFS = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force (Serialize)", fn: isSameTreeBrute },
  { name: "Recursive DFS (Optimal)", fn: isSameTreeDFS },
  { name: "BFS (Level Order)", fn: isSameTreeBFS },
];

// Helper to build tree from array
function buildTree(arr) {
  if (!arr.length) return null;

  var root = { val: arr[0], left: null, right: null };
  var queue = [root];
  var i = 1;

  while (i < arr.length) {
    var current = queue[0];

    // manual shift
    for (var j = 0; j < queue.length - 1; j++) {
      queue[j] = queue[j + 1];
    }
    queue.length--;

    if (arr[i] !== null) {
      current.left = { val: arr[i], left: null, right: null };
      queue[queue.length] = current.left;
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = { val: arr[i], left: null, right: null };
      queue[queue.length] = current.right;
    }
    i++;
  }

  return root;
}

// Store test cases
const testCases = [
  { p: [], q: [], expected: true },
  { p: [1], q: [1], expected: true },
  { p: [1], q: [2], expected: false },
  { p: [1, 2, 3], q: [1, 2, 3], expected: true },
  { p: [1, 2], q: [1, null, 2], expected: false },
  { p: [1, null, 2], q: [1, 2], expected: false },
  { p: [1, 2, 1], q: [1, 1, 2], expected: false },
  { p: [1, 2, 3, 4], q: [1, 2, 3, 4], expected: true },
  { p: [1, 2, 3, 4], q: [1, 2, 3, null], expected: false },
  { p: [1, null, 2, 3], q: [1, null, 2, 3], expected: true },
  { p: [1, null, 2, 3], q: [1, null, 2, null], expected: false },
  { p: [0], q: [0], expected: true },
  { p: [-1, -2, -3], q: [-1, -2, -3], expected: true },
  { p: [-1, -2, -3], q: [-1, -3, -2], expected: false },
  {
    p: [1, 2, 3, null, null, 4, 5],
    q: [1, 2, 3, null, null, 4, 5],
    expected: true,
  },
  {
    p: [1, 2, 3, null, null, 4, 5],
    q: [1, 2, 3, null, null, 5, 4],
    expected: false,
  },
  { p: [1], q: [], expected: false },
  { p: [], q: [1], expected: false },
  { p: [1, 2, 3], q: [1, 2, 3, 4], expected: false },
  { p: [1, 2, 3, 4, 5, 6, 7], q: [1, 2, 3, 4, 5, 6, 7], expected: true },
  { p: [1, 2, 3, 4, 5, 6, 7], q: [1, 2, 3, 4, 5, 7, 6], expected: false },
  { p: [1, 2, null, 3, null, 4], q: [1, 2, null, 3, null, 4], expected: true },
  {
    p: [1, 2, null, 3, null, 4],
    q: [1, 2, null, 3, null, null],
    expected: false,
  },
  { p: [10000, -10000], q: [10000, -10000], expected: true },
  { p: [10000, -10000], q: [10000, 10000], expected: false },
  { p: [1, 1, 1, 1, 1], q: [1, 1, 1, 1, 1], expected: true },
  { p: [1, 1, 1, 1, 1], q: [1, 1, 1, 1, null], expected: false },
  {
    p: [1, null, 2, null, 3, null, 4],
    q: [1, null, 2, null, 3, null, 4],
    expected: true,
  },
  {
    p: [1, null, 2, null, 3, null, 4],
    q: [1, null, 2, null, 3, null, 5],
    expected: false,
  },
  {
    p: [1, 2, 3, 4, null, null, 5],
    q: [1, 2, 3, 4, null, null, 5],
    expected: true,
  },
];

// Run tests
describe("Same Tree - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ p, q, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const tree1 = buildTree(p);
          const tree2 = buildTree(q);

          const result = fn(tree1, tree2);

          expect(result).toBe(expected);
        });
      });
    });
  });
});
