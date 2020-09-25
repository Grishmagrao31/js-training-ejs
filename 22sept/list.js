"use strict";
function arrayToList(array) {
    let list = 0;
    for (let i = array.length - 1; i >=0; i--) {
        list = { value: array[i], rest: array.slice(i -1) };
    }
    return list;
}
/*
function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return { value: value, rest: list };
}

function nth(list, n) {
    if (!list) {
        return undefined
    } else if (n == 0) {
        return list.value;
    } else {
        return nth(node.rest, n - 1);
    }
} */

console.log(arrayToList([10, 20]));