"use strict";
function every(array, test) {
    let result = 0;
    for (let n = 0; n < array.length; n++){
        result = test(array[n]);
    } 
    return result;       
}
console.log(every([1,3,5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));