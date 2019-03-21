function some (arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return true;
    }
  };
  return false;
};

module.exports = some;
