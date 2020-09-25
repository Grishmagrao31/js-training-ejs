"use strict";
/*
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
*/
/*
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); 
console.log(b); 
console.log(rest);
({ a, b } = { a: 10, b: 20 });
console.log(a);
console.log(b);
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a);
console.log(b);
console.log(rest);

// Description
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y);
console.log(z);

// Array Destructing
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red); 
console.log(yellow);
console.log(green);

// Assignmnet seperate from declaration
let a, b;
[a, b] = [1, 2];
console.log(a);
console.log(b);

//Default values
let c, d;
[c=5, d=7] = [1];
console.log(d);
console.log(b); */
// Swapping variable 
/*
let a =1;
let b = 3;
[a, b] = [b, a];
console.log(a);
console.log(b);
const arr = [1, 2, 3];
[arr[2], arr[1]] =[arr[1], arr[2]];
console.log(arr);
*/
//parsing an array returned a function
/*
function f () {
    return [1, 2];
}
let a, b;
[a, b] = f();
console.log(a);
console.log(b);
const [c] = f();// ignoring some returned value 
console.log(c);
// Assigning the rest of an array to a variable
const [a, ...b] = [1,2,3];
console.log(a);
console.log(b); 
*/
// Unpacking values from a regular  expression match
//object destructuring
/*
const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id);
console.log(is_verified);
// Assignment without declaration
/*
let a, b;
({a, b} = {a: 1, b: 2});
*/
/*
// Assigning to new variable names
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;
 console.log(foo); 
console.log(bar);
// Default values
/*
const {a = 10, b = 5} = {a: 3};
console.log(a);
console.log(b);
*/ 
/*
//Assigning to new variables names and providing default values
const {a: aa = 10, b: bb = 5} = {a: 3};
console.log(aa);
console.log(bb); */
//unpacking fields from objects passed as a function parameter
/*
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };
  
  function userId({id}) {
    return id;
  }
  
  function whois({displayName, fullName: {firstName: name}}) {
    return `${displayName} is ${name}`;
  }
  
  console.log(userId(user));
  console.log(whois(user));
  */
 //Setting a function parameter
 function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
    console.log(size, coords, radius);
    // do some chart drawing
  }
  
  drawChart({
    coords: {x: 18, y: 30},
    radius: 30
  });
  //Nested object and array destructuring
  const metadata = {
    title: 'Scratchpad',
    translations: [
      {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
      }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
  };
  
  let {
    title: englishTitle, 
    translations: [
      {
         title: localeTitle, 
      },
    ],
  } = metadata;
  
  console.log(englishTitle);
  console.log(localeTitle);
  //For of iteration and destructuring'
  const people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];
  
  for (const {name: n, family: {father: f}} of people) {
    console.log('Name: ' + n + ', Father: ' + f);
  }
  /*
  //Computed object property names and destructuring
  let key = 'z';
  let {[key]: foo} = {z: 'bar'};
  
  console.log(foo); */
// Rest in object destructuring
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
//a;
//b; 
//rest;
// Invalid Javascriot identifier as a property name
const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz);
//combined array and object destructuring
const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
  ];
  
  const [,, { name }] = props;
  
  console.log(name); 
//The prototype chain
let obj = {self: '123'};
obj.__proto__.prot = '456';
const {self, prot} = obj;





