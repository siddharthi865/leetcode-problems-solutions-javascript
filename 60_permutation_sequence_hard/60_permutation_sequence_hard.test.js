// Import all 3 solutions
const solution1 = require("./solutions/solution1"); // Brute Force
const solution2 = require("./solutions/solution2"); // Backtracking Early Stop
const solution3 = require("./solutions/solution3"); // Optimal (Factorial)

// Store solutions
const solutions = [
  { name: "Brute Force", fn: solution1 },
  { name: "Backtracking Early Stop", fn: solution2 },
  { name: "Factorial Math (Optimal)", fn: solution3 },
];

// Store test cases
const testCases = [
  { n: 1, k: 1, expected: "1" },

  { n: 2, k: 1, expected: "12" },
  { n: 2, k: 2, expected: "21" },

  { n: 3, k: 1, expected: "123" },
  { n: 3, k: 2, expected: "132" },
  { n: 3, k: 3, expected: "213" },
  { n: 3, k: 4, expected: "231" },
  { n: 3, k: 5, expected: "312" },
  { n: 3, k: 6, expected: "321" },

  { n: 4, k: 1, expected: "1234" },
  { n: 4, k: 2, expected: "1243" },
  { n: 4, k: 3, expected: "1324" },
  { n: 4, k: 4, expected: "1342" },
  { n: 4, k: 5, expected: "1423" },
  { n: 4, k: 6, expected: "1432" },
  { n: 4, k: 7, expected: "2134" },
  { n: 4, k: 8, expected: "2143" },
  { n: 4, k: 9, expected: "2314" },
  { n: 4, k: 10, expected: "2341" },

  { n: 5, k: 1, expected: "12345" },
  { n: 5, k: 2, expected: "12354" },
  { n: 5, k: 10, expected: "13452" },
  { n: 5, k: 25, expected: "21345" },
  { n: 5, k: 50, expected: "31254" },
  { n: 5, k: 100, expected: "51342" },
  { n: 5, k: 120, expected: "54321" },

  { n: 6, k: 1, expected: "123456" },
  { n: 6, k: 50, expected: "142365" },
  { n: 6, k: 100, expected: "162453" },
  { n: 6, k: 720, expected: "654321" },
];

// Run tests
describe("Permutation Sequence - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ n, k, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(n, k);

          expect(result).toBe(expected);
        });
      });
    });
  });
});
