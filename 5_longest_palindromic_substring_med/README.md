# Longest Palindromic Substring (LeetCode #5)

## Problem Statement

Given a string `s`, return the **longest palindromic substring** in `s`.

A **palindrome** is a string that reads the same forward and backward.

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of only digits and English letters

### Examples

**Example 1:**

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

**Example 2:**

```
Input: s = "cbbd"
Output: "bb"
```

## Solutions

### Solution 1: Brute Force

#### Approach

We generate **all possible substrings** and check each one to see if it is a palindrome.
We keep track of the longest valid palindrome found.

#### Steps

1. Generate all substrings using two loops
2. For each substring:
   - Check if it is a palindrome
3. Track the longest palindrome found
4. Return the result

#### Complexity

- **Time Complexity:** O(n³)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Expand Around Center

#### Approach

A palindrome expands from its center.
Each index can act as:

- A center of **odd-length palindrome**
- A center between two characters (**even-length palindrome**)

We expand outward from each center and track the longest palindrome.

#### Steps

1. Iterate through each index
2. Expand around:
   - `(i, i)` → odd length
   - `(i, i+1)` → even length
3. Update longest palindrome if needed
4. Return result

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Manacher’s Algorithm (Optimal)

#### Approach

Manacher’s Algorithm transforms the string to handle both odd and even palindromes uniformly, allowing us to compute the longest palindrome in **linear time**.

We:

- Insert separators (`#`) between characters
- Use a radius array `p[]` to store palindrome lengths
- Use previously computed values to avoid redundant checks

#### Steps

1. Transform string: `"abba"` → `"^#a#b#b#a#$"`
2. Initialize:
   - `center` and `right` boundary
   - `p[]` array
3. For each index:
   - Use mirror index to minimize expansion
   - Expand around center
   - Update `center` and `right`
4. Find max value in `p[]`
5. Convert index back to original string

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach             | Time Complexity | Space Complexity | Notes                          |
| -------------------- | --------------- | ---------------- | ------------------------------ |
| Brute Force          | O(n³)           | O(1)             | Simple but very slow           |
| Expand Around Center | O(n²)           | O(1)             | Most common interview solution |
| Manacher’s Algorithm | O(n)            | O(n)             | Optimal but complex            |
