"use strict";
function issorted(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(issorted([1, 2, 3]));
console.log(issorted(["b", "a"]));
