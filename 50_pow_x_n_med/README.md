# Pow(x, n) (LeetCode #50)

## Problem Statement

Implement a function `myPow(x, n)` which calculates **x raised to the power n (xⁿ)**.

### Constraints

- `-100.0 < x < 100.0`
- `-2³¹ <= n <= 2³¹ - 1`
- `n` is an integer
- Either `x` is not zero or `n > 0`
- `-10⁴ <= xⁿ <= 10⁴`

### Examples

**Example 1:**

```
Input: x = 2.00000, n = 10
Output: 1024.00000
```

**Example 2:**

```
Input: x = 2.10000, n = 3
Output: 9.26100
```

**Example 3:**

```
Input: x = 2.00000, n = -2
Output: 0.25000
```

## Solutions

### Solution 1: Brute Force

#### Approach

We multiply `x` by itself `n` times.
For negative powers, we compute the positive power and then take the reciprocal.

#### Steps

1. Convert `n` to absolute value
2. Multiply `x` repeatedly `|n|` times
3. If `n` is negative → return `1 / result`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Recursive Fast Exponentiation

#### Approach

Use **divide and conquer**:

- If `n` is even → \(x^n = (x^{n/2})^2\)
- If `n` is odd → \(x^n = x \* x^{n-1}\)

This reduces repeated work significantly.

#### Steps

1. Base case: if `n === 0`, return 1
2. If `n < 0`, convert to positive using reciprocal
3. Recursively compute half power
4. Square the result (or multiply once more if odd)

#### Complexity

- **Time Complexity:** O(log n)
- **Space Complexity:** O(log n) (recursion stack)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Iterative Fast Exponentiation (Optimal)

#### Approach

Use **binary exponentiation** (bit manipulation idea):

- Traverse bits of `n`
- Square `x` at each step
- Multiply result only when the current bit is 1

#### Steps

1. Handle negative `n` by converting:
   - `x = 1 / x`
   - `n = -n`
2. Initialize result = 1
3. While `n > 0`:
   - If `n` is odd → multiply result by `x`
   - Square `x`
   - Divide `n` by 2
4. Return result

#### Complexity

- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                      | Time Complexity | Space Complexity | Notes                        |
| ----------------------------- | --------------- | ---------------- | ---------------------------- |
| Brute Force                   | O(n)            | O(1)             | Simple but inefficient       |
| Recursive Fast Exponentiation | O(log n)        | O(log n)         | Efficient but uses recursion |
| Iterative Fast Exponentiation | O(log n)        | O(1)             | Optimal and most efficient   |
