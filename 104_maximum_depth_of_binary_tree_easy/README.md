# Maximum Depth of Binary Tree (LeetCode #104)

## Problem Statement

Given the root of a binary tree, return its **maximum depth**.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Constraints

- The number of nodes in the tree is in the range [0, 10⁴]
- -100 <= Node.val <= 100

### Examples

**Example 1:**

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

**Example 2:**

```
Input: root = [1,null,2]
Output: 2
```

**Example 3:**

```
Input: root = []
Output: 0
```

## Solutions

### Solution 1: Brute Force DFS (Track All Paths)

#### Approach

We explore **every root-to-leaf path** and track the depth manually.
Whenever we reach a null node, we update the maximum depth.

#### Steps

1. Start DFS from root with depth = 0
2. Traverse left and right subtrees
3. When reaching null → update max depth
4. Return the maximum depth found

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Recursive DFS (Optimal)

#### Approach

Use recursion to compute depth directly:

- Depth of a node = `1 + max(leftDepth, rightDepth)`

#### Steps

1. If node is null → return 0
2. Recursively compute left depth
3. Recursively compute right depth
4. Return `1 + max(left, right)`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(h) (height of tree)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: BFS (Level Order Traversal)

#### Approach

We traverse the tree **level by level** using a queue.

Each level represents one unit of depth.

#### Steps

1. Initialize queue with root
2. While queue is not empty:
   - Process all nodes at current level
   - Add their children to queue
3. Increment depth after each level

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

---

### Solution 4: Iterative DFS (Using Stack)

#### Approach

Simulate recursion using a stack that stores `(node, depth)` pairs.

#### Steps

1. Push `(root, 1)` into stack
2. While stack is not empty:
   - Pop element
   - Update max depth
   - Push children with incremented depth
3. Return max depth

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(h) to O(n)

#### [Click for solution](./solutions/solution4.js)

## Summary

| Approach        | Time Complexity | Space Complexity | Notes                         |
| --------------- | --------------- | ---------------- | ----------------------------- |
| Brute Force DFS | O(n)            | O(n)             | Tracks all paths explicitly   |
| Recursive DFS   | O(n)            | O(h)             | Clean and most common         |
| BFS Level Order | O(n)            | O(n)             | Best for level-based problems |
| Iterative DFS   | O(n)            | O(h)             | Avoids recursion              |
