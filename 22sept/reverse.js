"use strict";
function reverseArray (arr) {
    let b =[];
    for ( let i=arr.length-1; i >=0 ; i--) {
         b.push(arr[i]);
    }
    return b;
}
console.log(reverseArray (["A", "B", "C"]));
function reverseArrayinplace (arrayvalue) {
    return arrayvalue.reverse();
}
console.log(reverseArrayinplace([1, 2, 3, 4, 5]));