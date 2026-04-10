const mySqrt = (x) => {
  let i = 0;

  while (i * i <= x) {
    i++;
  }

  return i - 1;
};

module.exports = mySqrt;
