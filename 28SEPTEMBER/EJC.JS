"use strict";
/*
let rabbit = {};
rabbit.speak =function (line) {
    console.log(`The rabbit says ${line}`);
};
rabbit.speak(" The rabbit says hello missrao I m alive");
*/
/*
function speak (line) {
console.log(`The rabbit says ${line}`);
}
let whiterabbit = { type : "white", speak};
let hungryrabbit = {type :"hungry", speak};
whiterabbit.speak("the rabbit has a beautiful ears");
/* hungryrabbit.speak("Missrao the rabbit is hungry");
*/
/*
speak.call(hungryrabbit, "Hey Missrao");
function normalise () {
    console.log(this.cords.map ( n => n /this.length ));
}
normalise.call({cords : [0,2,3], length : 5}); */
// Protoype
/*
let empty ={}
console.log(empty.toString);
console.log(empty.toString());
console.log(Object.getPrototypeOf({}) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(Math.max)=== Function.prototype);
console.log(Object.getPrototypeOf([])===Array.prototype);
*/
/*
let prototyperabbit = {
    speak (line) {
        console.log(`The rabbit of the ${this.type} says ${line}`);
    }
};
let pdr = Object.create(prototyperabbit);
pdr.type = " hungry";
pdr.speak (" missrao I m hungry");
function makearabbit (type) {
    let raabit = Object.create(prototyperabbit);
    rabbit.type = type;
    return rabbit;
} */
function Rabbit (type) {
    this.type =type;

} 
Rabbit.prototype.speak =function (line) {
    console.log(`the words ${this.type} said by the rabbit ${line}`);
};

let werirtrabbit = new Rabbit ("weird");
let killerrabbit = new Rabbit("killer");
let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
Rabbit.prototype.teeth = "small";
console.log(werirtrabbit.teeth);
werirtrabbit.teeth = "long , sharp and small ";
console.log(werirtrabbit.teeth);
console.log(killerrabbit.teeth);
console.log(Rabbit.prototype.teeth);
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
console.log(ages.has("toString"));