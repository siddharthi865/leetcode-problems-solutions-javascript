// Import all 3 solutions
const convertBrute = require("./solutions/solution1");
const convertBetter = require("./solutions/solution2");
const convertOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force (Matrix)", fn: convertBrute },
  { name: "Row Simulation", fn: convertBetter },
  { name: "Math Pattern (Optimal)", fn: convertOptimal },
];

// Store test cases
const testCases = [
  { s: "PAYPALISHIRING", numRows: 3, expected: "PAHNAPLSIIGYIR" },
  { s: "PAYPALISHIRING", numRows: 4, expected: "PINALSIGYAHRPI" },
  { s: "A", numRows: 1, expected: "A" },
  { s: "AB", numRows: 1, expected: "AB" },
  { s: "ABC", numRows: 2, expected: "ACB" },
  { s: "ABCD", numRows: 2, expected: "ACBD" },
  { s: "ABCDE", numRows: 3, expected: "AEBDC" },
  { s: "ABCDEFG", numRows: 3, expected: "AEBDFCG" },
  { s: "ABCDEFGH", numRows: 4, expected: "AGBFHCED" },
  { s: "ABCDEFGHIJK", numRows: 4, expected: "AGBFHCEIKDJ" },
  { s: "HELLOWORLD", numRows: 3, expected: "HOLELWRDLO" },
  { s: "HELLOWORLD", numRows: 4, expected: "HOEWRLOLLD" }, // fixed
  { s: "ZIGZAG", numRows: 2, expected: "ZGAIZG" }, // fixed
  { s: "ZIGZAG", numRows: 3, expected: "ZAIZGG" }, // fixed
  { s: "THISISAZIGZAG", numRows: 4, expected: "TAGHSZAIIIZSG" },
  { s: "THISISAZIGZAG", numRows: 5, expected: "TIHZGIAZSSAIG" },
  {
    s: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numRows: 5,
    expected: "AIQYBHJPRXZCGKOSWDFLNTVEMU",
  },
  {
    s: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numRows: 6,
    expected: "AKUBJLTVCIMSWDHNRXEGOQYFPZ",
  },
  { s: "123456789", numRows: 3, expected: "159246837" },
  { s: "123456789", numRows: 4, expected: "172683594" },
  { s: "AAAAAAAAAA", numRows: 3, expected: "AAAAAAAAAA" },
  { s: "BBBBBBBBBB", numRows: 5, expected: "BBBBBBBBBB" },
  { s: "ABCDE", numRows: 1, expected: "ABCDE" },
  { s: "ABCDE", numRows: 5, expected: "ABCDE" },
  { s: "ABCDE", numRows: 6, expected: "ABCDE" },
  { s: "A.B,C", numRows: 3, expected: "AC.,B" }, // fixed
  { s: "COMPLEXITY", numRows: 4, expected: "CXOEIMLTPY" }, // fixed
  { s: "DATASTRUCTURE", numRows: 3, expected: "DSCEAATUTRTRU" }, // fixed
  { s: "ALGORITHMS", numRows: 4, expected: "ATLIHGRMOS" }, // fixed
  { s: "NODEJS", numRows: 2, expected: "NDJOES" }, // fixed
];

// Run tests
describe("Zigzag Conversion - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ s, numRows, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(s, numRows);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
