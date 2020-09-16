"use strict";
function power(m, n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * m;
    }
    if (n === 0) {
        return 1;
    }
    return result;
}
function checkFermat(a, b, c, n) {
    if (n > 2 && (power(a, n) + power(b, n) === power(c, n))) {
        console.log("Holy smokes, Fermat was wrong!");
    } else {
        console.log("No, that doesn’t work.");
    }
}
checkFermat(0, 3, 3, 2);

