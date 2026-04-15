# Minimum Depth of Binary Tree (LeetCode #111)

## Problem Statement

Given a binary tree, find its **minimum depth**.

The minimum depth is the number of nodes along the shortest path from the **root node down to the nearest leaf node**.

> A **leaf** is a node with no children.

### Constraints

- The number of nodes in the tree is in the range `[0, 10^5]`
- `-1000 <= Node.val <= 1000`

### Examples

**Example 1:**

```
Input: root = [3,9,20,null,null,15,7]
Output: 2
```

**Example 2:**

```
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
```

## Solutions

### Solution 1: Brute Force DFS

#### Approach

We explore **all root-to-leaf paths** using Depth-First Search and return the minimum depth among them.

We treat null nodes as invalid paths using `Infinity`.

#### Steps

1. If node is null → return `Infinity`
2. If node is a leaf → return `1`
3. Recursively compute left and right depths
4. Return `min(left, right) + 1`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(h) (recursion stack)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Optimized DFS

#### Approach

Instead of using `Infinity`, we handle edge cases explicitly:

- If one child is missing, we must follow the other child

This avoids incorrect minimum calculations.

#### Steps

1. If node is null → return `0`
2. If left child is null → recurse right
3. If right child is null → recurse left
4. Otherwise → return `min(left, right) + 1`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(h)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Breadth-First Search (Optimal)

#### Approach

We use **level-order traversal (BFS)**.

The first time we encounter a **leaf node**, we immediately return its depth.

This guarantees the shortest path.

#### Steps

1. Initialize a queue with `[root, depth = 1]`
2. Traverse level by level
3. If a node is a leaf → return depth
4. Otherwise, add children to queue

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach        | Time Complexity | Space Complexity | Notes                                |
| --------------- | --------------- | ---------------- | ------------------------------------ |
| Brute Force DFS | O(n)            | O(h)             | Explores all paths                   |
| Optimized DFS   | O(n)            | O(h)             | Cleaner handling of missing children |
| BFS (Optimal)   | O(n)            | O(n)             | Early exit → best in practice        |
