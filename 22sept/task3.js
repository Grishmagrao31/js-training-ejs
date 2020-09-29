"use strict";
function middle(arr) {
    let b = [];
    for (let i = 1; i < arr.length-1; i++) {
        // b = arr.slice(1, arr.length-1);
        b.push(arr[i]);

    }

    return b;
}
let arr = [1, 2, 3, 4, 5];
console.log(middle(arr));

