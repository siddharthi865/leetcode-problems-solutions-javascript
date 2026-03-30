// Import all 3 solutions
const romanToIntBrute = require("./solutions/solution1");
const romanToIntForward = require("./solutions/solution2");
const romanToIntOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force (Pairs Check)", fn: romanToIntBrute },
  { name: "Forward Traversal", fn: romanToIntForward },
  { name: "Reverse Traversal (Optimal)", fn: romanToIntOptimal },
];

// Store test cases
const testCases = [
  { s: "I", expected: 1 },
  { s: "II", expected: 2 },
  { s: "III", expected: 3 },
  { s: "IV", expected: 4 },
  { s: "V", expected: 5 },
  { s: "IX", expected: 9 },
  { s: "X", expected: 10 },
  { s: "XIII", expected: 13 },
  { s: "XVIII", expected: 18 },
  { s: "XXVII", expected: 27 },
  { s: "XL", expected: 40 },
  { s: "XLIV", expected: 44 },
  { s: "L", expected: 50 },
  { s: "LVIII", expected: 58 },
  { s: "XC", expected: 90 },
  { s: "XCIX", expected: 99 },
  { s: "CD", expected: 400 },
  { s: "CM", expected: 900 },
  { s: "MCMXCIV", expected: 1994 },
  { s: "MMMCMXCIX", expected: 3999 },
];

// Run tests
describe("Roman to Integer - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ s, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(s);

          if (result === undefined) {
            expect(result).toBeUndefined();
          } else {
            expect(result).toBe(expected);
          }
        });
      });
    });
  });
});
