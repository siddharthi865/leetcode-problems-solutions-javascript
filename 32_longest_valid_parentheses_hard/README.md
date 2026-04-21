# Longest Valid Parentheses (LeetCode #32)

## Problem Statement

Given a string `s` containing only the characters `'('` and `')'`, return the **length of the longest valid (well-formed) parentheses substring**.

A valid parentheses substring must:

- Have matching opening and closing brackets
- Maintain correct nesting order

### Constraints

- `0 <= s.length <= 3 * 10^4`
- `s[i]` is either `'('` or `')'`

## Examples

**Example 1:**

```
Input: s = "(()"
Output: 2
```

**Example 2:**

```
Input: s = ")()())"
Output: 4
```

**Example 3:**

```
Input: s = ""
Output: 0
```

## Solutions

### Solution 1: Brute Force

#### Approach

We generate **all possible substrings** and check whether each substring is a valid parentheses string.

A substring is valid if:

- Every `'('` is matched with a `')'`
- At no point do closing brackets exceed opening ones

#### Steps

1. Generate all substrings
2. For each substring:
   - Validate using a counter
3. Track the maximum valid length

#### Complexity

- **Time Complexity:** O(n⁴)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Stack-Based Approach

#### Approach

We use a **stack to store indices** of characters.

Key idea:

- Track indices of unmatched parentheses
- Use them to calculate valid substring lengths

#### Steps

1. Initialize stack with `-1` (base index)
2. Iterate through string:
   - If `'('` → push index
   - If `')'`:
     - Pop from stack
     - If stack becomes empty → push current index
     - Else → calculate length using:
       ```
       current_length = i - stack[top]
       ```
3. Track maximum length

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Two-Pass Counter (Optimal)

#### Approach

We scan the string **twice**:

1. Left → Right
2. Right → Left

We count:

- `left` = number of `'('`
- `right` = number of `')'`

#### Key Insight

- If `left === right` → valid substring
- If imbalance occurs → reset counters

Two passes are needed to handle cases like:

- `"(()"` (missed in left-to-right)
- `")()())"` (handled correctly)

#### Steps

**Pass 1 (Left → Right):**

- Increment counters
- Reset if `right > left`

**Pass 2 (Right → Left):**

- Increment counters
- Reset if `left > right`

Track max length in both passes.

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach         | Time Complexity | Space Complexity | Notes                            |
| ---------------- | --------------- | ---------------- | -------------------------------- |
| Brute Force      | O(n⁴)           | O(n)             | Very slow, checks all substrings |
| Stack            | O(n)            | O(n)             | Standard and intuitive           |
| Two-Pass Counter | O(n)            | O(1)             | Optimal and most efficient       |
