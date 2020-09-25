const arr1 = ["a", "d", "c", "g", "h"];
const arr2 =["m", "n", "o"];
console.log(arr1.copyWithin(0, 3, 5));

const array1 = ["a", "b", "c"];
array1.forEach(element => console.log(element));
const a = ['a', 'b', 'c'];
const iterator = a.keys();
for (const key of iterator) {
  console.log(key);
}
//creating an array
let msgArray = [];
msgArray[0] = 'Hello';
msgArray[99] = 'world';

if (msgArray.length === 100) {
  console.log('The length is 100.');
}
//create a tabular column
values = [];
for (let x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
}
console.table(values);