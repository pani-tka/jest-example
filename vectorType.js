function Vector (x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function (inputVector) {
    return new Vector(
        this.x + inputVector.x,
        this.y + inputVector.y
    );
}

Vector.prototype.minus = function (inputVector) {
    return new Vector(
        this.x - inputVector.x,
        this.y - inputVector.y
    );
}

Object.defineProperty(Vector.prototype, 'length' , {
    get : function () {
       return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
})

 module.exports = Vector;