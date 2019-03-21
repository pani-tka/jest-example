const flatten = require('./flatten');

test('Empty array', () => {
  const actualValue = flatten([]);
  const expectedValue = [];

  expect(actualValue).toEqual(expectedValue);
});

test('Book case', () => { 
  const actualValue = flatten([[1, 2, 3], [4, 5], [6]]);
  const expectedValue = [1, 2, 3, 4, 5, 6];

  expect(actualValue).toEqual(expectedValue);
});