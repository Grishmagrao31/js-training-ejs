"use strict";
function square(x) {
    return x * x;
    }
    
    function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
    }
    
    test("Testing square of 2 returns 4", () => {
    return square(2) === 4;
    });
    test("Testing square of 2 returns 5", () => {
    return square(2) === 5;
    });
    test("Testing square of 5 returns 25", () => {
    return square(5) === 25;
    });
    test("Testing square of 6 returns 78",() => {
    return square(6) === 78;
    });