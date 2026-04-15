// Import all 3 solutions
const solution1 = require("./solutions/solution1");
const solution2 = require("./solutions/solution2");
const solution3 = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force (Clean + Reverse)", fn: solution1 },
  { name: "Two Pointer", fn: solution2 },
  { name: "Optimal Two Pointer", fn: solution3 },
];

// Store test cases
const testCases = [
  { s: "A man, a plan, a canal: Panama", expected: true },
  { s: "race a car", expected: false },
  { s: " ", expected: true },
  { s: "", expected: true },
  { s: "a", expected: true },
  { s: "ab", expected: false },
  { s: "aba", expected: true },
  { s: "abba", expected: true },
  { s: "abcba", expected: true },
  { s: "abc", expected: false },
  { s: "Aba", expected: true },
  { s: "No lemon, no melon", expected: true },
  { s: "Was it a car or a cat I saw?", expected: true },
  { s: "Madam In Eden, I'm Adam", expected: true },
  { s: "hello world", expected: false },
  { s: "12321", expected: true },
  { s: "1231", expected: false },
  { s: "1a2", expected: false },
  { s: "1a1", expected: true },
  { s: "!!", expected: true },
  { s: ".,", expected: true },
  { s: "0P", expected: false },
  { s: "Able was I ere I saw Elba", expected: true },
  { s: "Step on no pets", expected: true },
  { s: "Top spot", expected: true },
  { s: "Not a palindrome", expected: false },
  { s: "123@#321", expected: true },
  { s: "abc@d#cba", expected: true },
  { s: "abcd@dcba!", expected: true },
  { s: "abccba!!123321", expected: false },
];

// Run tests
describe("Valid Palindrome - All Implementations", () => {
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
