# Spiral Matrix II (LeetCode #59)

## Problem Statement

Given a positive integer `n`, generate an `n x n` matrix filled with elements from `1` to `n²` in **spiral order**.

Spiral order means filling the matrix in the following direction pattern:

- Left → Right
- Top → Bottom
- Right → Left
- Bottom → Top

This pattern repeats while shrinking the boundaries inward.

### Constraints

- `1 <= n <= 20`

### Examples

**Example 1:**

```
Input: n = 3
Output: [
[1,2,3],
[8,9,4],
[7,6,5]
]
```

**Example 2:**

```
Input: n = 1
Output: [[1]]
```

## Solutions

### Solution 1: Direction Simulation (Brute Force)

#### Approach

We simulate the spiral traversal using direction vectors:

- Right → Down → Left → Up

We move step-by-step and change direction whenever:

- We hit a boundary
- We encounter a previously filled cell

#### Steps

1. Initialize an `n x n` matrix with `0`
2. Define direction vectors
3. Start from `(0,0)` and fill numbers from `1 → n²`
4. Before moving, check:
   - If next position is valid
   - If already filled → change direction
5. Continue until all numbers are placed

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Boundary Traversal (Optimal)

#### Approach

Instead of simulating movement, we use **four boundaries**:

- `top`, `bottom`, `left`, `right`

We fill the matrix layer by layer:

1. Left → Right
2. Top → Bottom
3. Right → Left
4. Bottom → Top

Then shrink boundaries inward.

#### Steps

1. Initialize empty `n x n` matrix
2. Set boundaries:
   - `top = 0`, `bottom = n - 1`
   - `left = 0`, `right = n - 1`
3. Fill in spiral order using loops
4. After each direction, update boundaries
5. Continue until all layers are filled

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach                     | Time Complexity | Space Complexity | Notes                      |
| ---------------------------- | --------------- | ---------------- | -------------------------- |
| Direction Simulation         | O(n²)           | O(n²)            | Intuitive but more checks  |
| Boundary Traversal (Optimal) | O(n²)           | O(n²)            | Cleaner and more efficient |
