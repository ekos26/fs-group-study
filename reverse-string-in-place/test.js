const reverseInPlace = require('./index');

test('Reverse function exists', () => {
  expect(reverseInPlace).toBeDefined();
});

const arr1 = ["h","e","l","l","o"];
reverseInPlace(arr1);

test('Reverse reverses a string', () => {
  expect(arr1).toEqual(["o","l","l","e","h"]);
});

const arr2 = ["H","a","n","n","a","h"];
reverseInPlace(arr2);

test('Reverse reverses a string', () => {
  expect(arr2).toEqual(["h","a","n","n","a","H"]);
});
