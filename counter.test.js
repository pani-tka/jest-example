const Counter = require('./counter');

test('Mega super duper test', () => {
    const counter = new Counter(7);

    expect(counter.value).toBe(7);
    expect(counter.changesCount).toBe(0);

    counter.increment();

    expect(counter.value).toBe(8);
    expect(counter.changesCount).toBe(1);

    counter.decrement();

    expect(counter.value).toBe(7);
    expect(counter.changesCount).toBe(2);

    counter.setValue(1000);

    expect(counter.value).toBe(1000);
    expect(counter.changesCount).toBe(3);

    counter.reset();

    expect(counter.value).toBe(7);
    expect(counter.changesCount).toBe(0);
});
