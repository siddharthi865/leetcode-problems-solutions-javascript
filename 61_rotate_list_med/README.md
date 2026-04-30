# Rotate List (LeetCode #61)

## Problem Statement

Given the head of a singly linked list, rotate the list to the **right by `k` places**.

### Constraints

- The number of nodes in the list is in the range **[0, 500]**
- **-100 <= Node.val <= 100**
- **0 <= k <= 2 * 10⁹**

### Examples

**Example 1:**

```cmd
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
```

**Example 2:**

```cmd
Input: head = [0,1,2], k = 4
Output: [2,0,1]
```

## Solutions

### Solution 1: Brute Force

#### Approach

Rotate the list **one step at a time**, repeating the process `k` times.

Each rotation:

- Traverse to the last node
- Detach it
- Move it to the front

#### Steps

1. Repeat `k` times:
   - Traverse to the last node
   - Keep track of second last node
   - Detach last node
   - Move it to front
2. Return updated head

#### Complexity

- **Time Complexity:** O(n × k)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Length-Based Optimization

#### Approach

Instead of rotating `k` times, reduce unnecessary work:

- Rotating `n` times results in the same list
- So we compute: `k = k % length`

Then perform rotation `k` times using the brute force method.

#### Steps

1. Traverse list to find length `n`
2. Compute `k = k % n`
3. Perform brute force rotation `k` times
4. Return updated head

#### Complexity

- **Time Complexity:** O(n + n × k) → O(n²) in worst case
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Circular Linked List (Optimal)

#### Approach

Instead of rotating repeatedly, restructure the list:

1. Convert list into a **circular linked list**
2. Find the new tail position
3. Break the circle at the correct point

#### Steps

1. Traverse list to find:
   - Length `n`
   - Last node (tail)
2. Connect tail → head (make circular)
3. Compute `k = k % n`
4. Find new tail at position:
   - `n - k - 1`
5. New head = `newTail.next`
6. Break the circle (`newTail.next = null`)

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                     | Time Complexity | Space Complexity | Notes                          |
|----------------------------| ----------------|------------------|--------------------------------|
| Brute Force                |  O(n × k)       | O(1)             | Very slow for large `k`        |
| Length Optimization        |  O(n²)          | O(1)             | Reduces unnecessary rotations  |
| Circular Linked List       |  O(n)           | O(1)             | Optimal and efficient          |