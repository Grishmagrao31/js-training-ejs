"use strict";
class matric {
    constructor (width, height, element = (a, b) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];
        for (let b = 0; b < height; b++) {
            for (let a = 0; a< width; a++) {
                this.content [b * width + a] = element (a, b);
            }
        }
    }
 get (a, b) {
     return this.content[ b * this.width + a];
 }
 set ( a , b, value) {
     this.content [b * this.width + a] = value;
 }
}
class MatrixIterator {
    constructor(matrix) {
      this.x = 0;
      this.y = 0;
      this.matrix = matrix;
    }
  
    next() {
      if (this.y == this.matrix.height) return {done: true};
  
      let value = {x: this.x,
                   y: this.y,
                   value: this.matrix.get(this.x, this.y)};
      this.x++;
      if (this.x == this.matrix.width) {
        this.x = 0;
        this.y++;
      }
      return {value, done: false};
    }
  }
  matric.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
  };
  let matrix = new matric(2, 2, (x, y) => `value ${x},${y}`);
  for (let {x, y, value} of matrix) {
    console.log(x, y, value);
  }
  let varyingSize = {
    get size() {
      return Math.floor(Math.random() * 100);
    }
  };
  
  console.log(varyingSize.size);
  class Temperature {
    constructor(celsius) {
      this.celsius = celsius;
    }
    get fahrenheit() {
      return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
      this.celsius = (value - 32) / 1.8;
    }
  
    static fromFahrenheit(value) {
      return new Temperature((value - 32) / 1.8);
    }
  }
  
  let temp = new Temperature(22);
  console.log(temp.fahrenheit); 
  class SymmetricMatrix extends matric {
    constructor(size, element = (x, y) => undefined) {
      super(size, size, (x, y) => {
        if (x < y) return element(y, x);
        else return element(x, y);
      });
    }
  
    set(x, y, value) {
      super.set(x, y, value);
      if (x != y) {
        super.set(y, x, value);
      }
    }
  }
  
  let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
  console.log(matrix.get(2, 3));
  