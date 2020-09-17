function wrapvalue(n) {
    let local = n;
    return () => local ;
}
let wrap1 = wrapvalue(1);
let wrap2 = wrapvalue(2);
console.log(wrap1());
console.log(wrap2());
// second Example 
function multiplier (factor) {
    return Number => Number * factor;
}
let twice = multiplier (2);
console.log(twice(5));

// Third Example
function makeAdder (a) {
    return function (y) {
        return a + y;
    }
}
const add10 = makeAdder(10);
console.log(add10);
console.log(add10(2));

const add20 = makeAdder(20);
console.log(add20);
console.log(add20(2));