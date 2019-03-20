const flatten = require('./flatten');

test('Empty array', () => {
  const actualValue = flatten([]);
  const expectedValue = [];

  expect(actualValue).toBeEqual(expectedValue);
});
