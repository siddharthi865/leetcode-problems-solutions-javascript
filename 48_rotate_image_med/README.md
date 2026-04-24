# Rotate Image (LeetCode #48)

## Problem Statement

You are given an `n x n` 2D matrix representing an image. Rotate the image by **90 degrees (clockwise)**.

You must rotate the image **in-place**, meaning you cannot allocate another 2D matrix.

### Constraints

- `n == matrix.length == matrix[i].length`
- `1 <= n <= 20`
- `-1000 <= matrix[i][j] <= 1000`

## Examples

**Example 1:**

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
```

**Example 2:**

```
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

## Solutions

### Solution 1: Brute Force (Extra Space)

#### Approach

We create a new matrix and place each element in its rotated position.

The relation:

- `rotated[j][n - 1 - i] = matrix[i][j]`

Finally, copy the rotated matrix back into the original matrix.

#### Steps

1. Create a new `n x n` matrix
2. Traverse original matrix
3. Place elements in rotated positions
4. Copy result back to original matrix

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Transpose + Reverse

#### Approach

A 90° clockwise rotation can be broken into two steps:

1. **Transpose the matrix** (swap rows and columns)
2. **Reverse each row**

This achieves the desired rotation in-place.

#### Steps

1. Transpose:
   - Swap `matrix[i][j]` with `matrix[j][i]`
2. Reverse each row using two pointers

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Layer-by-Layer Rotation (Optimal)

#### Approach

We rotate the matrix **layer by layer** (like peeling an onion).

For each layer:

- Move elements in groups of 4
- Perform cyclic swaps:
  - top → right
  - right → bottom
  - bottom → left
  - left → top

#### Steps

1. Loop through layers (`0 → n/2`)
2. For each element in the layer:
   - Save top
   - Move left → top
   - Move bottom → left
   - Move right → bottom
   - Move saved top → right

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                | Time Complexity | Space Complexity | Notes                            |
| ----------------------- | --------------- | ---------------- | -------------------------------- |
| Brute Force             | O(n²)           | O(n²)            | Simple but uses extra space      |
| Transpose + Reverse     | O(n²)           | O(1)             | Clean and easy to implement      |
| Layer-by-Layer Rotation | O(n²)           | O(1)             | Most optimal and direct approach |
