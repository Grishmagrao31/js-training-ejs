"use strict";
function countBs(a) {
    let n = a.length;
    let count = 0;
    for (let i = 0; i <= n; i++) {
        if (a[i] == 'B') {
            count += 1;
        }
    }
    return count;

}
console.log(countBs("BBBBBACB"));
console.log(countBs("BBC"));

function countChar(String, Char) {
    let n = String.length;
    let count = 0;
    for (let i = 0; i <= n; i++) {
        if (String[i] === Char) {
            count += 1;
        }
    }
    return count;
}
console.log(countChar("Grishmarao", 'r'));
console.log(countChar("kakkerlak", 'k'));