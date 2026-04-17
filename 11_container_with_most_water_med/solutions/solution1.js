function maxArea(height) {
  let n = height.length;
  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let h;
      if (height[i] < height[j]) {
        h = height[i];
      } else {
        h = height[j];
      }

      let width = j - i;
      let area = h * width;

      if (area > max) {
        max = area;
      }
    }
  }

  return max;
}

module.exports = maxArea;
