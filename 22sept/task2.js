"use strict";
function cummulativesum (arr) {
    let sum = 0;
    for (let obj of arr) {
        sum += obj;
    }
    return sum;
}
let arr = [1, 2, 3, 4, 5];
console.log (cummulativesum(arr));