/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * You may assume all the characters consist of printable ascii characters.
 */

function reverseInPlace(str) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    const c = str[i];
    str[i] = str[j];
    str[j] = c;
  }
}

module.exports = reverseInPlace;