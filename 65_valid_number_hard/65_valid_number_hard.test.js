// Import all 3 solutions
const isNumberBrute = require("./solutions/solution1");
const isNumberState = require("./solutions/solution2");
const isNumberFSM = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: isNumberBrute },
  { name: "State Tracking", fn: isNumberState },
  { name: "Finite State Machine", fn: isNumberFSM },
];

// Store test cases
const testCases = [
  { s: "0", expected: true },
  { s: "2", expected: true },
  { s: "0089", expected: true },
  { s: "-0.1", expected: true },
  { s: "+3.14", expected: true },
  { s: "4.", expected: true },
  { s: "-.9", expected: true },
  { s: "2e10", expected: true },
  { s: "-90E3", expected: true },
  { s: "3e+7", expected: true },
  { s: "+6e-1", expected: true },
  { s: "53.5e93", expected: true },
  { s: "-123.456e789", expected: true },

  { s: "abc", expected: false },
  { s: "1a", expected: false },
  { s: "1e", expected: false },
  { s: "e3", expected: false },
  { s: "99e2.5", expected: false },
  { s: "--6", expected: false },
  { s: "-+3", expected: false },
  { s: "95a54e53", expected: false },
  { s: ".", expected: false },
  { s: "+.", expected: false },
  { s: "-.", expected: false },
  { s: ".e1", expected: false },
  { s: "e", expected: false },
  { s: "+e1", expected: false },
  { s: "1e1e1", expected: false },
  { s: "1..", expected: false },
  { s: ".1.", expected: false },
];

// Run tests
describe("Valid Number - All Implementations", () => {
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
