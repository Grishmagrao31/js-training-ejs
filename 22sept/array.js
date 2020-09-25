"Use strict";
//create a array
let fruits = ["Apple", "Banana"]
console.log(fruits.length);
// Acess an array 
let first = fruits[0];
let last = fruits[fruits.length -1];
//loop over an array
fruits.forEach(function(item, index, array) {
    console.log(item, index);
}) 
// add an item to an array
let newlength = fruits.push('Orange');
console.log(newlength);
//Remove an item 
let last1 = fruits.pop();
console.log(last);
// remove the item from the front
let first1 = fruits.shift();
console.log(fruits);
// add from the front
let newLength = fruits.unshift ("Strawberry");
console.log(newLength);
//Find the index of an item
fruits.push("Mango");
let pos = fruits.indexOf("Banana");
console.log(pos);
// Remove an item by  index position
let removedItem = fruits.splice(pos, 1);
console.log(fruits);
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables);
let position = 1;
let n = 2;
let removedItems = vegetables.splice(position, n);
console.log(vegetables);
console.log(removedItems);
let shallowCopy = fruits.slice();
console.log(shallowCopy);
//Accessing array elements
let arr = ["this is the first element","This is second element","This is the last element"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[arr.length - 1]);
//console.log(arr.0);
let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
//console.log(years.0);
console.log(years[0]);
//Relationship between length and numerical properties
const fruit = []
fruit.push('banana', 'apple', 'peach');
console.log(fruit.length)
fruit[5] = "mango";
console.log(fruit[5]);
console.log(Object.keys(fruit));
console.log(fruit.length);
//increase the length
fruit.length = 10;
console.log (fruit);
console.log(Object.keys (fruit));
console.log(fruit.length);
console.log(fruit[8]);
//decrease the length 
fruit.length=2;
console.log(Object.keys(fruit));
console.log(fruit.length);
//creating an array using the result of a match
const myRe = /d(b+) (d)/i ;
const myarray =myRe.exec ("cdbBdbsbygdbasdb");
console.log(myarray);
//copywithoin
const arr1 = ["a", "d", "c", "g", "h"];
const arr2 =["m", "n", "o"];
console.log(arr1.copyWithin(0,3,5));