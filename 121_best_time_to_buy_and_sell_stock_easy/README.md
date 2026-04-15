# Best Time to Buy and Sell Stock (LeetCode #121)

## Problem Statement

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

You want to **maximize your profit** by choosing:

- A single day to **buy** one stock
- A different future day to **sell** that stock

Return the **maximum profit** you can achieve. If no profit is possible, return `0`.

### Constraints

- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

### Examples

**Example 1:**

```
Input: prices = [7,1,5,3,6,4]
Output: 5
```

**Example 2:**

```
Input: prices = [7,6,4,3,1]
Output: 0
```

**Example 3:**

```
Input: prices = [1,2,3,4,5]
Output: 4
```

## Solutions

### Solution 1: Brute Force

#### Approach

We check **every possible pair of days** where we buy first and sell later, and compute the profit.

#### Steps

1. Iterate through each day as the buying day
2. For each buying day, try all future days as selling days
3. Calculate profit for each pair
4. Track the maximum profit

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Optimal One Pass

#### Approach

Instead of checking all pairs, we track:

- The **minimum price seen so far** (best day to buy)
- The **maximum profit achievable so far**

At each step, we decide:

- If selling today gives better profit
- If today's price is a better buying opportunity

#### Steps

1. Initialize `minPrice` as first element
2. Initialize `maxProfit = 0`
3. Iterate through the array:
   - Calculate `profit = current price - minPrice`
   - Update `maxProfit` if needed
   - Update `minPrice` if current price is lower

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach    | Time Complexity | Space Complexity | Notes                      |
| ----------- | --------------- | ---------------- | -------------------------- |
| Brute Force | O(n²)           | O(1)             | Simple but inefficient     |
| One Pass    | O(n)            | O(1)             | Optimal and most efficient |
