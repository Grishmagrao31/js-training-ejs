"use script";
/*
function showMessage() {
    console.log("Hello everyone! ");
}
showMessage(); */

// Loal Variable
/*
function showMessage() {
    let message = "Hello, I'm JavaScript!";
    console.log(message);
}
showMessage();
console.log(message); */

//outer variables
/*
let username = 'Missrao';
function showMessage() {
    let message = 'Hello, ' + username;
    console.log(message);
}
showMessage(); */
/*

let username = 'Missrao';
function showMessage() {
    username = 'grishma';
    let message = 'Hello, ' + username;
    console.log(message);
}
console.log(username);
showMessage();
console.log(username);
*/

/*
let username = 'Missrao';
function showMessage() {
    let username = "Grishma";
    let message  = 'Hello, ' +username;
    console.log(message);
}
showMessage();
console.log(username); */

//Global variable
// Parameters
/*
function showMessage(from, text) {
    console.log(from + ':' + text);
}
showMessage('Grishma', ' Hello! ');
showMessage('Missrao',  "What's up?") */

//Example2 for parameters
/*
function showMessage(from, text) {
    from = '*' + from + '*';
    console.log(from + ':' + text);
}
let from = "Grishma";
showMessage(from, "Hello");
console.log( from); */
// Default parameters
/*
function showMessage(from, text = "no text") {
    console.log (from + ":" + text);
}
showMessage("Missrao"); */

//Evaluation of default parameters
/*
function showMessage(text) {
    if (text === undefined){
         text = 'empty message';
    }
    console.log(text);
}
showMessage(); */
//or
/*
function showMessage(text) {
    text = text || 'empty';
    console.log(text);
}
showMessage(); */
/*
function showCount(count) {
    console.log(count ?? "unknown");
}
showCount(0);
showCount(null);
showCount(); */
// returning a value 
/*
function sum(a, b) {
    return a + b;
}
let result = sum (1 , 2);
console.log(result); */
/*
function checkAge(age) {
    if (age >= 18) {
       return true;
    } else {
        return console.log(" Do you have a permission from your parents ?")
    }
}
let age = 10;
if (checkAge (age)) {
    console.log(' Access granted');
} else {
    console.log("Acess denied");

}
//return without the value
function showMovie(age) {
    if ( !checkAge(age) ) {
        return;
    }
    console.log("Showing the movie");

}
showMovie(age); */


// A function with an emoty return
/*
function doNothing() {  }
console.log(doNothing() === undefined);
*/
/*
function doNothing() {
    return;
}
console.log(doNothing() === undefined);
*/
/*
//show the prime numbers

function showPrime(n) {
    nextPrime: for (let i = 2; i < n; i++){
        for (let j = 2; j < i ; j++ ) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }

}
showPrime(9);
*/
/*
function showPrime(n) {
    for (let i = 2; i < n; i++) {
      if (! isPrime(i)) continue;
      console.log (i);
    }
}
function isPrime(n) {
    for (let i = 2; i < n ; i++) {
        if ( n % i == 0) return false ;
    }
    return true;
} */
