"use strict";
//Protoptye
let empty = {};
console.log(empty.toString);
console.log(empty.toString());
console.log(Object.getPrototypeOf({})== Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([])== Array.prototype);
/*
let prototype = {
    speak (line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }

};
let Rabbit =Object.create(prototype);
Rabbit.type ="killer";
Rabbit.speak ("Brap");
*/
/*
function Rabbits(type) {
    this.type = type;
}
Rabbits.prototype.speak = function (line) {
    console.log(`The ${this.type} rabbit says  '${line}'`);
};
let weird1 = new Rabbits ("weird");
console.log(Object.getPrototypeOf(Rabbits) ==
            Function.prototype);
console.log(Object.getPrototypeOf(weird1) ==
            Rabbits.prototype);
            */
        
// class Notation
class Rabbit {
    constructor(type) {
      this.type = type;
    }
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  }
  
  let killerRabbit = new Rabbit("killer");
  let blackRabbit = new Rabbit("black");   
  let object = new class { getWord () { return "Hello"}}
  console.log(object.getWord());
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());
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
