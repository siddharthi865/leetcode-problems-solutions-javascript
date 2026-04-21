# Reverse Nodes in k-Group (LeetCode #25)

## Problem Statement

Given the head of a singly linked list, reverse the nodes of the list **k at a time**, and return the modified list.

- `k` is a positive integer and `1 ≤ k ≤ n`
- If the number of nodes is not a multiple of `k`, the remaining nodes at the end should stay unchanged
- You may not modify node values — only node connections

### Constraints

- The number of nodes in the list is `n`
- `1 <= k <= n <= 5000`
- `0 <= Node.val <= 1000`

### Examples

**Example 1:**

```
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
```

**Example 2:**

```
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
```

## Solutions

### Solution 1: Brute Force (Array Conversion)

#### Approach

We convert the linked list into an array of nodes, reverse every `k`-sized block, and then reconnect the nodes.

This is the easiest way to visualize the problem but uses extra memory.

#### Steps

1. Traverse the linked list and store all nodes in an array
2. Reverse every group of size `k`
3. Reconnect nodes sequentially
4. Set last node’s `next` to `null`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Recursive Group Reversal

#### Approach

We recursively reverse each group of `k` nodes:

- First check if `k` nodes exist
- Reverse first `k` nodes
- Recursively process remaining list
- Connect reversed group with next result

#### Steps

1. Check if at least `k` nodes exist
2. Reverse first `k` nodes
3. Recursively call function on remaining list
4. Attach result to current group

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n/k) recursion stack (worst O(n))

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Iterative Optimal In-Place Reversal

#### Approach

We process the list in chunks of `k` using pointer manipulation:

- Identify the `k-th` node
- Reverse the current group in-place
- Connect previous group → reversed group → next group
- Repeat until list ends

This avoids extra memory and recursion.

#### Steps

1. Use a dummy node to simplify edge cases
2. Find the `k-th` node for current segment
3. Reverse nodes between `prevGroup.next` and `kth`
4. Reconnect pointers properly
5. Move to next group

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach            | Time Complexity | Space Complexity | Notes                        |
| ------------------- | --------------- | ---------------- | ---------------------------- |
| Brute Force (Array) | O(n)            | O(n)             | Simple but uses extra memory |
| Recursive           | O(n)            | O(n)             | Clean but uses call stack    |
| Iterative Optimal   | O(n)            | O(1)             | Best in-place solution       |
