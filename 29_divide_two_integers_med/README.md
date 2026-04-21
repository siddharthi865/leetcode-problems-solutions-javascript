# Divide Two Integers (LeetCode #29)

## Problem Statement

Given two integers `dividend` and `divisor`, divide them **without using multiplication, division, or modulo operators**.

The result must be truncated toward zero (i.e., discard the fractional part).

### Constraints

- You must not use:
  - `*` (multiplication)
  - `/` (division)
  - `%` (modulo)
- Result must be truncated toward zero
- Must handle 32-bit signed integer range:
  - [-2³¹, 2³¹ − 1]
- If overflow occurs, clamp the result:
  - Return `2³¹ − 1` if result > 2³¹ − 1
  - Return `-2³¹` if result < -2³¹

### Examples

**Example 1:**

```
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10 / 3 = 3.333... → truncated to 3
```

**Example 2:**

```
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7 / -3 = -2.333... → truncated to -2
```

**Example 3:**

```
Input: dividend = -2147483648, divisor = 1
Output: -2147483648
```

## Solutions

## Solution 1: Brute Force (Repeated Subtraction)

### Approach

We repeatedly subtract the divisor from the dividend until it becomes smaller than the divisor. Each subtraction increases the quotient by 1.

We also carefully handle sign and overflow cases.

---

### Steps

1. Determine the sign of result
2. Convert both numbers to positive
3. Repeatedly subtract divisor from dividend
4. Count how many times subtraction occurs
5. Apply sign back
6. Clamp result to 32-bit integer range

---

### Complexity

- **Time Complexity:** O(n) (very slow for large inputs)
- **Space Complexity:** O(1)

---

### [Click for solution](./solutions/solution1.js)

---

## Solution 2: Optimized Doubling (Exponential Search)

### Approach

Instead of subtracting one by one, we double the divisor each time (like 1x, 2x, 4x, 8x...) to subtract large chunks at once.

This significantly reduces operations.

---

### Steps

1. Determine sign
2. Convert numbers to positive safely
3. While dividend ≥ divisor:
   - Find largest doubled divisor ≤ dividend
   - Subtract it
   - Add corresponding multiple to result
4. Apply sign
5. Clamp result

---

### Complexity

- **Time Complexity:** O(log² n)
- **Space Complexity:** O(1)

---

### [Click for solution](./solutions/solution2.js)

---

## Solution 3: Bit Manipulation (Optimal)

### Approach

We use bit shifting to simulate multiplication by powers of 2.

For each bit position (31 → 0), we check if `(divisor << i)` fits into the remaining dividend.

If yes, we subtract it and add `2^i` to result.

---

### Steps

1. Handle overflow case:
   - `-2³¹ / -1 → 2³¹ − 1`
2. Determine sign using XOR
3. Convert both numbers to positive safely
4. Iterate from bit 31 to 0:
   - Check if shifted divisor fits
   - Subtract and update result
5. Apply sign
6. Final clamp

---

### Complexity

- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

---

### [Click for solution](./solutions/solution3.js)

## Summary

| Approach              | Time Complexity | Space Complexity | Notes                          |
| --------------------- | --------------- | ---------------- | ------------------------------ |
| Brute Force           | O(n)            | O(1)             | Simple but very slow           |
| Doubling Optimization | O(log² n)       | O(1)             | Much faster than brute force   |
| Bit Manipulation      | O(log n)        | O(1)             | Optimal and interview standard |
