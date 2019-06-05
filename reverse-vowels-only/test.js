const reverseVowels = require('./index');

test('ReverseVowels function exists', () => {
  expect(reverseVowels).toBeDefined();
});

test('ReverseVowels reverses a string', () => {
  expect(reverseVowels('hello')).toEqual('holle');
});

test('ReverseVowels reverses a string', () => {
  expect(reverseVowels('leetcode')).toEqual('leotcede');
});
