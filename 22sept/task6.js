"use strict";
function isanagram(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;
    if (n1 !== n2) { return false; }
    let a = str1.split(" ").sort;
    let b = str2.split(" ").sort;
    for (let i = 0; i < n1; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
let str1 = "rat";
let str2 = "tar";
console.log(isanagram(str1, str2));