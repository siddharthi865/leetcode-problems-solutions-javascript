var isNumber = function (s) {
  let num = Number(s);

  let trimmed = s.trim();
  if (trimmed.length === 0) return false;

  for (let i = 0; i < trimmed.length; i++) {
    let ch = trimmed[i];
    if (
      !(ch >= "0" && ch <= "9") &&
      ch !== "+" &&
      ch !== "-" &&
      ch !== "." &&
      ch !== "e" &&
      ch !== "E"
    )
      return false;
  }

  return !isNaN(num);
};

module.exports = isNumber;
