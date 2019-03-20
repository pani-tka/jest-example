function reduce(arr, cb, initialValue) {
  let result = initialValue;

  for (let i = 0; i < arr.length; i++) {
    result = cb(result, arr[i]);
  }

  return result;
}

module.exports = reduce;
