function nextPermutation(nums) {
  let result = [];

  function permute(arr, path) {
    if (arr.length === 0) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let newArr = [];
      for (let j = 0; j < arr.length; j++) {
        if (j !== i) newArr.push(arr[j]);
      }

      path.push(arr[i]);
      permute(newArr, path);
      path.pop();
    }
  }

  permute(nums, []);

  // Proper lexicographic sort (correct comparator)
  function compare(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return 0;
  }

  result.sort(compare);

  // find current
  let idx = -1;

  for (let i = 0; i < result.length; i++) {
    let same = true;
    for (let j = 0; j < nums.length; j++) {
      if (result[i][j] !== nums[j]) {
        same = false;
        break;
      }
    }
    if (same) {
      idx = i;
      break;
    }
  }

  let next = (idx + 1) % result.length;

  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[next][i];
  }
}

module.exports = nextPermutation;
