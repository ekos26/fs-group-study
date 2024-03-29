// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const str = n.toString();
  let result = ''
  
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }

  return parseInt(result) * Math.sign(n);
}

module.exports = reverseInt;
