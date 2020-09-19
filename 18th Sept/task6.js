/*
Model a car as a javascript object. 
*/
"use strict";
let car = {
    name: "Range Rover",
    model: "voke",
    version : "SE",
    features: {
        variant1 :"Petrol",
        variant2: "diesel",
        seater: 5,
        gear: "Automatic",
        Airbag: "for passenger safety",
        ABS: "Anti breaking system" 
    },
    lock: "Cental locking"
};
console.log(car.features.variant1);