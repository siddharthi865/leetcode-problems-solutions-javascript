# Pascal's Triangle II (LeetCode #119)

## Problem Statement

Given an integer `rowIndex`, return the **rowIndex-th (0-indexed) row** of Pascal's Triangle.

In Pascal’s Triangle:

- Each row starts and ends with `1`
- Each element is the sum of the two elements directly above it

### Constraints

- `0 <= rowIndex <= 33`

### Examples

**Example 1:**

```
Input: rowIndex = 3
Output: [1,3,3,1]
```

**Example 2:**

```
Input: rowIndex = 0
Output: [1]
```

**Example 3:**

```
Input: rowIndex = 1
Output: [1,1]
```

## Solutions

### Solution 1: Brute Force (Build Full Triangle)

#### Approach

We construct the entire Pascal’s Triangle up to `rowIndex`, then return the required row.

#### Steps

1. Initialize an empty triangle
2. Build each row from `0` to `rowIndex`
3. Each element:
   - `1` if at boundaries
   - Otherwise sum of two elements above
4. Return the last row

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Space Optimized (Single Row)

#### Approach

Instead of storing the entire triangle, we use a single array and update it in-place.

#### Steps

1. Initialize empty array `row`
2. Iterate from `0` to `rowIndex`
3. Update elements from right to left:
   - `row[j] = row[j] + row[j - 1]`
4. Always set first and last elements to `1`

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Combinatorics (Optimal)

#### Approach

Each element in Pascal’s Triangle is a combination:

- `C(n, k) = n! / (k! * (n - k)!)`

We compute values iteratively using the relation:

- `C(n, k) = C(n, k-1) * (n - k + 1) / k`

#### Steps

1. Initialize first value as `1`
2. Use previous value to compute next
3. Repeat until full row is built

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                | Time Complexity | Space Complexity | Notes                       |
| ----------------------- | --------------- | ---------------- | --------------------------- |
| Brute Force             | O(n²)           | O(n²)            | Builds full triangle        |
| Space Optimized         | O(n²)           | O(n)             | Uses single array           |
| Combinatorics (Optimal) | O(n)            | O(n)             | Best performance using math |
