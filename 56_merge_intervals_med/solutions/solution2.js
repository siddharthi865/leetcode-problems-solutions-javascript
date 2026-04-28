function mergeSort(intervals) {
  if (intervals.length <= 1) return intervals;

  let mid = Math.floor(intervals.length / 2);

  let left = [];
  let right = [];

  for (let i = 0; i < mid; i++) left[left.length] = intervals[i];
  for (let i = mid; i < intervals.length; i++)
    right[right.length] = intervals[i];

  left = mergeSort(left);
  right = mergeSort(right);

  return mergeArrays(left, right);
}

function mergeArrays(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i][0] < right[j][0]) {
      result[result.length] = left[i];
      i++;
    } else {
      result[result.length] = right[j];
      j++;
    }
  }

  while (i < left.length) {
    result[result.length] = left[i];
    i++;
  }

  while (j < right.length) {
    result[result.length] = right[j];
    j++;
  }

  return result;
}

function merge(intervals) {
  if (intervals.length <= 1) return intervals;

  intervals = mergeSort(intervals);

  let result = [];
  result[0] = intervals[0];

  let idx = 0;

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let last = result[idx];

    // Overlap
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      idx++;
      result[idx] = current;
    }
  }

  return result;
}

module.exports = merge;
