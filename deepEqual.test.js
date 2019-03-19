const deepEqual = require('./deepEqual');

test('Empty objects equal', () => {
  expect(deepEqual({}, {})).toBeTruthy();
});

test('Single value', () => {
  expect(deepEqual(3, 3)).toBeTruthy();
});

const obj = { here: { is: 'an' }, object: 2 };

test('Book case 1', () => {
  expect(deepEqual(obj, obj)).toBeTruthy();
});

test('Book case 2', () => {
  expect(deepEqual(obj, { here: 1, object: 2 })).toBeFalsy();
});

test('Book case 3', () => {
  expect(deepEqual(obj, { here: { is: 'an' }, object: 2 })).toBeTruthy();
});

test('Empty object not equals not empty object', () => {
  expect(deepEqual({}, { test: 'test' })).toBeFalsy();
});
