"use strict";
function pow(base, exponent) {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result = result * base;

    }
    if (exponent === 0) {
        return 1;
    }
    return result;
}
console.log(pow(2, 3));