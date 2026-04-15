# Balanced Binary Tree (LeetCode #110)

## Problem Statement

Given a binary tree, determine if it is **height-balanced**.

A binary tree is considered **height-balanced** if:

- The depth of the two subtrees of every node **never differs by more than 1**

### Constraints

- The number of nodes in the tree is in the range `[0, 5000]`
- `-10^4 <= Node.val <= 10^4`

### Examples

**Example 1:**

```
Input: root = [3,9,20,null,null,15,7]
Output: true
```

**Example 2:**

```
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
```

**Example 3:**

```
Input: root = []
Output: true
```

## Solutions

### Solution 1: Brute Force (Top-Down Height Check)

#### Approach

For every node, we:

- Compute the height of the left subtree
- Compute the height of the right subtree
- Check if their difference is ≤ 1

Then recursively verify the same condition for all nodes.

#### Steps

1. Define a function to calculate height of a tree
2. For each node:
   - Get left height
   - Get right height
   - Check balance condition
3. Recursively check left and right subtrees

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(h)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Optimized DFS (Bottom-Up)

#### Approach

Instead of recalculating heights repeatedly, we:

- Compute height **while checking balance**
- Return `-1` if subtree is unbalanced
- Propagate failure upward

#### Steps

1. Use DFS traversal
2. For each node:
   - Recursively get left height
   - If unbalanced → return -1
   - Recursively get right height
   - If unbalanced → return -1
   - Check height difference
3. Return height if balanced

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(h)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Iterative Postorder Traversal

#### Approach

We simulate postorder traversal using a stack:

- Compute heights bottom-up
- Store heights in a map
- Check balance during traversal

#### Steps

1. Use stack for traversal
2. Process nodes in postorder
3. Store heights in a map
4. For each node:
   - Get left & right heights
   - Check balance condition
   - Store computed height

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach            | Time Complexity | Space Complexity | Notes                       |
| ------------------- | --------------- | ---------------- | --------------------------- |
| Brute Force         | O(n²)           | O(h)             | Simple but inefficient      |
| Optimized DFS       | O(n)            | O(h)             | Best solution (recommended) |
| Iterative Postorder | O(n)            | O(n)             | No recursion, more complex  |
