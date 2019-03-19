function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if ((a === null && b !== null) || (a !== null && b == null)) {
    return false;
  }

  if (typeof a === 'object' && typeof b === 'object') {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    const properties = Object.keys(a);

    for (let i = 0; i < properties.length; i++) {
      const propertyName = properties[i];

      if (!deepEqual(a[propertyName], b[propertyName])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

module.exports = deepEqual;
