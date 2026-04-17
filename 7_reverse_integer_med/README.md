# Reverse Integer (LeetCode #7)

## Problem Statement

Given a signed 32-bit integer `x`, return `x` with its digits reversed.

If reversing `x` causes the value to go outside the signed 32-bit integer range  
`[-2^31, 2^31 - 1]`, then return `0`.

Assume the environment does not allow you to store 64-bit integers.

### Constraints

- `-2^31 <= x <= 2^31 - 1`
- Do not use 64-bit integers
- Must handle overflow during computation

### Examples

**Example 1:**

```
Input: x = 123
Output: 321
```

**Example 2:**

```
Input: x = -123
Output: -321
```

**Example 3:**

```
Input: x = 120
Output: 21
```

## Solutions

### Solution 1: Brute Force (String Conversion)

#### Approach

Convert the number to a string, reverse it manually, and convert it back to an integer.
Finally, check if the result is within the 32-bit range.

#### Steps

1. Store the sign of the number
2. Convert number to string
3. Reverse the string manually
4. Convert back to number
5. Apply sign
6. Check for overflow

#### Complexity

- **Time Complexity:** O(d)
- **Space Complexity:** O(d)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Mathematical Reversal

#### Approach

Extract digits using modulus (`%`) and rebuild the reversed number using multiplication.

#### Steps

1. Initialize `rev = 0`
2. While `x != 0`:
   - Extract last digit using `% 10`
   - Remove last digit using division
   - Append digit to `rev`
3. Return result after loop
4. Perform final overflow check

#### Complexity

- **Time Complexity:** O(d)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Overflow Safe (Optimal)

#### Approach

Same as mathematical reversal, but we check for overflow **before** adding the next digit.

This avoids exceeding 32-bit limits without using 64-bit integers.

#### Steps

1. Initialize `rev = 0`
2. While `x != 0`:
   - Extract last digit
   - Check:
     - If `rev > INT_MAX / 10` → overflow
     - If `rev == INT_MAX / 10` and digit > 7 → overflow
     - If `rev < INT_MIN / 10` → overflow
     - If `rev == INT_MIN / 10` and digit < -8 → overflow
   - Append digit
3. Return result

#### Complexity

- **Time Complexity:** O(d)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                | Time Complexity | Space Complexity | Notes                                 |
| ----------------------- | --------------- | ---------------- | ------------------------------------- |
| Brute Force (String)    | O(d)            | O(d)             | Simple but uses extra space           |
| Mathematical Reversal   | O(d)            | O(1)             | Efficient but unsafe for overflow     |
| Overflow Safe (Optimal) | O(d)            | O(1)             | Best solution, handles all edge cases |
