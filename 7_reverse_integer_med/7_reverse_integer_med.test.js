// Import all 3 solutions
const reverseBrute = require("./solutions/solution1");
const reverseMath = require("./solutions/solution2");
const reverseOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force (String)", fn: reverseBrute },
  { name: "Math Reversal", fn: reverseMath },
  { name: "Optimal (Overflow Safe)", fn: reverseOptimal },
];

// Store test cases
const testCases = [
  { x: 123, expected: 321 },
  { x: -123, expected: -321 },
  { x: 120, expected: 21 },
  { x: 0, expected: 0 },
  { x: 5, expected: 5 },
  { x: -5, expected: -5 },
  { x: 10, expected: 1 },
  { x: -10, expected: -1 },
  { x: 100, expected: 1 },
  { x: -100, expected: -1 },
  { x: 1534236469, expected: 0 }, // overflow
  { x: -1534236469, expected: 0 }, // overflow
  { x: 2147483647, expected: 0 }, // max int overflow
  { x: -2147483648, expected: 0 }, // min int overflow
  { x: 1463847412, expected: 2147483641 },
  { x: -1463847412, expected: -2147483641 },
  { x: 1000000003, expected: 0 }, // overflow after reverse
  { x: -1000000003, expected: 0 },
  { x: 2000000001, expected: 1000000002 },
  { x: -2000000001, expected: -1000000002 },
  { x: 907856341, expected: 143658709 },
  { x: -907856341, expected: -143658709 },
  { x: 111111111, expected: 111111111 },
  { x: -111111111, expected: -111111111 },
  { x: 1000000000, expected: 1 },
  { x: -1000000000, expected: -1 },
  { x: 123456789, expected: 987654321 },
  { x: -123456789, expected: -987654321 },
  { x: 101010101, expected: 101010101 },
  { x: -101010101, expected: -101010101 },
];

// Run tests
describe("Reverse Integer - All Implementations", () => {
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
