# Symmetric Tree (LeetCode #101)

## Problem Statement

Given the root of a binary tree, check whether it is a **mirror of itself** (i.e., symmetric around its center).

A binary tree is symmetric if the left subtree is a mirror reflection of the right subtree.

### Constraints

- The number of nodes in the tree is in the range `[1, 1000]`
- `-100 <= Node.val <= 100`

### Examples

**Example 1:**

```
Input: root = [1,2,2,3,4,4,3]
Output: true
```

**Example 2:**

```
Input: root = [1,2,2,null,3,null,3]
Output: false
```

## Solutions

### Solution 1: Brute Force (Clone + Mirror)

#### Approach

We create a **mirror copy** of the tree and then compare it with the original tree.

If both trees are identical, then the tree is symmetric.

#### Steps

1. Clone the original tree
2. Create a mirrored version of the tree
3. Compare both trees:
   - If identical → symmetric
   - Else → not symmetric

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Recursive (Optimal)

#### Approach

Instead of creating new trees, we directly compare the left and right subtrees recursively.

At every step:

- Values must be equal
- Left's left ↔ Right's right
- Left's right ↔ Right's left

#### Steps

1. Define a helper function `isMirror(left, right)`
2. Base cases:
   - Both null → true
   - One null → false
3. Check:
   - Values equal
   - Recursive mirror checks
4. Call `isMirror(root, root)`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(h) (height of tree)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Iterative (Queue)

#### Approach

We use a **queue** to iteratively compare nodes in pairs that should be mirrors.

#### Steps

1. Initialize queue with two root nodes
2. While queue is not empty:
   - Pop two nodes
   - If both null → continue
   - If one null or values differ → return false
3. Push children in mirror order:
   - left.left & right.right
   - left.right & right.left
4. If all checks pass → symmetric

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach            | Time Complexity | Space Complexity | Notes                      |
| ------------------- | --------------- | ---------------- | -------------------------- |
| Brute Force         | O(n)            | O(n)             | Uses extra trees           |
| Recursive (Optimal) | O(n)            | O(h)             | Best and cleanest solution |
| Iterative (Queue)   | O(n)            | O(n)             | Avoids recursion           |
