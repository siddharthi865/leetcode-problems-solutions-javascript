# Path Sum (LeetCode #112)

## Problem Statement

Given the root of a binary tree and an integer `targetSum`, return **true** if the tree has a **root-to-leaf path** such that adding up all the values along the path equals `targetSum`.

A **leaf** is a node with no children.

### Constraints

- The number of nodes in the tree is in the range `[0, 5000]`
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

### Examples

**Example 1:**

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
```

**Example 2:**

```
Input: root = [1,2,3], targetSum = 5
Output: false
```

**Example 3:**

```
Input: root = [], targetSum = 0
Output: false
```

## Solutions

### Solution 1: Brute Force (Store All Paths)

#### Approach

We generate **all root-to-leaf paths**, store them, and then compute the sum of each path to check if any equals `targetSum`.

#### Steps

1. Use DFS to traverse the tree
2. Store each root-to-leaf path in an array
3. For every path:
   - Compute sum manually
   - Compare with `targetSum`
4. Return true if any path matches

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: DFS with Running Sum (Optimal)

#### Approach

Instead of storing paths, we subtract the current node’s value from `targetSum` as we traverse.

At each node:

- Reduce the remaining sum
- If we reach a leaf and the remaining sum is `0`, we found a valid path

#### Steps

1. Start DFS from root
2. Subtract node value from `targetSum`
3. If leaf node:
   - Check if remaining sum is `0`
4. Recursively check left and right subtrees

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(h) (height of tree)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Iterative DFS (Stack)

#### Approach

We simulate DFS using a stack instead of recursion.

Each stack entry contains:

- Current node
- Remaining sum

#### Steps

1. Initialize stack with `[root, targetSum]`
2. While stack is not empty:
   - Pop element
   - Subtract node value from remaining sum
   - If leaf and sum is `0` → return true
   - Push children with updated sum
3. If no path found → return false

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(h)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                  | Time Complexity | Space Complexity | Notes                             |
| ------------------------- | --------------- | ---------------- | --------------------------------- |
| Brute Force (Store Paths) | O(n²)           | O(n²)            | Easy but inefficient              |
| DFS (Running Sum)         | O(n)            | O(h)             | Optimal and clean                 |
| Iterative DFS (Stack)     | O(n)            | O(h)             | Avoids recursion, same efficiency |
