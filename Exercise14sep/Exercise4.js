//let n=7;
"use strict";
function oddSum(n) {
    if (n < 1) {
        return 0;
    }
    if (n % 2 != 0) {
        return (n + oddSum(n - 1));
    } else {
        return (0 + oddSum(n - 1));
    }
}
console.log(oddSum(7));