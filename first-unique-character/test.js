const firstUniqChar = require('./index');

test('firstUniqChar function exists', () => {
  expect(typeof firstUniqChar).toEqual('function');
});

test("'leetcode' returns 0", () => {
  expect(firstUniqChar('leetcode')).toEqual(0);
});

test("'loveleetcode' returns 2", () => {
  expect(firstUniqChar('loveleetcode')).toEqual(2);
});

test("'asdfzqwerasdf' returns 4", () => {
  expect(firstUniqChar('asdfzqwerasdf')).toEqual(4);
});

test("'aabbccdd' returns -1", () => {
  expect(firstUniqChar('aabbccdd')).toEqual(-1);
});
