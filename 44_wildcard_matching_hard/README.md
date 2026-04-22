# Wildcard Matching (LeetCode #44)

## Problem Statement

Given an input string `s` and a pattern `p`, implement wildcard pattern matching with support for:

- `'?'` → Matches **any single character**
- `'*'` → Matches **any sequence of characters** (including empty)

The matching should cover the **entire input string** (not partial).

### Constraints

- `0 <= s.length, p.length <= 2000`
- `s` contains only lowercase English letters
- `p` contains only lowercase English letters, `'?'`, or `'*'`

## Examples

**Example 1:**

```
Input: s = "aa", p = "a"
Output: false
```

**Example 2:**

```
Input: s = "aa", p = "\*"
Output: true
```

**Example 3:**

```
Input: s = "cb", p = "?a"
Output: false
```

## Solutions

### Solution 1: Brute Force (Recursion)

#### Approach

We recursively try all possibilities:

- If characters match → move both pointers
- If `'?'` → matches any single character
- If `'*'`:
  - Match **zero characters**
  - Match **one or more characters**

This explores **all combinations**.

#### Steps

1. Start from index `0` in both `s` and `p`
2. If match or `'?'` → move both
3. If `'*'`:
   - Skip it OR
   - Use it to match current character
4. Return true only if both are fully consumed

#### Complexity

- **Time Complexity:** O(2^(n + m))
- **Space Complexity:** O(n + m)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Memoization (Top-Down DP)

#### Approach

Same as recursion, but cache results to avoid recomputation.

We store results of `(i, j)` states.

#### Steps

1. Use recursion with `(i, j)`
2. Store computed results in a map
3. Reuse cached results when revisiting states
4. Avoid exponential recomputation

#### Complexity

- **Time Complexity:** O(n × m)
- **Space Complexity:** O(n × m)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Dynamic Programming (Tabulation)

#### Approach

We build a DP table:

- `dp[i][j]` → whether first `i` characters of `s` match first `j` of `p`

#### Transitions

- If match or `'?'`:

```

dp[i][j] = dp[i-1][j-1]

```

- If `'*'`:

```

dp[i][j] = dp[i][j-1] (empty)
OR dp[i-1][j] (consume char)

```

#### Steps

1. Initialize DP table `(n+1) x (m+1)`
2. Base case: `dp[0][0] = true`
3. Fill first row for `'*'`
4. Fill table using transitions
5. Return `dp[n][m]`

#### Complexity

- **Time Complexity:** O(n × m)
- **Space Complexity:** O(n × m)

#### [Click for solution](./solutions/solution3.js)

---

### Solution 4: Greedy (Optimal)

#### Approach

Use two pointers and track last `'*'`:

- Only backtrack to last `'*'`
- Expand `'*'` lazily when mismatch occurs

#### Steps

1. Initialize pointers `i`, `j`
2. Track:

- `starIndex`
- `matchIndex`

3. If match or `'?'` → move both
4. If `'*'` → store position
5. If mismatch:

- If `'*'` exists → backtrack
- Else → return false

6. Ensure remaining pattern is only `'*'`

#### Complexity

- **Time Complexity:** O(n + m)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution4.js)

## Summary

| Approach               | Time Complexity | Space Complexity | Notes                      |
| ---------------------- | --------------- | ---------------- | -------------------------- |
| Brute Force            | O(2^(n+m))      | O(n+m)           | Exponential, not practical |
| Memoization (Top-Down) | O(n × m)        | O(n × m)         | Optimized recursion        |
| DP (Tabulation)        | O(n × m)        | O(n × m)         | Stable and iterative       |
| Greedy (Optimal)       | O(n + m)        | O(1)             | Best performance           |
