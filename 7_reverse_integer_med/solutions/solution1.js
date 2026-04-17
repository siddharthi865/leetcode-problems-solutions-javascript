function reverse(x) {
  var sign = 1;

  if (x < 0) {
    sign = -1;
    x = -x;
  }

  var str = "" + x;
  var reversed = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  var num = sign * Number(reversed);

  if (num < -2147483648 || num > 2147483647) {
    return 0;
  }

  return num;
}

module.exports = reverse;
