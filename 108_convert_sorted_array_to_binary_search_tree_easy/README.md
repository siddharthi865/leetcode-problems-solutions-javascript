# Convert Sorted Array to Binary Search Tree (LeetCode #108)

## Problem Statement

Given an integer array `nums` where the elements are sorted in **ascending order**, convert it to a **height-balanced binary search tree (BST)**.

A **height-balanced BST** is defined as a binary tree in which the depth of the two subtrees of every node never differs by more than 1.

### Constraints

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in **strictly increasing order**

## Examples

**Example 1:**

```
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
```

**Example 2:**

```
Input: nums = [1,3]
Output: [3,1]
```

## Solutions

### Solution 2: Divide & Conquer (Recursive - Optimal)

#### Approach

Since the array is already sorted, we can always pick the **middle element** as the root to ensure balance.

We recursively build:

- Left subtree from left half
- Right subtree from right half

This guarantees a **height-balanced BST**.

#### Steps

1. Find the middle index of the array
2. Create root node using middle element
3. Recursively build:
   - Left subtree using left half
   - Right subtree using right half
4. Base case: when `left > right`, return `null`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(log n) (recursion stack)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Iterative (Using Stack)

#### Approach

We simulate the recursive process using a **stack**.

Each stack entry stores:

- The current node
- Left index
- Right index

We iteratively assign values and construct left and right subtrees.

#### Steps

1. Initialize root node
2. Push `(node, left, right)` into stack
3. While stack is not empty:
   - Pop an element
   - Find mid index
   - Assign value to node
   - Create left and right children if valid
   - Push them into stack
4. Continue until tree is built

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                     | Time Complexity | Space Complexity | Notes                        |
| ---------------------------- | --------------- | ---------------- | ---------------------------- |
| Divide & Conquer (Recursive) | O(n)            | O(log n)         | Optimal and clean solution   |
| Iterative (Stack)            | O(n)            | O(n)             | Avoids recursion, same logic |
