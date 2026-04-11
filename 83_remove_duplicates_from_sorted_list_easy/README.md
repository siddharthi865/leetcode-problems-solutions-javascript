# Remove Duplicates from Sorted List (LeetCode #83)

## Problem Statement

Given the `head` of a **sorted linked list**, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

### Constraints

- The number of nodes in the list is in the range `[0, 300]`
- `-100 <= Node.val <= 100`
- The list is guaranteed to be **sorted in ascending order**

### Examples

**Example 1:**

```
Input: head = [1,1,2]
Output: [1,2]
```

**Example 2:**

```
Input: head = [1,1,2,3,3]
Output: [1,2,3]
```

## Solutions

### Solution 1: Brute Force (Array Conversion)

#### Approach

We convert the linked list into an array, remove duplicates manually, and rebuild the linked list.

#### Steps

1. Traverse the linked list and store values in an array
2. Remove duplicates by comparing adjacent elements
3. Create a new linked list using unique values

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Iterative In-Place (Optimal)

#### Approach

Since the list is **sorted**, duplicates will always be adjacent. We can remove them in-place by adjusting pointers.

#### Steps

1. Traverse the linked list using a pointer
2. Compare current node with next node
3. If values are equal:
   - Skip the next node (`current.next = current.next.next`)
4. Otherwise:
   - Move to next node

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Recursive Approach

#### Approach

We recursively process the list and decide whether to keep or skip the current node based on duplicates.

#### Steps

1. Base case:
   - If node is `null` or only one node → return it
2. Recursively process the rest of the list
3. Compare current node with next:
   - If equal → skip current node
   - Otherwise → keep it

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n) (due to recursion stack)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach           | Time Complexity | Space Complexity | Notes                         |
| ------------------ | --------------- | ---------------- | ----------------------------- |
| Brute Force        | O(n)            | O(n)             | Uses extra array              |
| Iterative In-Place | O(n)            | O(1)             | Optimal and efficient         |
| Recursive          | O(n)            | O(n)             | Cleaner but uses stack memory |
