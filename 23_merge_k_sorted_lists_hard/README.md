# Merge K Sorted Lists (LeetCode #23)

## Problem Statement

You are given an array of `k` linked-lists, where each linked list is already sorted in **ascending order**.

Your task is to merge all the linked lists into one **single sorted linked list** and return its head.

### Constraints

- `k == lists.length`
- `0 <= k <= 10^4`
- `0 <= lists[i].length <= 500`
- `-10^4 <= lists[i][j] <= 10^4`
- Each linked list is sorted in **ascending order**
- Total number of nodes across all lists ≤ `10^4`

### Examples

**Example 1:**

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
```

**Example 2:**

```
Input: lists = []
Output: []
```

**Example 3:**

```
Input: lists = [[]]
Output: []
```

## Solutions

### Solution 1: Brute Force (Collect + Sort)

#### Approach

We ignore the fact that the lists are already sorted:

1. Traverse all linked lists
2. Store all values in an array
3. Sort the array manually
4. Rebuild the linked list

#### Steps

1. Iterate through every list
2. Extract all node values
3. Sort values using a basic sorting algorithm (e.g., selection sort)
4. Create a new linked list from sorted values

#### Complexity

- **Time Complexity:** O(N²)
- **Space Complexity:** O(N)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Sequential Merge (One by One)

#### Approach

We repeatedly merge two sorted linked lists:

- Merge first two lists
- Merge result with next list
- Continue until all are merged

This uses the classic **merge two sorted lists** logic repeatedly.

#### Steps

1. Take the first list as result
2. Iterate from second list onward
3. Merge current result with next list
4. Repeat until all lists are processed

#### Complexity

- **Time Complexity:** O(kN)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Divide & Conquer (Optimal)

#### Approach

We apply a **merge sort-like strategy**:

- Split lists into pairs
- Merge pairs in parallel
- Repeat until one list remains

This reduces repeated merging overhead.

#### Steps

1. Pair up adjacent lists
2. Merge each pair
3. Replace list array with merged results
4. Repeat until only one list remains

#### Complexity

- **Time Complexity:** O(N log k)
- **Space Complexity:** O(k)

#### [Click for solution](./solutions/solution3.js)

---

### Solution 4: Min Heap (Priority Queue - Optimal)

#### Approach

We always pick the **smallest current node** among all k lists using a **Min Heap**.

#### Steps

1. Insert head of each list into a Min Heap
2. Extract the smallest node
3. Add it to the result list
4. If extracted node has a next node, insert it into heap
5. Repeat until heap is empty

#### Complexity

- **Time Complexity:** O(N log k)
- **Space Complexity:** O(k)

#### [Click for solution](./solutions/solution4.js)

## Summary

| Approach         | Time Complexity | Space Complexity | Notes                                  |
| ---------------- | --------------- | ---------------- | -------------------------------------- |
| Brute Force      | O(N²)           | O(N)             | Ignores sorted property                |
| Sequential Merge | O(kN)           | O(1)             | Simple but inefficient for large k     |
| Divide & Conquer | O(N log k)      | O(k)             | Efficient and scalable                 |
| Min Heap         | O(N log k)      | O(k)             | Best for streaming / real-time merging |
