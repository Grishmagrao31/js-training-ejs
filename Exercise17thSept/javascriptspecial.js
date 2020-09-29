"use strict";
//variables
let c =9;
c= "JOHN";
console.log ("1" + 2);
console.log("2" + 1);
console.log(c);
// comparsion
console.log( 0 === false);
console.log (0 === "");
//switch construct
let age ="18";
switch (age) {
case 18:
    console.log("wont work");
    break;
case "18":
    console.log("This works");
    break;
default :
    console.log(" Any value not equal to one above");
}
// Function
// function declartion
function sum3 (a, b) {
    let result = a + b;
    return result;
}
sum3 ( 4, 5);

// Function  Expression
let sum4 = function (a , b) {
    let result = a + b;
    return result;
};
console.log(sum4(8,9));
// Arrow function
let sum5 = (a , b) => a + b;
let summ =(a, b) => {
    return a + b;
};
let sayhi = () => console.log ("Hello");
let double1 = n => n * 2;
console.log (sum5 (1, 2));
console.log ( summ (4, 8));
console.log(sayhi);
console.log(double1(3));