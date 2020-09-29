"use strict";
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(3, console.log);
let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
function unless(test, then) {
    if (!test) then();
}
repeat(3, n => {
    unless(n % 2 === 1, () => {
        console.log(n, "is even");
    });
});
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name === name);
        if (known === -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));