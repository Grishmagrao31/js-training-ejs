"use strict";
let sum = (a, b) => a + b;
console.log (sum ( 1, 3));

// one parameter
let double = n => n * 2;
console.log( double(3));

//no argumnent
let sayhi = () => console.log("Hello");
sayhi();

//arrow can be used same way as the function expression
let age =19;
let welcome = (age < 18) ?
    () => console.log("Hello") :
    () => console.log("Greetings!");
welcome();
 

//Multiline arrow
let sum2 = (a, b) => {
    let result = a + b;
    return result;
};
console.log( sum2 (1, 3) )