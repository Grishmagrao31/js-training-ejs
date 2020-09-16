const square = function (c) {
    return c * c;
};
console.log(square(12));
const makenoise = function(){
    console.log("Pling!");
};
makenoise();
//second example
const power =function (base, exponent){
    let result = 1;
    for (let count =0; count <exponent; count++){
        result *=base;
    }
    return result;
};
console.log(power(2,10));

//third example
let a =10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(a + y + z);
}
console.log(a + z);
const halve = function (n) {
    return n / 2;
};
let n = 10;
console.log(halve(100));
console.log(n);
console.log("The future says :", future());
function future() {
    return " You'll never have flying cars";
}
//4th example
const power1 = (base, exponent) => {
    let result = 1;
    for (let count = 0; count <exponent; count ++) {
        result *= base;
    }
    return console.log(result);
}
//5th example
const square1 = (c) => {return c * c ;};
const square2 = (c) => c * c;

const horn = () => {
    console.log("Toot");
};