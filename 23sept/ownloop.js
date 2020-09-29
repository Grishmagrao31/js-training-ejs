"use strict";
/*
function repeat(n, test, update, action) {
    let result = n + 1;
    for (let i = 0; i < n; i++) {
        if (test(result)) {
            result = update(result);
            action(result);
        }
    }
    //return result;
}
console.log(repeat(10, n => n > 0, n => n - 1, console.log)); */
function loop(n, test, update, body) {
    for (let i = n; test(i); i = update(i)) {
      body(i);
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);