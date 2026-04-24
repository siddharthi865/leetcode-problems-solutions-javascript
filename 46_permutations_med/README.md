# Permutations (LeetCode #46)

## Problem Statement

Given an array of **distinct integers** `nums`, return **all possible permutations**. You can return the answer in **any order**.

### Constraints

- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- All integers in `nums` are **unique**

### Examples

**Example 1:**

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

**Example 2:**

```
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```

**Example 3:**

```
Input: nums = [1]
Output: [[1]]
```

## Solutions

### Solution 1: Backtracking with Visited Array

#### Approach

We build permutations step-by-step using recursion and track which elements are already used using a `visited` array.

#### Steps

1. Initialize a `visited` array to track used elements
2. Start building a permutation (`path`)
3. For each element:
   - If not visited → include it
   - Mark as visited and recurse
   - Backtrack (remove element and unmark)
4. When `path.length === nums.length`, store the permutation

#### Complexity

- **Time Complexity:** O(n!)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: In-Place Swapping (Optimal Backtracking)

#### Approach

Instead of extra space, we swap elements in-place to generate permutations.

Each position is fixed one by one by swapping with remaining elements.

#### Steps

1. Start from index `start = 0`
2. For each index `i` from `start` to end:
   - Swap `nums[start]` and `nums[i]`
   - Recurse for `start + 1`
   - Swap back (backtrack)
3. When `start === nums.length`, store the permutation

#### Complexity

- **Time Complexity:** O(n!)
- **Space Complexity:** O(n) (recursion stack)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Heap’s Algorithm (Iterative)

#### Approach

Heap’s Algorithm generates permutations iteratively with minimal swaps using a control array.

It avoids recursion and systematically produces permutations.

#### Steps

1. Initialize control array `c[]` with zeros
2. Add the initial array as the first permutation
3. Iterate using index `i`:
   - If `c[i] < i`, perform swap:
     - If `i` is even → swap with index 0
     - Else → swap with index `c[i]`
   - Add permutation
   - Increment `c[i]`, reset `i = 0`
   - Else reset `c[i] = 0`, increment `i`
4. Continue until all permutations are generated

#### Complexity

- **Time Complexity:** O(n!)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                     | Time Complexity | Space Complexity | Notes                      |
| ---------------------------- | --------------- | ---------------- | -------------------------- |
| Backtracking (Visited)       | O(n!)           | O(n)             | Easy to understand         |
| In-place Swapping            | O(n!)           | O(n)             | Most commonly used optimal |
| Heap’s Algorithm (Iterative) | O(n!)           | O(n)             | No recursion, fewer swaps  |
