let a = 'a';
let b = 'b';
if (a < b) { 
  console.log(a + ' is less than ' + b);
} else if (a > b) {
  console.log(a + ' is greater than ' + b);
} else {
  console.log(a + ' and ' + b + ' are equal.');
}
let s1 ='2 + 2';
let s2 =new String ('2 + 2');
console.log(eval(s1));
console.log(eval(s2));

//string conversion
let outputStrings = [];
for (let i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}