function square(a)
{
    return a*a;
}
function sum_of_square(m,n,o)
{
    return square(m)+square(n)+square(o)-square(m>n?(n>o?o:n): (m>o?o:m));
}
console.log(sum_of_square(2,3,4));