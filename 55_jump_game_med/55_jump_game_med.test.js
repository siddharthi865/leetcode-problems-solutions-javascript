// Import all 4 solutions
const canJumpBrute = require("./solutions/solution1");
const canJumpMemo = require("./solutions/solution2");
const canJumpDP = require("./solutions/solution3");
const canJumpGreedy = require("./solutions/solution4");

// Store solutions
const solutions = [
  { name: "Brute Force (Recursion)", fn: canJumpBrute },
  { name: "Memoization (Top-Down DP)", fn: canJumpMemo },
  { name: "Bottom-Up DP", fn: canJumpDP },
  { name: "Greedy (Optimal)", fn: canJumpGreedy },
];

// Store test cases
const testCases = [
  { nums: [2, 3, 1, 1, 4], expected: true },
  { nums: [3, 2, 1, 0, 4], expected: false },
  { nums: [0], expected: true },
  { nums: [1, 0], expected: true },
  { nums: [0, 1], expected: false },
  { nums: [2, 0, 0], expected: true },
  { nums: [1, 1, 0, 1], expected: false },
  { nums: [4, 0, 0, 0, 0], expected: true },
  { nums: [1, 2, 0, 0, 1], expected: false },
  { nums: [2, 5, 0, 0], expected: true },
  { nums: [1, 3, 2, 1, 0, 4], expected: false },
  { nums: [2, 3, 1, 0, 4], expected: true },
  { nums: [5, 4, 0, 0, 0, 0], expected: true },
  { nums: [1, 2, 3], expected: true },
  { nums: [3, 0, 8, 2, 0, 0, 1], expected: true },
  { nums: [1, 0, 1, 0], expected: false },
  { nums: [2, 0, 2, 0, 1], expected: true },
  { nums: [1, 1, 1, 1, 1, 0], expected: true },
  { nums: [1, 1, 1, 0, 0], expected: false },
  { nums: [6, 2, 4, 0, 5, 1, 1, 4, 2, 9], expected: true },
  { nums: [1, 2, 0, 1, 0, 1], expected: false },
  { nums: [2, 0, 1], expected: true },
  { nums: [1, 2, 1, 0, 4], expected: false },
  { nums: [3, 1, 1, 0, 2, 0, 1], expected: false },
  { nums: [2, 2, 0, 0, 1], expected: false },
  { nums: [1, 0, 0, 0], expected: false },
  { nums: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0], expected: true },
  { nums: [1, 2, 3, 0, 0, 0], expected: true },
  { nums: [2, 1, 0, 1], expected: false },
  { nums: [3, 3, 1, 0, 2, 0, 1], expected: true },
];

// Run tests
describe("Jump Game - All Implementations", () => {
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
