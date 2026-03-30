# Roman to Integer (LeetCode #13)

## Problem Statement

Given a string `s` representing a Roman numeral, convert it to an integer.

Roman numerals are represented by seven different symbols:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

Roman numerals are usually written largest to smallest from left to right. However, in certain cases, a smaller numeral placed before a larger numeral indicates subtraction.

### Subtraction Rules

- I can be placed before V (5) and X (10) → 4, 9
- X can be placed before L (50) and C (100) → 40, 90
- C can be placed before D (500) and M (1000) → 400, 900

---

### Constraints

- `1 <= s.length <= 15`
- `s` contains only characters: `'I', 'V', 'X', 'L', 'C', 'D', 'M'`
- `s` is guaranteed to be a valid Roman numeral in range `[1, 3999]`

---

### Examples

**Example 1:**

```
Input: s = "III"
Output: 3
```

**Example 2:**

```
Input: s = "LVIII"
Output: 58
```

**Example 3:**

```
Input: s = "MCMXCIV"
Output: 1994
```

---

## Solutions

### Solution 1: Brute Force (Subtractive Pair Matching)

#### Approach

We explicitly check for all **six subtractive pairs** (`IV, IX, XL, XC, CD, CM`) while traversing the string.

If a pair is found, we process both characters together. Otherwise, we process one character at a time.

#### Steps

1. Traverse the string from left to right
2. Check if current + next character form a subtractive pair
3. If yes → add corresponding value and skip next character
4. Otherwise → add value of current character

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Forward Traversal (Compare Adjacent Values)

#### Approach

Instead of checking all subtractive cases explicitly, we use a key insight:

> If current value < next value → subtract  
> Otherwise → add

#### Steps

1. Traverse from left to right
2. Convert current and next Roman symbols to values
3. If current < next → subtract current
4. Else → add current

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Reverse Traversal (Optimal)

#### Approach

Traverse the string from **right to left** and track the previous value.

> If current < previous → subtract  
> Otherwise → add

This eliminates the need to look ahead.

#### Steps

1. Initialize `prev = 0`
2. Traverse from end to start
3. Convert current symbol to value
4. If current < prev → subtract
5. Else → add
6. Update `prev`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

---

## Summary

| Approach          | Time Complexity | Space Complexity | Notes                              |
| ----------------- | --------------- | ---------------- | ---------------------------------- |
| Brute Force       | O(n)            | O(1)             | Explicitly checks all pairs        |
| Forward Traversal | O(n)            | O(1)             | Uses look-ahead comparison         |
| Reverse Traversal | O(n)            | O(1)             | Cleanest and most optimal solution |
