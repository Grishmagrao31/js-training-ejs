let listofNumbers = [2, 3, 5, 7, 11];
console.log(listofNumbers[2]);
console.log(listofNumbers[0]);
console.log(listofNumbers[2 - 1]);
let day1 = {
    squirrel : false,
    events : ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);


console.log (Math.sqrt( 76* 9 * 4 * 1));
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  }
console.log(max(4, 1, 9, -2));
//console.log(max(4, 1, 9, -2));
