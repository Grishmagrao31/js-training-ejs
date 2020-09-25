"use strict";
function abecedarian(arr) {
    arr = arr.toLowerCase();
    arr = arr.split("");
    //console.log(arr);
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
           
        }
    }
    return true;
}
console.log(abecedarian("astder"));
console.log(abecedarian("abdest"));
console.log(abecedarian("acorsy"));