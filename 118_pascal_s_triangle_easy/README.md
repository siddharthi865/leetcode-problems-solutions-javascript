# Pascal's Triangle (LeetCode #118)

## Problem Statement

Given an integer `numRows`, return the first `numRows` of **Pascal's Triangle**.

In Pascal's Triangle:

- Each number is the sum of the two numbers directly above it
- The first and last elements of every row are always `1`

### Constraints

- `1 <= numRows <= 30`

### Examples

**Example 1:**

```
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

**Example 2:**

```
Input: numRows = 1
Output: [[1]]
```

## Solutions

### Solution 1: Brute Force

#### Approach

We build Pascal’s Triangle row by row using the definition:

- First and last elements are always `1`
- Middle elements are the sum of two elements from the previous row

#### Steps

1. Initialize an empty result array
2. Loop from `0` to `numRows - 1`
3. For each row:
   - Create a new row
   - Set first and last elements to `1`
   - Compute middle values using previous row
4. Add row to result

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Better Construction

#### Approach

Instead of checking conditions repeatedly:

- Initialize each row with `1`s
- Only compute inner elements

This reduces unnecessary branching and improves readability.

#### Steps

1. Create a row of size `i + 1` filled with `1`
2. Update inner elements (`j = 1 → i-1`)
3. Use previous row values to compute sums
4. Add row to result

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: In-Place Row (Optimal)

#### Approach

We use a single array and update it **in-place**:

- Build each row by updating from right to left
- This avoids overwriting needed values
- Copy the row into result each iteration

#### Steps

1. Initialize an empty row array
2. For each iteration:
   - Add `1` at the end
   - Update elements from right to left
3. Copy row into result

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n) (excluding output)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach            | Time Complexity | Space Complexity | Notes                          |
| ------------------- | --------------- | ---------------- | ------------------------------ |
| Brute Force         | O(n²)           | O(n²)            | Straightforward implementation |
| Better Construction | O(n²)           | O(n²)            | Cleaner and fewer checks       |
| In-Place Optimal    | O(n²)           | O(n) extra       | Most efficient in practice     |
