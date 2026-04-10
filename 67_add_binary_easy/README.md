# Add Binary (LeetCode #67)

## Problem Statement

Given two binary strings `a` and `b`, return their **sum as a binary string**.

### Constraints

- `1 <= a.length, b.length <= 10^4`
- `a` and `b` consist only of `'0'` or `'1'`
- Each string does not contain leading zeros except for the zero itself

### Examples

**Example 1:**

```
Input: a = "11", b = "1"
Output: "100"
```

**Example 2:**

```
Input: a = "1010", b = "1011"
Output: "10101"
```

## Solutions

### Solution 1: Conversion to Decimal (Brute Force - Not Safe)

#### Approach

Convert both binary strings into decimal numbers, add them, and then convert the result back to binary.

#### Steps

1. Convert binary string `a` to decimal
2. Convert binary string `b` to decimal
3. Add both numbers
4. Convert the sum back to binary

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### ⚠️ Limitation

This approach **fails for large inputs** due to JavaScript number precision limits (beyond 53 bits).

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Carry Simulation (Optimal)

#### Approach

Simulate binary addition manually (like how we do on paper):

- Start from the rightmost digits
- Maintain a `carry`
- Build the result string from right to left

#### Steps

1. Initialize two pointers at the end of both strings
2. Initialize `carry = 0`
3. Loop while there are digits or carry:
   - Add current digits + carry
   - Append `(sum % 2)` to result
   - Update `carry = Math.floor(sum / 2)`
4. Return the result

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Bitwise Simulation (Optimal - Conceptual)

#### Approach

Simulate how computers perform addition using bitwise logic:

- **XOR (`^`) → sum without carry**
- **AND (`&`) → carry generation**

Since JavaScript cannot handle large bitwise operations directly, we simulate this logic per digit.

#### Steps

1. Traverse both strings from right to left
2. Extract bits and simulate:
   - Sum bit using XOR-like logic
   - Carry using AND-like logic
3. Append result bit
4. Continue until all digits and carry are processed

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                 | Time Complexity | Space Complexity | Notes                                   |
| ------------------------ | --------------- | ---------------- | --------------------------------------- |
| Conversion (Brute Force) | O(n)            | O(1)             | Fails for large inputs (overflow issue) |
| Carry Simulation         | O(n)            | O(n)             | Clean and interview-friendly            |
| Bitwise Simulation       | O(n)            | O(n)             | Closest to hardware-level understanding |
