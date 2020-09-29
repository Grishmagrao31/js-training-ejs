"use strict";
let listofnumbers = [2, 3, 5,7,11];
console.log(listofnumbers[2]);
console.log(listofnumbers[0]);
console.log(listofnumbers[2 - 1]);

//properties
//null.length;
//methods
let doh ="doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());
let sequence = [1, 2, 3, 4 ];
sequence.push(5);
sequence.push(6);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

//objects
let day1 = {
    squirrel : false,
    events: ["work", "touched tree","pizza", "running" ]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);
let anoject ={ left: 1, right: 2};
console.log(anoject.left);
delete anoject.left;
console.log(anoject.left);
console.log("left" in anoject);
console.log("right" in anoject);
console.log(Object.keys({a:0, b:0, c:2}));
let objectA = {a:1, b:2};
Object.assign(objectA, {b:3, c:4});
console.log(objectA);

//Mutability
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 === object2);
console.log(object1 === object3);
object1.value = 15;
console.log(object2.value);
console.log(object3.value);
const score = { visitors: 0, home: 0};
score.visitors = 1;
console.log(score);
//score = { visitors : 1, home: 1};