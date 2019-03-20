const reduce = require('./reduce');

const arr = [1, 2, 3, 4, 5];

const sum = (acc, elem) => acc + elem;
const mult = (acc, elem) => acc * elem;
const sqrSum = (acc, elem) => acc + elem * elem;

test('Case 1', () => {
  const actualValue1 = reduce(arr, sum, 0);
  const actualValue2 = reduce(arr, mult, 1);
  const actualValue3 = reduce(arr, sqrSum, 0);

  expect(actualValue1).toBe(15);
  expect(actualValue2).toBe(120);
  expect(actualValue3).toBe(55);
});
