# Letter Combinations of a Phone Number (LeetCode #17)

## Problem Statement

Given a string `digits` containing digits from **2–9 inclusive**, return all possible **letter combinations** that the number could represent.

Each digit maps to letters just like on a traditional phone keypad:

- 2 → abc
- 3 → def
- 4 → ghi
- 5 → jkl
- 6 → mno
- 7 → pqrs
- 8 → tuv
- 9 → wxyz

Return the answer in **any order**.

### Constraints

- `1 <= digits.length <= 4`
- `digits[i]` is a digit in the range `['2', '9']`

## Examples

**Example 1:**

```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

**Example 2:**

```
Input: digits = "2"
Output: ["a","b","c"]
```

**Example 3:**

```
Input: digits = "79"
Output: ["pw","px","py","pz","qw","qx","qy","qz","rw","rx","ry","rz","sw","sx","sy","sz"]
```

## Solutions

### Solution 1: Brute Force (Nested Loops)

#### Approach

We simulate all possible combinations using **nested loops**.
Since the maximum length is 4, we manually handle up to 4 levels.

#### Steps

1. Map digits to letters
2. Use nested loops for each digit
3. Build combinations step-by-step
4. Store all results

#### Complexity

- **Time Complexity:** O(4ⁿ)
- **Space Complexity:** O(4ⁿ)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Backtracking (DFS)

#### Approach

We use **recursion** to build combinations character by character.

At each step:

- Pick a letter from the current digit
- Recurse for the next digit
- Stop when the combination length equals digits length

#### Steps

1. Create digit → letter mapping
2. Use recursive function with:
   - Current index
   - Current path (string)
3. When path length equals digits length → store result
4. Explore all possibilities

#### Complexity

- **Time Complexity:** O(4ⁿ)
- **Space Complexity:** O(4ⁿ) (including recursion stack)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: BFS (Queue-Based)

#### Approach

We build combinations **level-by-level** using a queue.

- Start with an empty string
- For each digit:
  - Expand all existing combinations
  - Append new letters

#### Steps

1. Initialize queue with `[""]`
2. For each digit:
   - For each existing combination:
     - Append all possible letters
3. Replace queue with new combinations
4. Return final queue

#### Complexity

- **Time Complexity:** O(4ⁿ)
- **Space Complexity:** O(4ⁿ)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach     | Time Complexity | Space Complexity | Notes                         |
| ------------ | --------------- | ---------------- | ----------------------------- |
| Brute Force  | O(4ⁿ)           | O(4ⁿ)            | Not scalable, hardcoded loops |
| Backtracking | O(4ⁿ)           | O(4ⁿ)            | Most common & flexible        |
| BFS (Queue)  | O(4ⁿ)           | O(4ⁿ)            | Best iterative approach       |
