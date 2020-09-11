function p() { 
    return p();
}
function test (a,b)
{
    return  a===0 ?0: b;
}
console.log(0,p());