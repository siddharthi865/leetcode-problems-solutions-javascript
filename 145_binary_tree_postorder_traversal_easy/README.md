# Binary Tree Postorder Traversal (LeetCode #145)

## Problem Statement

Given the root of a binary tree, return the **postorder traversal** of its nodes' values.

In postorder traversal, nodes are visited in the following order:

👉 **Left → Right → Root**

### Constraints

- The number of nodes in the tree is in the range **[0, 100]**
- **-100 ≤ Node.val ≤ 100**

### Examples

**Example 1:**

```
Input: root = [1,null,2,3]
Output: [3,2,1]
```

**Example 2:**

```
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,6,7,5,2,9,8,3,1]
```

**Example 3:**

```
Input: root = []
Output: []
```

## Solutions

### Solution 1: Recursive DFS (Brute Force / Natural)

#### Approach

This approach directly follows the definition of postorder traversal:

- Traverse the left subtree
- Traverse the right subtree
- Visit the root node

#### Steps

1. If node is null → return
2. Recursively traverse left subtree
3. Recursively traverse right subtree
4. Add current node value to result

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n) (recursive call stack)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Iterative Using Two Stacks

#### Approach

We simulate postorder traversal using two stacks:

- First stack processes nodes in modified preorder (Root → Right → Left)
- Second stack reverses it to get postorder (Left → Right → Root)

#### Steps

1. Push root into stack1
2. Pop from stack1 and push into stack2
3. Push left and right children into stack1
4. Repeat until stack1 is empty
5. Pop all elements from stack2 to get result

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Iterative Single Stack (Optimal)

#### Approach

This approach uses a single stack and tracks the last visited node to simulate recursion efficiently.

We ensure:

- Left subtree is processed first
- Then right subtree
- Then the root node

#### Steps

1. Traverse left as much as possible and push nodes to stack
2. Peek the top node:
   - If it has an unvisited right child → move to right
   - Otherwise → process node
3. Track last visited node to avoid reprocessing

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach               | Time Complexity | Space Complexity | Notes                           |
| ---------------------- | --------------- | ---------------- | ------------------------------- |
| Recursive DFS          | O(n)            | O(n)             | Simple and intuitive            |
| Two Stacks             | O(n)            | O(n)             | Easier iterative approach       |
| Single Stack (Optimal) | O(n)            | O(n)             | Most efficient iterative method |
