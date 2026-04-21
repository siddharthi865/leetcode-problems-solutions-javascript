# Swap Nodes in Pairs (LeetCode #24)

## Problem Statement

Given a singly linked list, swap every **two adjacent nodes** and return its head.

You must solve the problem **without modifying node values**. Only the node connections (pointers) can be changed.

### Constraints

- The number of nodes is in the range **[0, 100]**
- `0 <= Node.val <= 100`
- You must not swap values, only nodes
- Return the modified head of the list

### Examples

**Example 1:**

```
Input: head = [1,2,3,4]
Output: [2,1,4,3]
```

**Example 2:**

```
Input: head = []
Output: []
```

**Example 3:**

```
Input: head = [1]
Output: [1]
```

**Example 4:**

```
Input: head = [1,2,3]
Output: [2,1,3]
```

## Solutions

### Solution 1: Brute Force (Value Swap - Not Allowed Conceptually)

#### Approach

Although **not valid per constraints**, we can conceptually swap values instead of nodes.

We traverse the linked list and swap values of adjacent nodes.

#### Steps

1. Start from head
2. Swap values of current and next node
3. Move two steps forward
4. Repeat until end

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### Note

⚠️ This solution violates the problem constraint because it modifies node values instead of nodes.

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Iterative Pointer Manipulation (Optimal)

#### Approach

We rearrange node pointers instead of values using a dummy node.

We swap nodes in pairs:

```

prev -> A -> B -> next
becomes
prev -> B -> A -> next

```

#### Steps

1. Create a dummy node pointing to head
2. Use a pointer `prev`
3. For each pair:
   - Identify `first` and `second`
   - Rewire pointers:
     - `first.next = second.next`
     - `second.next = first`
     - `prev.next = second`
4. Move `prev` forward
5. Repeat until no pairs remain

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### Why it works

Each node is visited once, and we only adjust pointers locally for each pair.

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Recursive Approach

#### Approach

We recursively swap the first pair and then solve the rest of the list.

For each recursive call:

- Swap first two nodes
- Recursively process remaining list

#### Steps

1. Base case:
   - If list has 0 or 1 node → return head
2. Swap first two nodes
3. Recursively call for remaining list
4. Connect swapped pair with recursive result

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n) (recursion stack)

#### Why it works

Each recursive call processes one pair and reduces problem size.

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach               | Time Complexity | Space Complexity | Notes                          |
| ---------------------- | --------------- | ---------------- | ------------------------------ |
| Value Swap (Invalid)   | O(n)            | O(1)             | Violates constraints           |
| Iterative Pointer Swap | O(n)            | O(1)             | **Best solution (optimal)**    |
| Recursive              | O(n)            | O(n)             | Clean but uses recursion stack |
