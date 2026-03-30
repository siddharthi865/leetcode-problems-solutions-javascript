# Longest Common Prefix (LeetCode #14)

## Problem Statement

Write a function to find the **longest common prefix string** amongst an array of strings.

If there is no common prefix, return an empty string `""`.

### Constraints

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters if it is non-empty

### Examples

**Example 1:**

Input: strs = ["flower","flow","flight"]
Output: "fl"

**Example 2:**

Input: strs = ["dog","racecar","car"]
Output: ""

## Solutions

### Solution 1: Brute Force (Prefix Shrinking)

#### Approach

We assume the first string is the prefix and **keep shrinking it** until it matches all other strings.

#### Steps

1. Take the first string as `prefix`
2. Compare it with each string in the array
3. If it doesn't match:
   - Remove the last character from prefix
4. Repeat until prefix matches all strings or becomes empty

#### Complexity

- **Time Complexity:** O(n \* m²)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Horizontal Scanning

#### Approach

We iteratively compute the common prefix between the current prefix and each string.

#### Steps

1. Initialize prefix as first string
2. Compare prefix with each string:
   - Find matching characters
   - Update prefix to matched portion
3. Stop early if prefix becomes empty

#### Complexity

- **Time Complexity:** O(n \* m)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Vertical Scanning (Optimal)

#### Approach

We compare characters **column by column** across all strings.

#### Steps

1. Iterate over characters of the first string
2. For each index:
   - Compare with same index in all strings
3. If mismatch occurs:
   - Return substring up to previous index
4. If no mismatch, return full first string

#### Complexity

- **Time Complexity:** O(n \* m)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

---

## Summary

| Approach                    | Time Complexity | Space Complexity | Notes                              |
| --------------------------- | --------------- | ---------------- | ---------------------------------- |
| Brute Force                 | O(n \* m²)      | O(1)             | Simple but inefficient             |
| Horizontal Scanning         | O(n \* m)       | O(1)             | Efficient and easy to implement    |
| Vertical Scanning (Optimal) | O(n \* m)       | O(1)             | Cleanest and most optimal approach |
