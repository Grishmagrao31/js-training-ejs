"use strict";
function nestedsum(t) {
    let sum = 0;
    for (let i = 0; i < t.length; ++i) {
        //for (let j =1; j < t.length; j++) {
        sum += t[i].reduce(function (a, b) { return a + b; });

    }

    return sum;
}
//let t = [[1, 2], [3], [4, 5, 6]];
console.log(nestedsum([[1, 2], [3], [4, 5, 6]]));
//console.log(t);