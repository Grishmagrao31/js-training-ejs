"use strict" ;

// using two variants to checkage '?' and '||'


function checkAge(age) {
    (age >= 18) ? console.log("true"):console.log( " Did you ask your parents permission ?");
}
checkAge(10);



function checkAge(age){
    if((age > 18) || age === 18)
    {
        return console.log("true");
    } else {
        return console.log ("Did you as your parents Permission");
    }
}
checkAge(18);