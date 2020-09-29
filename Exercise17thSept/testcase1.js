"use strict";
function cube (a) {
return  (a * a * a);
}

function label (test, body) {
    if (body()) console.log(`Passed: ${test}`);
}
label("Testing the cube of 2 reults is 8", () => {
   return cube(2) === 8;
});
label ("Testing the cube of 2 results is  9", () => {
    return cube (2) === 9;
});