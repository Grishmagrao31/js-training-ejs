"use strict";
//Optional arguments
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

//2nd Example

function power(m, n = 2) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result = result * m;

    }
    return result;
}
console.log(power(4));
console.log(power(2, 6));

// 3rd Example

console.log("C", "O", 2);

//Growing function
function printdigits(cows, chicken) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(cowString, "Cows");
    let chickenString = String(chicken);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(chickenString, "Cows");
}
console.log(printdigits(7, 11));