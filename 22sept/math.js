console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
//static methods
console.log(Math.abs(-10));
console.log(Math.acos(0.5));
console.log(Math.acosh(60));
console.log(Math.asin(0.5));
console.log(Math.asinh(50));
console.log(Math.atan(0.5));
console.log(Math.atanh(50));
console.log(Math.atan2(50,30))
console.log(Math.cbrt(3));
console.log(Math.ceil(5.78));
console.log(Math.clz32(12));
console.log(Math.cos(0.5));
console.log(Math.cosh(60));
console.log(Math.exp(2));
console.log(Math.expm1(4));
console.log(Math.floor(4.78));
console.log(Math.fround(5.599));
console.log(Math.hypot(3,4));
console.log(Math.imul(10,20));
console.log(Math.log(2));
console.log(Math.log1p(5));
console.log(Math.log2(10));
console.log(Math.log10(2));
console.log(Math.max(10, 20));
console.log(Math.min(10, 20));
console.log(Math.pow(10, 2));
console.log(Math.random());
console.log(Math.round(8.78));
console.log(Math.sign(-10));
console.log(Math.sin(0.8));
console.log(Math.sinh(60));
console.log(Math.sqrt(81));
console.log(Math.tan(0.25));
console.log(Math.tanh(45));
console.log(Math.trunc(7.8));
//converting between degree and radians
function degtoRad(degree) {
    return degree * (Math.PI / 180);
};
function radtodeg(rad) {
    return rad / (Math.PI / 180);
};
console.log(degtoRad(30));
console.log(radtodeg(8.67));
console.log(50 * Math.tan(degtoRad(60)));

function random(min, max) {
    const num = Math.floor(Math.random() * (max -min +1)) + min ;
    return num;
}
console.log(random(1, 10));