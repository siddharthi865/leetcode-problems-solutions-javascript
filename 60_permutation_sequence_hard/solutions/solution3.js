function getPermutation(n, k) {
  let numbers = [];
  let factorial = 1;

  // Build numbers list and factorial
  for (let i = 1; i < n; i++) {
    factorial *= i;
    numbers.push(i);
  }
  numbers.push(n);

  k = k - 1; // convert to 0-based
  let result = "";

  for (let i = n; i > 0; i--) {
    let index = Math.floor(k / factorial);

    result += numbers[index];

    // Remove used number manually
    for (let j = index; j < numbers.length - 1; j++) {
      numbers[j] = numbers[j + 1];
    }
    numbers.length--;

    if (i > 1) {
      k = k % factorial;
      factorial = Math.floor(factorial / (i - 1));
    }
  }

  return result;
}

module.exports = getPermutation;
