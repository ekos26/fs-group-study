/**
 * @param {string} s
 * @return {string}
 * Write a function that takes a string as input and reverse only the vowels of a string.
 * Note: The vowels does not include the letter "y".
 */

function reverseVowels(s) {
  if (s.length <= 1) { return s; }

  const str = [...s];
  let left = 0;
  let right = s.length - 1;
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  while(left < right) {
    if (set.has(str[left]) && set.has(str[right])) {
      [str[right], str[left]] = [str[left], str[right]];      
      left++;
      right--;
    } else if (set.has(str[left])) {
      right--;
    } else {
      left++;
    }
  }
  
  return str.join('');
};

module.exports = reverseVowels;

// Notes
// Sets are faster than regular expressions