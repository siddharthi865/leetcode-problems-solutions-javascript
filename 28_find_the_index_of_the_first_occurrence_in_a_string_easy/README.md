# Find the Index of the First Occurrence in a String (LeetCode #28)

## Problem Statement

Given two strings `haystack` and `needle`, return the **index of the first occurrence** of `needle` in `haystack`.

If `needle` is not part of `haystack`, return `-1`.

### Constraints

- `1 <= haystack.length, needle.length <= 10⁴`
- `haystack` and `needle` consist of only lowercase English characters

## Examples

**Example 1:**

```
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
```

**Example 2:**

```
Input: haystack = "leetcode", needle = "leeto"
Output: -1
```

**Example 3:**

```
Input: haystack = "hello", needle = "ll"
Output: 2
```

## Solutions

### Solution 1: Brute Force

#### Approach

We try every possible starting position in `haystack` and check if `needle` matches character-by-character.

#### Steps

1. Loop through `haystack` from index `0` to `n - m`
2. For each index, compare substring with `needle`
3. If all characters match → return index
4. If no match found → return `-1`

#### Complexity

- **Time Complexity:** O(n × m)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: KMP Algorithm (Optimal)

#### Approach

We use the **Knuth-Morris-Pratt (KMP)** algorithm to avoid redundant comparisons.

The key idea is to preprocess the `needle` and build an **LPS (Longest Prefix Suffix)** array.

This allows us to skip unnecessary comparisons when a mismatch occurs.

#### Steps

1. Build the LPS array for `needle`
2. Use two pointers:
   - One for `haystack`
   - One for `needle`
3. If characters match → move both pointers
4. If mismatch:
   - Use LPS to skip comparisons
5. If full match found → return index
6. If traversal ends → return `-1`

#### Complexity

- **Time Complexity:** O(n + m)
- **Space Complexity:** O(m)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach      | Time Complexity | Space Complexity | Notes                                 |
| ------------- | --------------- | ---------------- | ------------------------------------- |
| Brute Force   | O(n × m)        | O(1)             | Simple but inefficient                |
| KMP Algorithm | O(n + m)        | O(m)             | Optimal, avoids redundant comparisons |

```

```
