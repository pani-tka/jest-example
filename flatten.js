const flatten = arr =>
  arr.reduce(function(previousValue, currentValue) {
    return previousValue.concat(currentValue);
  }, []);

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce(function(acc, elem) {
  return acc + elem;
}, 0);

const sumValue = sum(arr);

/**
 * Step 0:
 *
 * acc = 0;
 * elem = 1;
 *
 * Step 1:
 *
 * acc = 1
 * elem = 2
 *
 * Step 2:
 *
 * acc = 3
 * elem = 3
 *
 * Step 3:
 *
 * acc = 6
 * elem = 4
 *
 * Step 4:
 *
 * acc = 10
 * elem = 5
 */

module.exports = flatten;
