function insert(intervals, newInterval) {
  let result = [];
  let i = 0;
  let n = intervals.length;

  // Step 1: Add all intervals before overlap
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Step 2: Merge overlapping intervals
  let start = newInterval[0];
  let end = newInterval[1];

  while (i < n && intervals[i][0] <= end) {
    if (intervals[i][0] < start) start = intervals[i][0];
    if (intervals[i][1] > end) end = intervals[i][1];
    i++;
  }

  result.push([start, end]);

  // Step 3: Add remaining intervals
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

module.exports = insert;
