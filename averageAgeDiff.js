function byName(data, name) {
    return data.find(it => it.name === name);
}

function averageAgeDiff(data) {
    let result = 0;
    let count = 0;

    data.forEach(person => {
        const mother = person.mother && byName(data, person.mother);

        if (mother) {
            result -= mother.born - person.born;
            count++;
        }
    });

    return result / count;
}

module.exports = averageAgeDiff;