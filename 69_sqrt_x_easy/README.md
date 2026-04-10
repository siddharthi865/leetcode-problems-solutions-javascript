# Sqrt(x) (LeetCode #69)

## Problem Statement

Given a non-negative integer `x`, return the **square root of x rounded down to the nearest integer**.

The returned integer should be **non-negative**.

⚠️ You must **NOT use any built-in exponent function or operator**.

- Do NOT use `pow(x, 0.5)`
- Do NOT use `x ** 0.5`

---

### Constraints

- `0 <= x <= 2^31 - 1`

---

### Examples

**Example 1:**

```
Input: x = 4
Output: 2
```

**Example 2:**

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.828..., so we return 2.
```

## Solutions

### Solution 1: Brute Force

#### Approach

We iterate from `0` upwards and keep checking:

```

i \* i <= x

```

Once `i * i` becomes greater than `x`, we return `i - 1`.

---

#### Steps

1. Start from `i = 0`
2. While `i * i <= x`, keep incrementing `i`
3. When condition fails, return `i - 1`

---

#### Complexity

- **Time Complexity:** O(√x)
- **Space Complexity:** O(1)

---

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Binary Search

#### Approach

Instead of checking every number, we apply **binary search** on the range `[0, x]`.

We find the largest number `mid` such that:

```

mid \* mid <= x

```

---

#### Steps

1. Initialize `left = 0`, `right = x`
2. While `left <= right`:
   - Compute `mid`
   - If `mid * mid === x` → return `mid`
   - If `mid * mid < x` → store result and move right
   - Else → move left
3. Return stored result

---

#### Complexity

- **Time Complexity:** O(log x)
- **Space Complexity:** O(1)

---

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Binary Search (Overflow-Safe Optimal)

#### Approach

Same as binary search, but instead of:

```

mid \* mid

```

We use:

```

mid <= x / mid

```

This avoids **integer overflow** for large values of `x`.

---

#### Steps

1. Initialize `left = 0`, `right = x`
2. While `left <= right`:
   - Compute `mid`
   - If `mid <= x / mid`:
     - Store `mid`
     - Move right (`left = mid + 1`)
   - Else:
     - Move left (`right = mid - 1`)
3. Return stored result

---

#### Complexity

- **Time Complexity:** O(log x)
- **Space Complexity:** O(1)

---

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach           | Time Complexity | Space Complexity | Notes                      |
| ------------------ | --------------- | ---------------- | -------------------------- |
| Brute Force        | O(√x)           | O(1)             | Simple but slow            |
| Binary Search      | O(log x)        | O(1)             | Efficient and scalable     |
| Safe Binary Search | O(log x)        | O(1)             | ✅ Best (handles overflow) |
