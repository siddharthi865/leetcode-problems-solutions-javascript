# Remove Nth Node From End of List (LeetCode #19)

## Problem Statement

Given the head of a singly linked list, remove the **nth node from the end of the list** and return its head.

### Constraints

- The number of nodes in the list is `sz`
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

### Examples

**Example 1:**

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

**Example 2:**

```
Input: head = [1], n = 1
Output: []
```

**Example 3:**

```
Input: head = [1,2], n = 1
Output: [1]
```

## Solutions

### Solution 1: Brute Force (Two Pass)

#### Approach

We first calculate the **length of the linked list**, then determine the node to remove from the start.

#### Steps

1. Traverse the list to find its length `L`
2. Compute position: `L - n`
3. Traverse again to the node just before the target
4. Update pointer to skip the target node

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Two Pointer (One Pass)

#### Approach

We use two pointers (`fast` and `slow`) to maintain a gap of `n` nodes.

#### Steps

1. Move `fast` pointer `n` steps ahead
2. Move both `fast` and `slow` together
3. When `fast` reaches the end:
   - `slow` will be just before the node to remove
4. Update pointer to remove the node

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Dummy Node (Optimal & Clean)

#### Approach

We introduce a **dummy node** before the head to simplify edge cases (like removing the head).

#### Steps

1. Create dummy node pointing to head
2. Initialize `fast` and `slow` at dummy
3. Move `fast` `n+1` steps ahead
4. Move both pointers until `fast` reaches the end
5. Remove node using:

```

slow.next = slow.next.next

```

6. Return `dummy.next`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach             | Time Complexity | Space Complexity | Notes                        |
| -------------------- | --------------- | ---------------- | ---------------------------- |
| Brute Force          | O(n)            | O(1)             | Requires two traversals      |
| Two Pointer          | O(n)            | O(1)             | Single pass, efficient       |
| Dummy Node (Optimal) | O(n)            | O(1)             | Cleanest, handles edge cases |
