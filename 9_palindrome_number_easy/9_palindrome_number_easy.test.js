// Import all 3 solutions
const isPalindromeBrute = require("./solutions/solution1");
const isPalindromeReverse = require("./solutions/solution2");
const isPalindromeOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force (Array)", fn: isPalindromeBrute },
  { name: "Reverse Full Number", fn: isPalindromeReverse },
  { name: "Reverse Half (Optimal)", fn: isPalindromeOptimal },
];

// Store test cases (ALL within constraints)
const testCases = [
  { x: 121, expected: true },
  { x: -121, expected: false },
  { x: 10, expected: false },
  { x: 0, expected: true },
  { x: 1, expected: true },
  { x: 11, expected: true },
  { x: 12321, expected: true },
  { x: 123321, expected: true },
  { x: 123, expected: false },
  { x: 1001, expected: true },
  { x: 100, expected: false },
  { x: 1221, expected: true },
  { x: 1234321, expected: true },
  { x: 12344321, expected: true },
  { x: 2147447412, expected: true }, // near upper bound palindrome
  { x: 2147483647, expected: false }, // max int
  { x: -2147483648, expected: false }, // min int
  { x: 1000000001, expected: true },
  { x: 1000000000, expected: false },
  { x: 2147483412, expected: false }, // near upper bound non-palindrome
];

// Run tests
describe("Palindrome Number - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ x, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(x);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
