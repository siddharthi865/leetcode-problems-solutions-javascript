// Import all 3 solutions
const longestPalindromeBrute = require("./solutions/solution1");
const longestPalindromeExpand = require("./solutions/solution2");
const longestPalindromeOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: longestPalindromeBrute },
  { name: "Expand Around Center", fn: longestPalindromeExpand },
  { name: "Manacher (Optimal)", fn: longestPalindromeOptimal },
];

// Helper to validate palindrome
function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
}

// Store test cases
const testCases = [
  { s: "babad", expectedList: ["bab", "aba"] },
  { s: "cbbd", expectedList: ["bb"] },
  { s: "a", expectedList: ["a"] },
  { s: "ac", expectedList: ["a", "c"] },
  { s: "racecar", expectedList: ["racecar"] },
  { s: "abba", expectedList: ["abba"] },
  { s: "abcda", expectedList: ["a", "b", "c", "d"] },
  { s: "aaaa", expectedList: ["aaaa"] },
  { s: "aaabaaaa", expectedList: ["aaabaaa"] },
  { s: "bananas", expectedList: ["anana"] },
  { s: "forgeeksskeegfor", expectedList: ["geeksskeeg"] },
  { s: "abccba", expectedList: ["abccba"] },
  { s: "abcba", expectedList: ["abcba"] },
  { s: "abcdedcba", expectedList: ["abcdedcba"] },
  { s: "abacdfgdcaba", expectedList: ["aba"] },
  { s: "abcd", expectedList: ["a", "b", "c", "d"] },
  { s: "aabbaa", expectedList: ["aabbaa"] },
  { s: "abcddcba", expectedList: ["abcddcba"] },
  { s: "abb", expectedList: ["bb"] },
  { s: "bb", expectedList: ["bb"] },
  { s: "xyzzyx", expectedList: ["xyzzyx"] },
  { s: "abaxyzzyxf", expectedList: ["xyzzyx"] },
  { s: "abaaba", expectedList: ["abaaba"] },
  { s: "aacabdkacaa", expectedList: ["aca"] },
  { s: "abbac", expectedList: ["abba"] },
  { s: "abcdcbe", expectedList: ["bcdcb"] },
  { s: "aaaabaaa", expectedList: ["aaabaaa"] },
  { s: "abcbaabcdcba", expectedList: ["abcdcba"] },
  { s: "zzzzzz", expectedList: ["zzzzzz"] },
  { s: "abababab", expectedList: ["abababa", "bababab"] },
];

// Run tests
describe("Longest Palindromic Substring - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ s, expectedList }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(s);

          // Check it's a palindrome
          expect(isPalindrome(result)).toBe(true);

          // Check it's one of valid expected answers
          expect(expectedList.includes(result)).toBe(true);
        });
      });
    });
  });
});
