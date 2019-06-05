const existsTwoMovies = require('./index');

test('existsTwoMovies function exists', () => {
  expect(typeof existsTwoMovies).toEqual('function');
});

test('existsTwoMovies(160, [80, 110, 40]) returns false', () => {
  expect(existsTwoMovies(160, [80, 110, 40])).toEqual(false);
});

test('existsTwoMovies(160, [80, 110, 80]) returns true', () => {
  expect(existsTwoMovies(160, [80, 110, 80])).toEqual(true);
});

test('existsTwoMovies(160, [20, 30, 110, 40, 50]) returns true', () => {
  expect(existsTwoMovies(160, [20, 30, 110, 40, 50])).toEqual(true);
});

