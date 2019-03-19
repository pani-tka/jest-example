const sum = require('./sum');

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('adds 3 + 6 to equal 9', () => {
  expect(sum(3, 6)).toBe(9);
});

test('adds 4 + 8 to equal 12', () => {
  expect(sum(4, 8)).toBe(12);
});

test('adds 3 + 7 not to equal 12', () => {
  expect(sum(3, 7)).not.toBe(12);
});
