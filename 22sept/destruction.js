/*let a , b;
[a, b] =[10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);*/
//Description
/*
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y);
console.log(z);
//Array destruction
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red);
console.log(yellow);
console.log(green);;
// Assignment separate from declaration
let m, n;
[m, n] =[1, 3];
console.log(m);
console.log(n);
//Default values
let a, b;
[a = 5, b = 7] =[1];
console.log(a);
console.log(b); */
// swapping variables
/* 
let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a);
console.log(b); 
const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr);
*/
//Parsing an array returned from a function
/*
function f () {
    return [1, 2];
}
let a, b;
[a, b] = f();
console.log(a);
console.log(b);
*/
const [a, ...b] = [1, 2, 3];
console.log(a);
console.log(b);
//object destructing
const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); 

console.log(is_verified); 