function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let h;
    if (height[left] < height[right]) {
      h = height[left];
    } else {
      h = height[right];
    }

    let width = right - left;
    let area = h * width;

    if (area > max) {
      max = area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

module.exports = maxArea;
