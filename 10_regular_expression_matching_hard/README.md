# Regular Expression Matching (LeetCode #10)

## Problem Statement

Given an input string `s` and a pattern `p`, implement regular expression matching with support for:

- `.` Matches **any single character**
- `*` Matches **zero or more of the preceding element**

Return a boolean indicating whether the pattern **matches the entire string** (not partial).

### Constraints

- `1 <= s.length <= 20`
- `1 <= p.length <= 20`
- `s` contains only lowercase English letters
- `p` contains only lowercase English letters, `.` and `*`
- It is guaranteed that `*` always has a valid preceding character

## Examples

**Example 1:**

```
Input: s = "aa", p = "a"
Output: false
```

**Example 2:**

```
Input: s = "aa", p = "a\*"
Output: true
```

**Example 3:**

```
Input: s = "ab", p = ".\*"
Output: true
```

## Solutions

### Solution 1: Brute Force (Recursion)

#### Approach

We recursively try all possible ways to match the string with the pattern.

At each step:

- Check if current characters match
- If next character in pattern is `*`, we have two choices:
  - Skip `*` and its preceding character
  - Use `*` to match current character (if possible)

#### Steps

1. Start from index `0` in both string and pattern
2. Check if current characters match
3. If next pattern character is `*`:
   - Skip pattern (`j + 2`)
   - OR consume character (`i + 1`)
4. If no `*`, move both pointers
5. Return true only if both string and pattern are fully consumed

#### Complexity

- **Time Complexity:** O(2^(m+n))
- **Space Complexity:** O(m + n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Recursion + Memoization (Top-Down DP)

#### Approach

We optimize brute force by storing results of previously computed states.

We use a memo table:

```

memo[i][j] = does s[i:] match p[j:]

```

This avoids recomputation and reduces time complexity.

#### Steps

1. Use recursion similar to brute force
2. Before computing, check if result already exists in memo
3. Store computed results in memo
4. Return stored value if available

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Bottom-Up Dynamic Programming (Optimal)

#### Approach

We build a DP table where:

```

dp[i][j] = does s[0..i-1] match p[0..j-1]

```

We fill the table iteratively based on:

- Character match
- `.` wildcard
- `*` handling (zero or more occurrences)

#### Steps

1. Initialize DP table of size `(m+1) × (n+1)`
2. Set `dp[0][0] = true`
3. Handle patterns like `a*`, `a*b*` for empty string
4. Iterate through string and pattern:
   - If characters match → take diagonal value
   - If `*`:
     - Ignore (`dp[i][j-2]`)
     - OR use it (`dp[i-1][j]`) if matching
5. Return `dp[m][n]`

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                  | Time Complexity | Space Complexity | Notes                        |
| ------------------------- | --------------- | ---------------- | ---------------------------- |
| Brute Force (Recursion)   | O(2^(m+n))      | O(m + n)         | Simple but exponential       |
| Memoization (Top-Down DP) | O(m × n)        | O(m × n)         | Eliminates recomputation     |
| Bottom-Up DP (Optimal)    | O(m × n)        | O(m × n)         | Most efficient and iterative |
