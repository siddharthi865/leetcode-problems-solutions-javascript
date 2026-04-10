const mySqrt = (x) => {
  if (x === 0 || x === 1) return x;

  let left = 0;
  let right = x;
  let ans = 0;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid <= Math.floor(x / mid)) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};

module.exports = mySqrt;
