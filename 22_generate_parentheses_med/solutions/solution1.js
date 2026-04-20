function generateParenthesis(n) {
  const result = [];
  const current = new Array(2 * n);

  function generate(index) {
    if (index === 2 * n) {
      if (isValid(current)) {
        let str = "";
        for (let i = 0; i < current.length; i++) {
          str += current[i];
        }
        result[result.length] = str;
      }
      return;
    }

    current[index] = "(";
    generate(index + 1);

    current[index] = ")";
    generate(index + 1);
  }

  function isValid(arr) {
    let balance = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") balance++;
      else balance--;

      if (balance < 0) return false;
    }

    return balance === 0;
  }

  generate(0);
  return result;
}

module.exports = generateParenthesis;
