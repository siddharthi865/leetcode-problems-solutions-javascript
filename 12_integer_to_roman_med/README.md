# Integer to Roman (LeetCode #12)

## Problem Statement

Given an integer `num`, convert it to a **Roman numeral**.

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

### Rules

- Roman numerals are formed by appending symbols from **largest to smallest**.
- Certain numbers use **subtractive notation**:
  - 4 → IV
  - 9 → IX
  - 40 → XL
  - 90 → XC
  - 400 → CD
  - 900 → CM
- Symbols `I`, `X`, `C`, `M` can be repeated at most **3 times**.
- Symbols `V`, `L`, `D` cannot be repeated.

### Constraints

- `1 <= num <= 3999`

## Examples

**Example 1:**

```
Input: num = 3749
Output: "MMMDCCXLIX"
```

**Example 2:**

```
Input: num = 58
Output: "LVIII"
```

**Example 3:**

```
Input: num = 1994
Output: "MCMXCIV"
```

## Solutions

### Solution 1: Brute Force (Digit by Digit)

#### Approach

We break the number into **thousands, hundreds, tens, and ones**, and convert each part separately using Roman numeral rules.

#### Steps

1. Extract thousands, hundreds, tens, ones using division
2. Convert each place value:
   - Handle special cases (4 and 9)
   - Otherwise, build using standard symbols
3. Concatenate all parts

#### Complexity

- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Greedy (Optimal)

#### Approach

We use a **greedy strategy** by always subtracting the **largest possible Roman value**.

We maintain two arrays:

- One for values
- One for corresponding Roman symbols

#### Steps

1. Create arrays:

```

values = [1000,900,500,400,...,1]
symbols = ["M","CM","D","CD",...,"I"]

```

2. Iterate through values:

- While `num >= value`, subtract it and append symbol

3. Continue until `num` becomes 0

#### Complexity

- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach               | Time Complexity | Space Complexity | Notes                      |
| ---------------------- | --------------- | ---------------- | -------------------------- |
| Digit-by-Digit (Brute) | O(1)            | O(1)             | Clear but verbose          |
| Greedy (Optimal)       | O(1)            | O(1)             | Clean and widely preferred |
