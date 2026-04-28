function insert(intervals, newInterval) {
  // Step 1: Insert new interval
  intervals.push(newInterval);

  // Step 2: Sort manually (no built-in sort)
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (intervals[i][0] > intervals[j][0]) {
        let temp = intervals[i];
        intervals[i] = intervals[j];
        intervals[j] = temp;
      }
    }
  }

  // Step 3: Merge intervals
  let result = [];
  let current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let next = intervals[i];

    if (current[1] >= next[0]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      result.push(current);
      current = next;
    }
  }

  result.push(current);
  return result;
}

module.exports = insert;
