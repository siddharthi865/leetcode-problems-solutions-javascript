function countAndSay(n) {
  let result = "1";

  for (let step = 2; step <= n; step++) {
    let current = "";
    let count = 1;

    for (let i = 1; i <= result.length; i++) {
      if (result[i] === result[i - 1]) {
        count++;
      } else {
        current += count + result[i - 1];
        count = 1;
      }
    }

    result = current;
  }

  return result;
}

module.exports = countAndSay;
