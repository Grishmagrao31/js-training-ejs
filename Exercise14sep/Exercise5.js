"use strict";
function power(x, n) {
    if (n === 0) {
        return 1;
    } else if (n % 2 == 0) {
        return power(x * x, (n / 2));
        //return  power(power(x, n/2),2);

    } else {
        return (x * power(x, n - 1));
    }
}
console.log(power(2, 4));