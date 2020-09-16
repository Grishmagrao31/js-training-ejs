function square(c){
    return c * c;
}
function sum_of_square(a,b){
    return square(a) + square(b);
}
function f(a){
    return sum_of_square(a + 1, a * 2);
}
console.log(f(5));