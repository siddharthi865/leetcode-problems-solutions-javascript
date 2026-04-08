// Import both solutions
const lengthOfLastWordBrute = require("./solutions/solution1");
const lengthOfLastWordOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: lengthOfLastWordBrute },
  { name: "Reverse Traversal (Optimal)", fn: lengthOfLastWordOptimal },
];

// Store test cases
const testCases = [
  { s: "Hello World", expected: 5 },
  { s: "   fly me   to   the moon  ", expected: 4 },
  { s: "luffy is still joyboy", expected: 6 },
  { s: "a", expected: 1 },
  { s: "a ", expected: 1 },
  { s: " a", expected: 1 },
  { s: "day", expected: 3 },
  { s: "day   ", expected: 3 },
  { s: "   day", expected: 3 },
  { s: "multiple words here", expected: 4 },
  { s: "multiple words here   ", expected: 4 },
  { s: "   multiple words here", expected: 4 },
  { s: "endswithspace ", expected: 13 },
  { s: " spacebefore", expected: 11 },
  { s: "   both sides   ", expected: 5 },
  { s: "one two three four", expected: 4 },
  { s: "one two three four   ", expected: 4 },
  { s: "   one two three four", expected: 4 },
  { s: "single", expected: 6 },
  { s: "   single   ", expected: 6 },
  { s: "a b c d e", expected: 1 },
  { s: "a b c d e   ", expected: 1 },
  { s: "   a b c d e", expected: 1 },
  { s: "word1 word2 word3", expected: 5 },
  { s: "word1 word2 word3   ", expected: 5 },
  { s: "   word1 word2 word3", expected: 5 },
  { s: "x y z", expected: 1 },
  { s: "   x y z   ", expected: 1 },
  { s: "lastwordtest", expected: 12 },
  { s: "   lastwordtest   ", expected: 12 },
];

// Run tests
describe("Length of Last Word - All Implementations", () => {
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
