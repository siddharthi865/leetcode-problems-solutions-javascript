# Valid Parentheses (LeetCode #20)

## Problem Statement

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is **valid**.

A string is valid if:

- Open brackets are closed by the **same type** of brackets.
- Open brackets are closed in the **correct order**.
- Every closing bracket has a corresponding **open bracket**.

### Constraints

- `1 <= s.length <= 10^4`
- `s` consists only of the characters `'()[]{}'`

---

## Examples

**Example 1:**

```
Input: s = "()"
Output: true
```

**Example 2:**

```
Input: s = "()[]{}"
Output: true
```

**Example 3:**

```
Input: s = "(]"
Output: false
```

**Example 4:**

```
Input: s = "([])"
Output: true
```

**Example 5:**

```
Input: s = "([)]"
Output: false
```

## Solutions

### Solution 1: Brute Force (String Reduction)

#### Approach

We repeatedly remove valid adjacent bracket pairs:

- `"()"`, `"{}"`, `"[]"`

If the string becomes empty → it's valid.
If no more removals are possible → it's invalid.

#### Steps

1. Loop until no changes occur:
   - Scan the string
   - Remove adjacent valid pairs
2. Update the string after each pass
3. If final string is empty → valid
4. Otherwise → invalid

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Stack (Optimal)

#### Approach

Use a **stack** to track opening brackets.

- Push opening brackets onto the stack
- For closing brackets:
  - Check if it matches the top of the stack
  - If yes → pop
  - If not → invalid

At the end:

- If stack is empty → valid
- Otherwise → invalid

#### Steps

1. Initialize an empty stack
2. Traverse the string:
   - If opening bracket → push
   - If closing bracket:
     - Check stack top
     - If mismatch or empty → return false
     - Else → pop
3. After traversal:
   - If stack empty → return true
   - Else → return false

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach        | Time Complexity | Space Complexity | Notes                       |
| --------------- | --------------- | ---------------- | --------------------------- |
| Brute Force     | O(n²)           | O(n)             | Simple but inefficient      |
| Stack (Optimal) | O(n)            | O(n)             | Best and most commonly used |
