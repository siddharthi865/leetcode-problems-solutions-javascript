// Import both solutions
const countAndSayRecursive = require("./solutions/solution1");
const countAndSayIterative = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Recursive", fn: countAndSayRecursive },
  { name: "Iterative", fn: countAndSayIterative },
];

// Store test cases
const testCases = [
  { n: 1, expected: "1" },
  { n: 2, expected: "11" },
  { n: 3, expected: "21" },
  { n: 4, expected: "1211" },
  { n: 5, expected: "111221" },
  { n: 6, expected: "312211" },
  { n: 7, expected: "13112221" },
  { n: 8, expected: "1113213211" },
  { n: 9, expected: "31131211131221" },
  { n: 10, expected: "13211311123113112211" },

  { n: 1, expected: "1" },
  { n: 2, expected: "11" },
  { n: 3, expected: "21" },
  { n: 4, expected: "1211" },
  { n: 5, expected: "111221" },

  { n: 6, expected: "312211" },
  { n: 7, expected: "13112221" },
  { n: 8, expected: "1113213211" },
  { n: 9, expected: "31131211131221" },
  { n: 10, expected: "13211311123113112211" },

  { n: 11, expected: "11131221133112132113212221" },
  { n: 12, expected: "3113112221232112111312211312113211" },
  { n: 13, expected: "1321132132111213122112311311222113111221131221" },
  {
    n: 14,
    expected: "11131221131211131231121113112221121321132132211331222113112211",
  },
];

// Run tests
describe("Count And Say - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ n, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(n);

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
