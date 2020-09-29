"use strict";
function deepEqual (a, b) {
    if (a === b) return true;
    if ((a === null || typeof a!= "Object" ) || ((b === null) || (typeof b != "Object"))) {
        return false;
    }
let keysa =Object.keys (a);
let keysb = Object.keys(b);
if (keysa.length != keysb.length) {
    return false;
}
    for (let key of keysa) {
        if (keysb in (key) && deepEqual(a[key], b[key])) {
             return true;
        }
    }
    return false;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));