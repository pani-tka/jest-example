const some = require('./some');

test('Book case 1', () => {
  expect(some([NaN, 3, 4], isNaN)).toBeTruthy();
});
  
test('Book case 2', () => {
  expect(some([2, 3, 4], isNaN)).toBeFalsy();
});