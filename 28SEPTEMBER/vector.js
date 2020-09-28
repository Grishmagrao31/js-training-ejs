"use strict";
class Vec {
    constructor(x, y) {
        this.x = x,
            this.y = y;
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    plus(z) {
        return new Vec(this.x + z.x, this.y + z.y);
    }
    minus(z) {
        return new Vec(this.x - z.x, this.y - z.y);
    }

}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);