// Import all 3 solutions
const climbStairsBrute = require("./solutions/solution1");
const climbStairsMemo = require("./solutions/solution2");
const climbStairsDP = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: climbStairsBrute },
  { name: "Memoization (Top-Down)", fn: climbStairsMemo },
  { name: "Bottom-Up DP", fn: climbStairsDP },
];

// Store test cases
const testCases = [
  { n: 1, expected: 1 },
  { n: 2, expected: 2 },
  { n: 3, expected: 3 },
  { n: 4, expected: 5 },
  { n: 5, expected: 8 },
  { n: 6, expected: 13 },
  { n: 7, expected: 21 },
  { n: 8, expected: 34 },
  { n: 9, expected: 55 },
  { n: 10, expected: 89 },

  { n: 11, expected: 144 },
  { n: 12, expected: 233 },
  { n: 13, expected: 377 },
  { n: 14, expected: 610 },
  { n: 15, expected: 987 },
  { n: 16, expected: 1597 },
  { n: 17, expected: 2584 },
  { n: 18, expected: 4181 },
  { n: 19, expected: 6765 },
  { n: 20, expected: 10946 },

  { n: 21, expected: 17711 },
  { n: 22, expected: 28657 },
  { n: 23, expected: 46368 },
  { n: 24, expected: 75025 },
  { n: 25, expected: 121393 },
  { n: 26, expected: 196418 },
  { n: 27, expected: 317811 },
  { n: 28, expected: 514229 },
  { n: 29, expected: 832040 },
  { n: 30, expected: 1346269 },
];

// Run tests
describe("Climbing Stairs - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ n, expected }, index) => {
        test(`Test Case ${index + 1} (n = ${n})`, () => {
          const result = fn(n);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
