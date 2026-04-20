// Import both solutions
const generateParenthesisBrute = require("./solutions/solution1");
const generateParenthesisOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: generateParenthesisBrute },
  { name: "Backtracking (Optimal)", fn: generateParenthesisOptimal },
];

// Store test cases
const testCases = [
  { n: 1, expected: ["()"] },
  { n: 2, expected: ["(())", "()()"] },
  { n: 3, expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },

  // n = 1 edge repetition
  { n: 1, expected: ["()"] },
  { n: 1, expected: ["()"] },

  // n = 2 variations
  { n: 2, expected: ["(())", "()()"] },
  { n: 2, expected: ["(())", "()()"] },
  { n: 2, expected: ["(())", "()()"] },

  // n = 3 repeated for robustness
  { n: 3, expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
  { n: 3, expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },

  // n = 4 (14 combinations)
  {
    n: 4,
    expected: [
      "(((())))",
      "((()()))",
      "((())())",
      "((()))()",
      "(()(()))",
      "(()()())",
      "(()())()",
      "(())(())",
      "(())()()",
      "()((()))",
      "()(()())",
      "()(())()",
      "()()(())",
      "()()()()",
    ],
  },

  // more n = 4 repeats
  {
    n: 4,
    expected: [
      "(((())))",
      "((()()))",
      "((())())",
      "((()))()",
      "(()(()))",
      "(()()())",
      "(()())()",
      "(())(())",
      "(())()()",
      "()((()))",
      "()(()())",
      "()(())()",
      "()()(())",
      "()()()()",
    ],
  },

  // n = 5 (only length check via count = 42)
  { n: 5, expectedLength: 42 },
  { n: 5, expectedLength: 42 },
  { n: 5, expectedLength: 42 },

  // n = 6 (Catalan = 132)
  { n: 6, expectedLength: 132 },
  { n: 6, expectedLength: 132 },

  // n = 7 (Catalan = 429)
  { n: 7, expectedLength: 429 },
  { n: 7, expectedLength: 429 },

  // n = 8 (max constraint, Catalan = 1430)
  { n: 8, expectedLength: 1430 },
  { n: 8, expectedLength: 1430 },

  // Mixed checks
  { n: 3, expectedLength: 5 },
  { n: 4, expectedLength: 14 },
  { n: 2, expectedLength: 2 },

  // Additional correctness checks
  { n: 1, expectedLength: 1 },
  { n: 2, expectedLength: 2 },
  { n: 3, expectedLength: 5 },
  { n: 4, expectedLength: 14 },
  { n: 5, expectedLength: 42 },
];

// Run tests
describe("Generate Parentheses - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ n, expected, expectedLength }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(n);

          if (expected) {
            expect(result.length).toBe(expected.length);
            expect([...result].sort()).toEqual([...expected].sort());
          }

          if (expectedLength !== undefined) {
            expect(result.length).toBe(expectedLength);
          }
        });
      });
    });
  });
});
