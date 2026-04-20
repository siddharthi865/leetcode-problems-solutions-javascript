# Generate Parentheses (LeetCode #22)

## Problem Statement

Given an integer `n`, generate all combinations of **well-formed parentheses** consisting of `n` pairs.

A parentheses string is considered valid if:

- Every opening bracket `(` has a matching closing bracket `)`
- Parentheses are closed in the correct order

### Constraints

- `1 <= n <= 8`

### Examples

**Example 1:**

```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

**Example 2:**

```
Input: n = 1
Output: ["()"]
```

## Solutions

### Solution 1: Brute Force

#### Approach

We generate **all possible strings** of length `2n` using `'('` and `')'`, then filter out only the **valid parentheses combinations**.

#### Steps

1. Generate all possible combinations of `'('` and `')'` of length `2n`
2. For each generated string:
   - Check if it is valid using a balance counter
3. Collect valid strings into the result

#### Complexity

- **Time Complexity:** O(n \* 2^(2n))
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Backtracking (Optimal)

#### Approach

Instead of generating all possibilities, we **build only valid sequences** using backtracking.

We ensure:

- We only add `'('` if we still have opening brackets left
- We only add `')'` if it won't make the sequence invalid

#### Steps

1. Start with an empty string
2. Keep track of:
   - Number of `'('` used (`open`)
   - Number of `')'` used (`close`)
3. Add `'('` if `open < n`
4. Add `')'` if `close < open`
5. When length reaches `2n`, add to result

#### Complexity

- **Time Complexity:** O(4^n / √n) _(Catalan number)_
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach     | Time Complexity | Space Complexity | Notes                              |
| ------------ | --------------- | ---------------- | ---------------------------------- |
| Brute Force  | O(n \* 2^(2n))  | O(n)             | Generates all, filters later       |
| Backtracking | O(4^n / √n)     | O(n)             | Optimal, builds only valid strings |
