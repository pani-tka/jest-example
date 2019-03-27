const Vector = require ('./vectorType');

test('Case 1' , () => {
    const vectorA = new Vector(1, 2);
    const vectorB = new Vector(2, 3);

    const actualVector = vectorA.plus(vectorB);
    const expectedVector = new Vector(3, 5);

    expect(actualVector.x).toBe(expectedVector.x);
    expect(actualVector.y).toBe(expectedVector.y);
});

test('Case 2' , () => {
    const vectorA = new Vector(1, 2);
    const vectorB = new Vector(2, 3);

    const actualVector = vectorA.minus(vectorB);
    const expectedVector = new Vector(-1, -1);

    expect(actualVector.x).toBe(expectedVector.x);
    expect(actualVector.y).toBe(expectedVector.y);
});

test('Case 3' , () => {
    const vector = new Vector(3, 4);

    const actualLength = vector.length;
    const expectedLength = 5;

    expect(actualLength).toBe(expectedLength);
});
