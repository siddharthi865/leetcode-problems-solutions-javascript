# Merge Two Sorted Lists (LeetCode #21)

## Problem Statement

You are given the heads of two **sorted linked lists** `list1` and `list2`.

Merge the two lists into one **sorted linked list**. The list should be made by **splicing together the nodes** of the first two lists.

Return the head of the merged linked list.

### Constraints

- The number of nodes in both lists is in the range **[0, 50]**
- **-100 <= Node.val <= 100**
- Both `list1` and `list2` are sorted in **non-decreasing order**

### Examples

**Example 1:**

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**

```
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**

```
Input: list1 = [], list2 = [0]
Output: [0]
```

## Solutions

### Solution 1: Brute Force (Array + Sort)

#### Approach

We extract all values from both linked lists into an array, sort the array manually, and then rebuild a new linked list.

This approach ignores the fact that lists are already sorted.

#### Steps

1. Traverse both lists and store values in an array
2. Sort the array manually (no built-in sort)
3. Create a new linked list using sorted values
4. Return the head

#### Complexity

- **Time Complexity:** O((n + m)²)
- **Space Complexity:** O(n + m)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Iterative Merge (Optimal)

#### Approach

We use a **two-pointer technique**, similar to the merge step in Merge Sort.

We compare nodes from both lists and always attach the smaller one to the result.

A **dummy node** helps simplify pointer handling.

#### Steps

1. Create a dummy node
2. Use a `tail` pointer to build the result
3. Compare current nodes of both lists:
   - Attach the smaller node
   - Move that list forward
4. When one list ends, attach the remaining part of the other list
5. Return `dummy.next`

#### Complexity

- **Time Complexity:** O(n + m)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Recursive Merge

#### Approach

We recursively build the merged list:

- Compare the current nodes
- The smaller node becomes the head
- Recursively merge the remaining nodes

#### Steps

1. Base cases:
   - If one list is null → return the other
2. Compare values:
   - If `list1.val <= list2.val`
     - Set `list1.next = merge(list1.next, list2)`
     - Return `list1`
   - Else:
     - Set `list2.next = merge(list1, list2.next)`
     - Return `list2`

#### Complexity

- **Time Complexity:** O(n + m)
- **Space Complexity:** O(n + m) (recursive stack)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach        | Time Complexity | Space Complexity | Notes                        |
| --------------- | --------------- | ---------------- | ---------------------------- |
| Brute Force     | O((n+m)²)       | O(n+m)           | Inefficient, ignores sorting |
| Iterative Merge | O(n+m)          | O(1)             | ✅ Optimal solution          |
| Recursive Merge | O(n+m)          | O(n+m)           | Clean but uses stack space   |
