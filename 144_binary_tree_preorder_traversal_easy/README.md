# Binary Tree Preorder Traversal (LeetCode #144)

## Problem Statement

Given the `root` of a binary tree, return the **preorder traversal** of its nodes' values.

In **preorder traversal**, nodes are visited in the following order:

**Root → Left → Right**

### Constraints

- The number of nodes in the tree is in the range `[0, 100]`
- `-100 <= Node.val <= 100`

## Examples

**Example 1:**

```
Input: root = [1,null,2,3]
Output: [1,2,3]
```

**Example 2:**

```
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [1,2,4,5,6,7,3,8,9]
```

**Example 3:**

```
Input: root = []
Output: []
```

## Solutions

### Solution 1: Recursive DFS (Brute Force)

#### Approach

We use recursion to simulate the preorder traversal.

At each node:

1. Visit the node
2. Traverse the left subtree
3. Traverse the right subtree

#### Steps

1. Create an empty result array
2. Define a recursive function
3. If node is null → return
4. Add current node value to result
5. Recurse on left subtree
6. Recurse on right subtree

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n) (recursion stack)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Iterative using Stack

#### Approach

We simulate recursion using an explicit stack.

Key idea:

- Push **right child first**, then **left child**
- This ensures left is processed before right

#### Steps

1. If root is null → return empty array
2. Initialize stack with root
3. While stack is not empty:
   - Pop node
   - Add value to result
   - Push right child (if exists)
   - Push left child (if exists)
4. Return result

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Morris Traversal (Optimal)

#### Approach

We use **Morris Traversal** to achieve preorder traversal using **O(1) space**.

Instead of using a stack or recursion:

- We create temporary links (threads) in the tree
- Traverse without extra memory
- Restore tree structure afterward

#### Steps

1. Initialize current pointer as root
2. While current is not null:
   - If left is null:
     - Visit node
     - Move to right
   - Else:
     - Find inorder predecessor (rightmost of left subtree)
     - If predecessor.right is null:
       - Visit node
       - Create thread to current
       - Move to left
     - Else:
       - Remove thread
       - Move to right
3. Return result

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach         | Time Complexity | Space Complexity | Notes                               |
| ---------------- | --------------- | ---------------- | ----------------------------------- |
| Recursive DFS    | O(n)            | O(n)             | Simple and intuitive                |
| Iterative Stack  | O(n)            | O(n)             | Avoids recursion                    |
| Morris Traversal | O(n)            | O(1)             | Most optimal, modifies tree briefly |
