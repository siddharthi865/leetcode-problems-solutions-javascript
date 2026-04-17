// Import both solutions
const intToRomanBrute = require("./solutions/solution1");
const intToRomanOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force (Digit by Digit)", fn: intToRomanBrute },
  { name: "Greedy (Optimal)", fn: intToRomanOptimal },
];

// Store test cases
const testCases = [
  { num: 1, expected: "I" },
  { num: 2, expected: "II" },
  { num: 3, expected: "III" },
  { num: 4, expected: "IV" },
  { num: 5, expected: "V" },
  { num: 6, expected: "VI" },
  { num: 7, expected: "VII" },
  { num: 8, expected: "VIII" },
  { num: 9, expected: "IX" },
  { num: 10, expected: "X" },

  { num: 14, expected: "XIV" },
  { num: 19, expected: "XIX" },
  { num: 20, expected: "XX" },
  { num: 40, expected: "XL" },
  { num: 44, expected: "XLIV" },
  { num: 49, expected: "XLIX" },
  { num: 50, expected: "L" },
  { num: 58, expected: "LVIII" },
  { num: 90, expected: "XC" },
  { num: 99, expected: "XCIX" },

  { num: 100, expected: "C" },
  { num: 400, expected: "CD" },
  { num: 444, expected: "CDXLIV" },
  { num: 500, expected: "D" },
  { num: 900, expected: "CM" },
  { num: 944, expected: "CMXLIV" },
  { num: 1000, expected: "M" },
  { num: 1994, expected: "MCMXCIV" },
  { num: 3749, expected: "MMMDCCXLIX" },
  { num: 3999, expected: "MMMCMXCIX" },
];

// Run tests
describe("Integer to Roman - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ num, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(num);

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
