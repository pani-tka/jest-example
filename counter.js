function Counter (value) {
    this.initialValue = value;
    this.value = value;
    this._changesCount = 0;
}

Counter.prototype.increment = function () {
    this.value++;
    this._changesCount++;
}

Counter.prototype.decrement = function () {
    this.value--;
    this._changesCount++;
}

Counter.prototype.setValue = function (value) {
    this.value = value;
    this._changesCount++;
}

Counter.prototype.reset = function () {
    this.value = this.initialValue;
    this._changesCount = 0;
}

Object.defineProperty(Counter.prototype, 'changesCount', {
    get: function() {
        return this._changesCount;
    }
})

module.exports = Counter;