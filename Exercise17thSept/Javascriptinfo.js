"use strict";
function sayHi() {
    console.log(" Hello");
}
console.log(sayHi);
console.log(sayHi());
//Function Expression
let sayhello = function () {
    console.log("hello");
};
console.log(sayhello);
// copy a function to another function
function CopyFunction() {
    console.log("Hello");

}
let func = CopyFunction;
func();
CopyFunction();

//Function Expression to copy a function
let fc = FCopyFunction => {
    console.log("Hello");
};
let funct = fc;
funct();
fc();
//callback function 
function ask(question, yes, no) {
    if (((question))) {
        yes();
    } else {
        no();
    }
}
function showyes() {
    console.log("You have agreed");
}
function showNo() {
    console.log("You have canceled");

}
ask("Did you have your breakfast", showyes, showNo);

// Function expression in shorter way
function ask1(question, yes, no) {
    if (question) {
        yes();
    } else {
        no();
    }
}
ask1(
    "Do you agree ?",
    function () { console.log("You have agreed"); },
    function () { console.log("You canceled the plan"); }
);
// function Expression vs Function Declaration
// Function declartion 
function sum(a, b) {
    return a + b;
}
//Function Epression 
let sum1 = (a, b) => { return a + b; };
console.log(sum(1, 2));
console.log(sum1);
console.log(sum1(1, 7));
//Function declartion 

function sayhi(name) {
    console.log("Hello", +name);
}
sayhi("grishma");
let age = 19;
let welcome;
if (age < 18) {
    welcome = function () {
        console.log(" Hello ");

    };
    // welcome ();
} else {
    welcome = function () {
        console.log("Greetings!");
    };

}
welcome();

// Alternate way 
let agee = 19;
let welcomee = (agee < 18) ?
    function () { console.log("Hello"); } :
    function () { console.log("Greetings"); };
welcomee();