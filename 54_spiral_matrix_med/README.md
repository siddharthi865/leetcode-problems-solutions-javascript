# Spiral Matrix (LeetCode #54)

## Problem Statement

Given an `m x n` matrix, return all elements of the matrix in **spiral order**.

### Constraints

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 10`
- `-100 <= matrix[i][j] <= 100`

### Examples

**Example 1:**

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
```

**Example 2:**

```
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

## Solutions

### Solution 1: Visited Simulation (Brute Force)

#### Approach

We simulate the spiral traversal using direction vectors and a `visited` matrix.

We move in the order:

- Right → Down → Left → Up

Whenever we hit a boundary or a visited cell, we change direction.

#### Steps

1. Create a `visited` matrix initialized to `false`
2. Define direction arrays for movement
3. Start from `(0, 0)`
4. Traverse `m * n` times:
   - Add current element to result
   - Mark as visited
   - Move in current direction
   - If invalid → change direction

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Boundary Traversal (Optimal)

#### Approach

Instead of tracking visited cells, we maintain **four boundaries**:

- `top`
- `bottom`
- `left`
- `right`

We traverse the matrix layer by layer and shrink boundaries after each step.

#### Steps

1. Initialize boundaries
2. Loop while `top <= bottom` and `left <= right`
3. Traverse:
   - Left → Right (top row)
   - Top → Bottom (right column)
   - Right → Left (bottom row)
   - Bottom → Top (left column)
4. After each traversal, update boundaries

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach                     | Time Complexity | Space Complexity | Notes                           |
| ---------------------------- | --------------- | ---------------- | ------------------------------- |
| Visited Simulation           | O(m × n)        | O(m × n)         | Easy to understand, extra space |
| Boundary Traversal (Optimal) | O(m × n)        | O(1)             | Most efficient solution         |
