/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

@param {string} s
@return {number}
*/

function firstUniqChar(str) {
  for (let i = 0; i < str.length; i++) {
    let firstIndex = str.indexOf(str[i]);
    let secondIndex = str.indexOf(str[i], firstIndex + 1);
    if (secondIndex === -1) {
      return i;
    }
  }
  
  return -1;
}

module.exports = firstUniqChar;
