const mapValues = require('lodash/mapValues');

function addCentury (data) {
    return data.map(function (person) {
      return {
          ...person,
          century: Math.trunc(person.died / 100) + 1
      };
    })
}

function groupByCentury (data) {
    return data.reduce(function (grouped, person) {
        return {
            ...grouped,
            [person.century]: grouped[person.century]
              ? [...grouped[person.century], person]
              : [person]
        };
    }, {});
}

function averageCenturyPeople (centuryPeople) {
    return centuryPeople.reduce(function (sumLifeTime, person) {
        return sumLifeTime + person.died - person.born;
    }, 0) / centuryPeople.length;
}

function centuryLifeTime (data) {
    const groupedData =  groupByCentury (addCentury(data));
    return mapValues(groupedData, averageCenturyPeople);
}

module.exports = centuryLifeTime;