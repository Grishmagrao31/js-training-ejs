"use strict";
let t = [1, 2, 3, 4];
function chop(t) {
    // t= t.slice(1, t.length-1);
    t.shift();
    t.pop();
    //return t;
}
console.log(chop(t));
console.log(t);