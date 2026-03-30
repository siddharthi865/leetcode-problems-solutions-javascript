const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = [];
  let right = [];

  for (let i = 0; i < mid; i++) {
    left[left.length] = arr[i];
  }

  for (let i = mid; i < arr.length; i++) {
    right[right.length] = arr[i];
  }

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
};

const merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;

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
};

const twoSum = (nums, target) => {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    arr[arr.length] = [nums[i], i];
  }

  arr = mergeSort(arr);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left][0] + arr[right][0];

    if (sum === target) {
      return [arr[left][1], arr[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

module.exports = twoSum;
