// Import all 3 solutions
const trapBrute = require("./solutions/solution1");
const trapDP = require("./solutions/solution2");
const trapOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: trapBrute },
  { name: "DP Arrays", fn: trapDP },
  { name: "Two Pointer (Optimal)", fn: trapOptimal },
];

// Store test cases
const testCases = [
  { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6 },
  { height: [4, 2, 0, 3, 2, 5], expected: 9 },
  { height: [1, 0, 1], expected: 1 },
  { height: [2, 0, 2], expected: 2 },
  { height: [3, 0, 0, 2, 0, 4], expected: 10 },
  { height: [0, 0, 0, 0], expected: 0 },
  { height: [5, 4, 3, 2, 1], expected: 0 },
  { height: [1, 2, 3, 4, 5], expected: 0 },
  { height: [5], expected: 0 },
  { height: [5, 0, 5], expected: 5 },
  { height: [2, 1, 0, 1, 2], expected: 4 },
  { height: [3, 1, 2, 1, 2, 1, 5], expected: 8 },
  { height: [0, 2, 0], expected: 0 },
  { height: [2, 0, 2, 0, 2], expected: 4 },
  { height: [1, 0, 2, 1, 0, 1, 3], expected: 5 },
  { height: [4, 1, 1, 0, 2, 3], expected: 8 },
  { height: [0, 3, 0, 1, 0, 2, 0, 4], expected: 12 },
  { height: [1, 0, 1, 0, 1, 0, 1], expected: 3 },
  { height: [2, 2, 2, 2], expected: 0 },
  { height: [3, 0, 1, 3, 0, 5], expected: 8 },
  { height: [0, 1, 0, 1, 0, 1, 0], expected: 2 },
  { height: [5, 0, 0, 0, 5], expected: 15 },
  { height: [1, 3, 2, 1, 2, 1, 5, 2, 2, 1, 4], expected: 13 },
  { height: [2, 0, 1, 3, 0, 1, 2], expected: 6 },
  { height: [4, 2, 3], expected: 1 },
  { height: [1, 0, 0, 0, 1], expected: 3 },
  { height: [6, 0, 5, 0, 4, 0, 3, 0, 2, 0, 1], expected: 15 },
  { height: [2, 1, 2, 1, 2, 1, 2], expected: 3 },
  { height: [0, 5, 0, 5, 0], expected: 5 },
  { height: [3, 0, 2, 0, 4], expected: 7 },
];

// Run tests
describe("Trapping Rain Water - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ height, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(height);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
