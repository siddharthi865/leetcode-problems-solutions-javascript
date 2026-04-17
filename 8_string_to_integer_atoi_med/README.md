# String to Integer (atoi) (LeetCode #8)

## Problem Statement

Implement the function `myAtoi(string s)` which converts a string into a **32-bit signed integer**.

The algorithm follows these rules:

1. **Ignore leading whitespace**
2. **Check sign** (`'+'` or `'-'`)
3. **Read digits** until a non-digit character is encountered
4. If no digits are read → return `0`
5. Clamp result within **32-bit signed integer range**

### Constraints

- `0 <= s.length <= 200`
- `s` consists of:
  - English letters (a-z, A-Z)
  - Digits (0-9)
  - `' '`, `'+'`, `'-'`, `'.'`

## Examples

**Example 1:**

```
Input: s = "42"
Output: 42
```

**Example 2:**

```
Input: s = " -042"
Output: -42
```

**Example 3:**

```
Input: s = "1337c0d3"
Output: 1337
```

**Example 4:**

```
Input: s = "0-1"
Output: 0
```

**Example 5:**

```
Input: s = "words and 987"
Output: 0
```

## Solutions

### Solution 1: Basic Parsing (Brute Force)

#### Approach

We simulate the process step-by-step:

- Skip leading spaces
- Detect sign
- Convert digits into a number
- Stop at first non-digit
- Clamp the result

#### Steps

1. Skip all leading whitespace
2. Check for `'+'` or `'-'`
3. Iterate through digits:
   - Convert character → number
   - Build result using `num = num * 10 + digit`
4. If no digits found → return `0`
5. Apply sign and clamp result

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Overflow Safe (Optimal)

#### Approach

Same as Solution 1, but we **prevent overflow before it happens**.

Before updating:

```

num = num \* 10 + digit

```

We check whether this operation would exceed:

```

[-2147483648, 2147483647]

```

#### Steps

1. Skip whitespace
2. Detect sign
3. Traverse digits:
   - Check overflow condition before updating number
   - If overflow → return INT_MAX or INT_MIN immediately
4. If no digits found → return `0`
5. Return `num * sign`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach      | Time Complexity | Space Complexity | Notes                              |
| ------------- | --------------- | ---------------- | ---------------------------------- |
| Basic Parsing | O(n)            | O(1)             | Simple but may overflow internally |
| Optimal       | O(n)            | O(1)             | Handles overflow safely (best)     |
