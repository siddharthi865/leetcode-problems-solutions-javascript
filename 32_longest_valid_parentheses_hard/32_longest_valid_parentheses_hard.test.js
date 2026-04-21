// Import all 3 solutions
const sol1 = require("./solutions/solution1");
const sol2 = require("./solutions/solution2");
const sol3 = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: sol1 },
  { name: "Stack Solution", fn: sol2 },
  { name: "Two Pass Optimal", fn: sol3 },
];

// Store test cases
const testCases = [
  { s: "", expected: 0 },
  { s: "(", expected: 0 },
  { s: ")", expected: 0 },
  { s: "()", expected: 2 },
  { s: "())", expected: 2 },
  { s: ")(", expected: 0 },
  { s: "()()", expected: 4 },
  { s: "(()", expected: 2 },
  { s: ")()())", expected: 4 },
  { s: "((()))", expected: 6 },
  { s: "(((", expected: 0 },
  { s: ")))", expected: 0 },
  { s: "()(())", expected: 6 },
  { s: "()(()", expected: 2 },
  { s: "(()())", expected: 6 },
  { s: "()(())(()", expected: 6 },
  { s: "(()((())", expected: 4 },
  { s: "(()())())", expected: 8 },
  { s: "(()())(()())", expected: 12 },
  { s: "(()(()))", expected: 8 },

  // Edge-heavy / mixed patterns
  { s: "()()()()()", expected: 10 },
  { s: "((((()))))", expected: 10 },
  { s: ")()(()))(()())", expected: 6 },
  { s: "(()))())(", expected: 4 },
  { s: "())((()))", expected: 6 },
  { s: "()(())((()))", expected: 12 },
  { s: "(()()(()))", expected: 10 },
  { s: "((()())())", expected: 10 },
  { s: "(()(()(())))", expected: 12 },
  { s: "())()(()())", expected: 8 },
];

// Run tests
describe("Longest Valid Parentheses - All Implementations", () => {
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
