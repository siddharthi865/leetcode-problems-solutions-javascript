function merge(intervals) {
  let merged = true;

  while (merged) {
    merged = false;

    for (let i = 0; i < intervals.length; i++) {
      for (let j = i + 1; j < intervals.length; j++) {
        let a = intervals[i];
        let b = intervals[j];

        // Check overlap
        if (!(a[1] < b[0] || b[1] < a[0])) {
          // Merge
          let newInterval = [Math.min(a[0], b[0]), Math.max(a[1], b[1])];

          // Replace i and remove j
          intervals[i] = newInterval;

          // Shift left manually (no splice)
          for (let k = j; k < intervals.length - 1; k++) {
            intervals[k] = intervals[k + 1];
          }
          intervals.length--;

          merged = true;
          break;
        }
      }
      if (merged) break;
    }
  }

  return intervals;
}

module.exports = merge;
