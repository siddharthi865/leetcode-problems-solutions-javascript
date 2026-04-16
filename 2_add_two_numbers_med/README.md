# Add Two Numbers (LeetCode #2)

## Problem Statement

You are given two **non-empty linked lists** representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit.

Add the two numbers and return the sum as a **linked list**.

### Constraints

- The number of nodes in each linked list is in the range **[1, 100]**
- `0 <= Node.val <= 9`
- The input lists **do not contain leading zeros**, except the number `0` itself

### Examples

**Example 1:**

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807
```

**Example 2:**

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Example 3:**

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

## Solutions

### Solution 1: Brute Force (Convert to Numbers)

#### Approach

We convert both linked lists into numbers, add them, and then convert the result back into a linked list.

⚠️ This approach is **not reliable** for large inputs due to integer overflow limitations in JavaScript.

#### Steps

1. Traverse `l1` and compute number
2. Traverse `l2` and compute number
3. Add both numbers
4. Convert sum into reversed linked list

#### Complexity

- **Time Complexity:** O(n + m)
- **Space Complexity:** O(n + m)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Simulation (Digit-by-Digit Addition)

#### Approach

We simulate how addition works manually:

- Add digits one by one
- Maintain a **carry**
- Build the result linked list as we go

#### Steps

1. Initialize a dummy node
2. Traverse both lists simultaneously
3. For each pair:
   - Add values + carry
   - Store result digit
   - Update carry
4. If carry remains → add new node

#### Complexity

- **Time Complexity:** O(max(n, m))
- **Space Complexity:** O(max(n, m))

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Optimal (Clean Carry Handling)

#### Approach

Same as Solution 2, but cleaner:

- Use `%` and division to handle carry efficiently
- Avoid conditional checks for carry

#### Steps

1. Traverse both lists until both are exhausted and no carry remains
2. At each step:
   - `sum = x + y + carry`
   - `digit = sum % 10`
   - `carry = Math.floor(sum / 10)`
3. Append digit to result list

#### Complexity

- **Time Complexity:** O(max(n, m))
- **Space Complexity:** O(max(n, m))

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach        | Time Complexity | Space Complexity | Notes                            |
| --------------- | --------------- | ---------------- | -------------------------------- |
| Brute Force     | O(n + m)        | O(n + m)         | Not safe for large numbers       |
| Simulation      | O(max(n, m))    | O(max(n, m))     | Mimics real addition             |
| Optimal (Clean) | O(max(n, m))    | O(max(n, m))     | Best and cleanest implementation |
