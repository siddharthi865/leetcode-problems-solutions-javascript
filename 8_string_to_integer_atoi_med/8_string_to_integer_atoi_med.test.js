// Import both solutions
const myAtoiBrute = require("./solutions/solution1");
const myAtoiOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: myAtoiBrute },
  { name: "Overflow Safe (Optimal)", fn: myAtoiOptimal },
];

// Store test cases
const testCases = [
  { s: "42", expected: 42 },
  { s: "   -42", expected: -42 },
  { s: "1337c0d3", expected: 1337 },
  { s: "0-1", expected: 0 },
  { s: "words and 987", expected: 0 },
  { s: "-91283472332", expected: -2147483648 },
  { s: "91283472332", expected: 2147483647 },
  { s: "+1", expected: 1 },
  { s: "+-12", expected: 0 },
  { s: "00000", expected: 0 },
  { s: "00000123", expected: 123 },
  { s: "   +0 123", expected: 0 },
  { s: "2147483647", expected: 2147483647 },
  { s: "2147483648", expected: 2147483647 },
  { s: "-2147483648", expected: -2147483648 },
  { s: "-2147483649", expected: -2147483648 },
  { s: "", expected: 0 },
  { s: "   ", expected: 0 },
  { s: "   +", expected: 0 },
  { s: "   -", expected: 0 },
  { s: "3.14159", expected: 3 },
  { s: "  -0012a42", expected: -12 },
  { s: "   0000000000012345678", expected: 12345678 },
  { s: "   -000000000000001", expected: -1 },
  { s: "   +000000000000001", expected: 1 },
  { s: "9999999999999999999999999", expected: 2147483647 },
  { s: "-9999999999999999999999999", expected: -2147483648 },
  { s: "   123abc456", expected: 123 },
  { s: "   -123abc456", expected: -123 },
  { s: "00000-42a1234", expected: 0 },
];

// Run tests
describe("String to Integer (atoi) - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ s, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(s);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
