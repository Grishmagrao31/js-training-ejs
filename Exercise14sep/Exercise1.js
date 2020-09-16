"use strict";
let a = "grishma";
let n = a.length;
let space = '';
function rightJustify(a) {
    for (let i = 1; i <= 70; i++) {
        if (i === (70 - n)) {
            console.log(space + a);
        } else {
            space += ' ';
        }
    }
}
rightJustify(a);

