// Import all 3 solutions
const addBinaryBrute = require("./solutions/solution1");
const addBinaryBetter = require("./solutions/solution2");
const addBinaryOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Conversion (Brute - Not Safe)", fn: addBinaryBrute },
  { name: "Carry Simulation", fn: addBinaryBetter },
  { name: "Bitwise Simulation (Optimal)", fn: addBinaryOptimal },
];

// Store test cases
const testCases = [
  { a: "0", b: "0", expected: "0" },
  { a: "1", b: "0", expected: "1" },
  { a: "1", b: "1", expected: "10" },
  { a: "11", b: "1", expected: "100" },
  { a: "1010", b: "1011", expected: "10101" },
  { a: "111", b: "111", expected: "1110" },
  { a: "1000", b: "1", expected: "1001" },
  { a: "0", b: "101010", expected: "101010" },
  { a: "101010", b: "0", expected: "101010" },
  { a: "1111", b: "1", expected: "10000" },
  { a: "100", b: "110010", expected: "110110" },
  { a: "111000", b: "111", expected: "111111" },
  { a: "101", b: "11", expected: "1000" },
  { a: "1001", b: "1001", expected: "10010" },
  { a: "1111111111", b: "1", expected: "10000000000" },
  { a: "1010101010", b: "0101010101", expected: "1111111111" },
  { a: "1100110011", b: "0011001100", expected: "1111111111" },
  { a: "1".repeat(50), b: "1", expected: "1" + "0".repeat(50) },
  {
    a: "1".repeat(100),
    b: "1".repeat(100),
    expected: "1".repeat(100) + "0",
  },
  {
    a: "10101010101010101010",
    b: "11001100110011001100",
    expected: "101110111011101110110",
  },
];

// Run tests
describe("Add Binary - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ a, b, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(a, b);
          if (name === "Conversion (Brute - Not Safe)" && index === 18) {
            expect(result).not.toBe(expected);
          } else {
            expect(result).toBe(expected);
          }
        });
      });
    });
  });
});
