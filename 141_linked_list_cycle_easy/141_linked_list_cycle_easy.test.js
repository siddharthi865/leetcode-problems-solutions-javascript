// Import all 3 solutions
const hasCycleBrute = require("./solutions/solution1");
const hasCycleSet = require("./solutions/solution2");
const hasCycleOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force (Visited Array)", fn: hasCycleBrute },
  { name: "Hash Set", fn: hasCycleSet },
  { name: "Floyd’s Cycle Detection (Optimal)", fn: hasCycleOptimal },
];

// Helper to build linked list with cycle
function buildLinkedList(values, pos) {
  if (values.length === 0) return null;

  let nodes = [];
  for (let i = 0; i < values.length; i++) {
    nodes[i] = { val: values[i], next: null };
  }

  for (let i = 0; i < values.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  if (pos !== -1) {
    nodes[values.length - 1].next = nodes[pos];
  }

  return nodes[0];
}

// Store test cases
const testCases = [
  { values: [3, 2, 0, -4], pos: 1, expected: true },
  { values: [1, 2], pos: 0, expected: true },
  { values: [1], pos: -1, expected: false },
  { values: [], pos: -1, expected: false },
  { values: [1], pos: 0, expected: true },
  { values: [1, 2, 3, 4, 5], pos: -1, expected: false },
  { values: [1, 2, 3, 4, 5], pos: 2, expected: true },
  { values: [10, 20, 30], pos: 1, expected: true },
  { values: [5, 6, 7, 8], pos: -1, expected: false },
  { values: [1, 2, 3, 4], pos: 0, expected: true },
  { values: [1, 2, 3, 4], pos: 3, expected: true },
  { values: [1, 2], pos: -1, expected: false },
  { values: [1, 2, 3], pos: 1, expected: true },
  { values: [1, 2, 3], pos: -1, expected: false },
  { values: [7, 7, 7, 7], pos: 2, expected: true },
  { values: [7, 7, 7, 7], pos: -1, expected: false },
  { values: [100, -100, 200, -200], pos: 1, expected: true },
  { values: [100, -100, 200, -200], pos: -1, expected: false },
  { values: [0, 0, 0, 0], pos: 0, expected: true },
  { values: [0, 0, 0, 0], pos: -1, expected: false },
  { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], pos: 4, expected: true },
  { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], pos: -1, expected: false },
  { values: [1, 2, 3, 4, 5], pos: 1, expected: true },
  { values: [1, 2, 3, 4, 5], pos: 4, expected: true },
  { values: [1, 2, 3, 4, 5], pos: -1, expected: false },
  { values: [9, 8, 7, 6, 5, 4, 3, 2, 1], pos: 3, expected: true },
  { values: [9, 8, 7, 6, 5, 4, 3, 2, 1], pos: -1, expected: false },
  { values: [1, 2, 1, 2], pos: 1, expected: true },
  { values: [1, 2, 1, 2], pos: -1, expected: false },
  { values: [42], pos: -1, expected: false },
];

// Run tests
describe("Linked List Cycle - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ values, pos, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const head = buildLinkedList(values, pos);
          const result = fn(head);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
