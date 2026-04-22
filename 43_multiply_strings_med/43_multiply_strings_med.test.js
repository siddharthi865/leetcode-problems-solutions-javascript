// Import all 3 solutions
const multiplyBrute = require("./solutions/solution1");
const multiplyBetter = require("./solutions/solution2");
const multiplyOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  //   { name: "Brute Force (Repeated Addition)", fn: multiplyBrute },
  { name: "Grade School (String Addition)", fn: multiplyBetter },
  { name: "Array-Based (Optimal)", fn: multiplyOptimal },
];

// Store test cases
const testCases = [
  { num1: "2", num2: "3", expected: "6" },
  { num1: "123", num2: "456", expected: "56088" },
  { num1: "0", num2: "12345", expected: "0" },
  { num1: "999", num2: "0", expected: "0" },
  { num1: "1", num2: "99999", expected: "99999" },
  { num1: "9", num2: "9", expected: "81" },
  { num1: "10", num2: "10", expected: "100" },
  { num1: "25", num2: "4", expected: "100" },
  { num1: "123", num2: "0", expected: "0" },
  { num1: "456", num2: "1", expected: "456" },
  { num1: "111", num2: "111", expected: "12321" },
  { num1: "999", num2: "999", expected: "998001" },
  { num1: "1000", num2: "1000", expected: "1000000" },
  { num1: "500", num2: "20", expected: "10000" },
  { num1: "123456789", num2: "9", expected: "1111111101" },
  { num1: "987654321", num2: "8", expected: "7901234568" },
  { num1: "12345", num2: "6789", expected: "83810205" },
  { num1: "99999", num2: "99999", expected: "9999800001" },
  { num1: "100000", num2: "0", expected: "0" },
  { num1: "100000", num2: "1", expected: "100000" },
  { num1: "22222", num2: "33333", expected: "740725926" },
  { num1: "314159", num2: "271828", expected: "85397212652" },
  { num1: "123456789", num2: "987654321", expected: "121932631112635269" },
  { num1: "100000000", num2: "100000000", expected: "10000000000000000" },
  { num1: "999999999", num2: "9", expected: "8999999991" },
  { num1: "88888888", num2: "7", expected: "622222216" },
  { num1: "123456789123456789", num2: "1", expected: "123456789123456789" },
  { num1: "1", num2: "1", expected: "1" },
  { num1: "2", num2: "0", expected: "0" },
  { num1: "999999", num2: "999999", expected: "999998000001" },
];

// Run tests
describe("Multiply Strings - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ num1, num2, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(num1, num2);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
