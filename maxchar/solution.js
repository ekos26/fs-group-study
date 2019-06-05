// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let result = '';
  const hash = {};

  for (const char of str) {
    hash[char] = hash[char] + 1 || 1;

    if (hash[char] > max) {
      max = hash[char];
      result = char;
    }
  }

  return result;
}

module.exports = maxChar;
