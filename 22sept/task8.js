"use strict";
function doubleloon(str1) {
    str1 = str1.toLowerCase();
    str1 = str1.split("");
    let n = str1.length;
    console.log(str1);
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (str1[i] === str1[j]) {
                count += 1;
            }
        }
    }
    if (count === 2) {
        return true;
    } else {
        return false;
    }

}
console.log(doubleloon("Abab"));