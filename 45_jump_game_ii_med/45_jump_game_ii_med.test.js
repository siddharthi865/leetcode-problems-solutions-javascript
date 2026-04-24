// Import all 4 solutions
const jumpBrute = require("./solutions/solution1");
const jumpMemo = require("./solutions/solution2");
const jumpDP = require("./solutions/solution3");
const jumpGreedy = require("./solutions/solution4");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: jumpBrute },
  { name: "Memoization", fn: jumpMemo },
  { name: "Bottom-Up DP", fn: jumpDP },
  { name: "Greedy (Optimal)", fn: jumpGreedy },
];

// Store test cases
const testCases = [
  { nums: [2, 3, 1, 1, 4], expected: 2 },
  { nums: [2, 3, 0, 1, 4], expected: 2 },
  { nums: [1, 1, 1, 1], expected: 3 },
  { nums: [1, 2, 1, 1, 1], expected: 3 },
  { nums: [4, 1, 1, 3, 1, 1, 1], expected: 2 },
  { nums: [2, 1], expected: 1 },
  { nums: [0], expected: 0 },
  { nums: [5, 4, 3, 2, 1, 0], expected: 1 },
  { nums: [1, 2, 3], expected: 2 },
  { nums: [3, 2, 1], expected: 1 },
  { nums: [2, 0, 2, 0, 1], expected: 2 },
  { nums: [3, 4, 2, 1, 2, 1, 5], expected: 3 },
  { nums: [1, 3, 5, 1, 1, 1, 1], expected: 3 },
  { nums: [2, 2, 2, 2, 2], expected: 2 },
  { nums: [1, 4, 1, 1, 1, 1], expected: 2 },
  { nums: [6, 2, 4, 0, 5, 1, 1, 4, 2, 9], expected: 2 },
  { nums: [1, 1, 1, 1, 1, 1, 1, 1], expected: 7 },
  { nums: [2, 3, 1], expected: 1 },
  { nums: [2, 1, 1, 1, 1], expected: 3 },
  { nums: [3, 1, 1, 1, 1], expected: 2 },
  { nums: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0], expected: 2 },
  { nums: [1, 2, 0, 1], expected: 2 },
  { nums: [2, 1, 2, 3, 1], expected: 2 },
  { nums: [3, 0, 0, 1, 1], expected: 2 },
  { nums: [4, 2, 0, 0, 2, 0], expected: 2 },
  { nums: [2, 3, 1, 2, 4, 2, 3], expected: 3 },
  { nums: [1, 2, 3, 4, 5, 6], expected: 3 },
  { nums: [2, 1, 3, 1, 1, 1], expected: 2 },
  { nums: [3, 2, 2, 0, 4], expected: 2 },
  { nums: [1, 1, 2, 1, 1], expected: 3 },
];

// Run tests
describe("Jump Game II - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(nums);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
