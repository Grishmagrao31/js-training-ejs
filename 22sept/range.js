"use strict";
function range ( start, end) {
     let b =[];
    for (let i = start; i<end; i++) {
     (b.push(i));
    }
    return b;
}
//console.log(range);
let array = range (1, 10);
console.log(array);
function sum (array) {
    let result =0 ;
for (let i =0 ; i < array.length; i++) {
  result= result + array[i];

}
return result;

}
//range(1, 10);
console.log(sum(array));