const bFind = require('./bFind');

const arr = [];
const count = 1000000;

for (let i = 0; i < count; i++) {
    arr.push(i * i);
}

function commonFind(arr, value) {
    let result = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return result;
}

const searchValues = [
    1234,
    2143523523,
    4324325,
    3455466,
    57748967,
];

test('Some test', () => {
    expect(true).toBe(true);
});

test('Common find', () => {
    for (let i = 0; i < 1000; i++) {
        searchValues.forEach(value => {
            commonFind(value);
        });
        expect(true).toBe(true);
    }
});

test('Binary find', () => {
    for (let i = 0; i < 1000; i++) {
        searchValues.forEach(value => {
            bFind(value);
        });
        expect(true).toBe(true);
    }
});
