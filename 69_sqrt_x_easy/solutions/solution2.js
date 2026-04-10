const mySqrt = (x) => {
  if (x === 0 || x === 1) return x;

  let left = 0;
  let right = x;
  let ans = 0;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid * mid === x) {
      return mid;
    }

    if (mid * mid < x) {
      ans = mid; // store possible answer
      left = mid + 1; // try bigger
    } else {
      right = mid - 1; // try smaller
    }
  }

  return ans;
};

module.exports = mySqrt;
