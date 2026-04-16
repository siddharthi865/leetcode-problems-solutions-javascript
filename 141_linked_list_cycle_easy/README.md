# Linked List Cycle (LeetCode #141)

## Problem Statement

Given `head`, the head of a linked list, determine if the linked list has a **cycle** in it.

A cycle exists if a node in the list can be revisited by continuously following the `next` pointer. Internally, a variable `pos` indicates the index of the node where the tail connects. Note that `pos` is **not passed** as an argument.

Return `true` if there is a cycle in the linked list, otherwise return `false`.

### Constraints

- The number of nodes in the list is in the range `[0, 10⁴]`
- `-10⁵ <= Node.val <= 10⁵`
- `pos` is `-1` or a valid index in the linked list

## Examples

**Example 1:**

```
Input: head = [3,2,0,-4], pos = 1
Output: true
```

**Example 2:**

```
Input: head = [1,2], pos = 0
Output: true
```

**Example 3:**

```
Input: head = [1], pos = -1
Output: false
```

## Solutions

### Solution 1: Brute Force (Visited Array)

#### Approach

We traverse the linked list and keep track of all visited nodes in an array.
If we encounter a node that already exists in the array, a cycle is present.

#### Steps

1. Initialize an empty array
2. Traverse the linked list
3. For each node:
   - Check if it already exists in the array
   - If yes → return `true`
4. If traversal ends → return `false`

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Hash Set

#### Approach

Instead of using an array, we use a **Set** to store visited nodes for faster lookup.

#### Steps

1. Initialize an empty set
2. Traverse the list
3. For each node:
   - If it exists in the set → return `true`
   - Otherwise, add it to the set
4. If traversal completes → return `false`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Floyd’s Cycle Detection (Optimal)

#### Approach

Use two pointers:

- `slow` → moves one step at a time
- `fast` → moves two steps at a time

If there is a cycle, the fast pointer will eventually meet the slow pointer.

#### Steps

1. Initialize two pointers at head
2. Move:
   - `slow = slow.next`
   - `fast = fast.next.next`
3. If they meet → cycle exists
4. If `fast` reaches null → no cycle

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                | Time Complexity | Space Complexity | Notes                   |
| ----------------------- | --------------- | ---------------- | ----------------------- |
| Brute Force (Array)     | O(n²)           | O(n)             | Simple but inefficient  |
| Hash Set                | O(n)            | O(n)             | Faster lookup           |
| Floyd’s Cycle Detection | O(n)            | O(1)             | Optimal (best solution) |
