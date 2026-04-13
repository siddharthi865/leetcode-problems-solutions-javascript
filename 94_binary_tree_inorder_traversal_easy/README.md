# Binary Tree Inorder Traversal (LeetCode #94)

## Problem Statement

Given the root of a binary tree, return the **inorder traversal** of its nodes' values.

**Inorder traversal follows:**

> Left → Root → Right

### Constraints

- The number of nodes is in the range **[0, 100]**
- **-100 <= Node.val <= 100**

### Examples

**Example 1:**

```
Input: root = [1,null,2,3]
Output: [1,3,2]
```

**Example 2:**

```
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]
```

**Example 3:**

```
Input: root = []
Output: []
```

## Solutions

### Solution 1: Recursive Traversal (DFS)

#### Approach

We use recursion to naturally follow the inorder traversal pattern:

- Traverse left subtree
- Visit current node
- Traverse right subtree

#### Steps

1. Create a helper recursive function
2. Traverse left child
3. Add current node value
4. Traverse right child
5. Return the result array

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n) (recursion stack)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Iterative Traversal (Stack)

#### Approach

We simulate recursion using an explicit stack.

- Go as left as possible
- Process node
- Move to right subtree

#### Steps

1. Initialize an empty stack
2. Traverse left while pushing nodes into stack
3. Pop node from stack and process it
4. Move to right subtree
5. Repeat until done

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Morris Traversal (Optimal)

#### Approach

We eliminate extra space by modifying the tree temporarily using **threaded binary tree** technique.

- Link nodes to their inorder predecessor
- Traverse without recursion or stack

#### Steps

1. Start from root
2. If no left child → visit node and go right
3. If left exists:
   - Find inorder predecessor
   - Create temporary link to current node
   - Traverse left
4. If link already exists:
   - Remove link
   - Visit node
   - Move right

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach          | Time Complexity | Space Complexity | Notes                         |
| ----------------- | --------------- | ---------------- | ----------------------------- |
| Recursive DFS     | O(n)            | O(n)             | Simple and intuitive          |
| Iterative (Stack) | O(n)            | O(n)             | No recursion                  |
| Morris Traversal  | O(n)            | O(1)             | Most optimal (no extra space) |
