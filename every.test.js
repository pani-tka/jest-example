const every = require('./every');

test('Book case 1', () => {
  expect(every([NaN, NaN, NaN], isNaN)).toBeTruthy();
});
  
test('Book case 2', () => {
  expect(every([NaN, NaN, 4], isNaN)).toBeFalsy();
});