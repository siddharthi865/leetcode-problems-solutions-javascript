var combinationSum2 = function (candidates, target) {
  let result = [];
  let seen = {};

  function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }

  function generate(index, current, sum) {
    if (index === candidates.length) {
      if (sum === target) {
        let temp = current.slice();

        sort(temp);

        // build key
        let key = "";
        for (let i = 0; i < temp.length; i++) {
          key += temp[i] + ",";
        }

        if (!seen[key]) {
          seen[key] = true;
          result.push(temp);
        }
      }
      return;
    }

    // include
    current.push(candidates[index]);
    generate(index + 1, current, sum + candidates[index]);
    current.pop();

    // exclude
    generate(index + 1, current, sum);
  }

  generate(0, [], 0);
  return result;
};

module.exports = combinationSum2;
