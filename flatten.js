const flatten = arr =>
  arr.reduce(function(previousValue, currentValue) {
    return previousValue.concat(currentValue);
  }, []);

module.exports = flatten;
