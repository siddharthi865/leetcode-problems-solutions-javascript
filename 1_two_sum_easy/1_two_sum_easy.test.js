// Import all 3 solutions
const twoSumBrute = require("./solutions/solution1");
const twoSumSort = require("./solutions/solution2");
const twoSumOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: twoSumBrute },
  { name: "Sorting + Two Pointer", fn: twoSumSort },
  { name: "Hash Map (Optimal)", fn: twoSumOptimal },
];

// Store test cases
const testCases = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
  { nums: [-1, -2, -3, -4, -5], target: -8, expected: [2, 4] },
  { nums: [-3, 4, 3, 90], target: 0, expected: [0, 2] },
  { nums: [0, 4, 3, 0], target: 0, expected: [0, 3] },
  { nums: [0, 0], target: 0, expected: [0, 1] },
  { nums: [1000000000, -1000000000, 3, 4], target: 0, expected: [0, 1] },
  { nums: [1, 2, 3, 4, 5], target: 9, expected: [3, 4] },
  { nums: [1, 2, 3, 4, 5], target: 3, expected: [0, 1] },
  { nums: [5, 75, 25], target: 100, expected: [1, 2] },
  { nums: [1, 5, 1, 5], target: 10, expected: [1, 3] },
  { nums: [2, 8], target: 10, expected: [0, 1] },
  { nums: [-1000, 500, 500], target: 0, expected: [1, 2] },
  { nums: [10, 20, 30, 40, 55], target: 70, expected: [2, 3] },
  { nums: [2, 5, 5, 11], target: 10, expected: [1, 2] },
  { nums: [1, 1], target: 2, expected: [0, 1] },
  { nums: [8, 1, 2, 7], target: 9, expected: [0, 1] },
  { nums: [1, 2, 3, 7, 8], target: 15, expected: [3, 4] },
  { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], target: 17, expected: [8, 9] },
];

// Run tests
describe("Two Sum - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, target, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(nums, target);

          if (result === undefined) {
            expect(result).toBeUndefined();
          } else {
            expect([...result].sort()).toEqual([...expected].sort());
          }
        });
      });
    });
  });
});
