# Plus One (LeetCode #66)

## Problem Statement

You are given a large integer represented as an array of digits `digits`, where each `digits[i]` is the **ith digit** of the integer. The digits are ordered from **most significant to least significant**.

Increment the large integer by **one** and return the resulting array of digits.

### Constraints

- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`
- The number does **not contain any leading zeros**

### Examples

**Example 1:**

```
Input: digits = [1,2,3]
Output: [1,2,4]
```

**Example 2:**

```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
```

**Example 3:**

```
Input: digits = [9]
Output: [1,0]
```

## Solutions

### Solution 1: Brute Force

#### Approach

Convert the array of digits into a number, add one, and then convert it back into an array.

#### Steps

1. Convert digits array into a number
2. Add `1` to the number
3. Convert the result back into an array of digits

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### ⚠️ Note

This approach is **not reliable in JavaScript** due to number size limitations (precision issues for large inputs).

---

### Solution 2: Iterative Carry (Optimal)

#### Approach

Simulate manual addition by traversing the array from right to left and handling carry.

#### Steps

1. Start from the last digit
2. If the digit is less than `9`, increment it and return the array
3. If the digit is `9`, set it to `0` and continue (carry forward)
4. If all digits are `9`, create a new array with leading `1` followed by zeros

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

## Summary

| Approach        | Time Complexity | Space Complexity | Notes                                 |
| --------------- | --------------- | ---------------- | ------------------------------------- |
| Brute Force     | O(n)            | O(n)             | Fails for large numbers in JavaScript |
| Iterative Carry | O(n)            | O(1)             | Optimal and handles all edge cases    |
