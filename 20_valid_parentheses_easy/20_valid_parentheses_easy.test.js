// Import all 3 solutions
const isValidBrute = require("./solutions/solution1");
const isValidStack = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force (String Reduction)", fn: isValidBrute },
  { name: "Stack Approach", fn: isValidStack },
];

// Store test cases
const testCases = [
  { s: "()", expected: true },
  { s: "()[]{}", expected: true },
  { s: "(]", expected: false },
  { s: "([])", expected: true },
  { s: "([)]", expected: false },
  { s: "{[]}", expected: true },
  { s: "((()))", expected: true },
  { s: "((())", expected: false },
  { s: "())", expected: false },
  { s: "[({})]", expected: true },
  { s: "[({})](]", expected: false },
  { s: "", expected: true }, // edge (though constraint says >=1, good to test)
  { s: "[", expected: false },
  { s: "]", expected: false },
  { s: "(((((((((())))))))))", expected: true },
  { s: "(((((((((()))))))))))", expected: false },
  { s: "{}[]()", expected: true },
  { s: "{[()()]}", expected: true },
  { s: "{[(])}", expected: false },
  { s: "()[{}({})]", expected: true },
];

// Run tests
describe("Valid Parentheses - All Implementations", () => {
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
