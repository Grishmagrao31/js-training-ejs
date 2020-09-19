/*
 Model a restaurant menu as an object
 */
"use strict";
let resturant ={
    soup :{
        name1 :"Veg manchow soup",
        name2 : "chicken manchow soup",
        name3 :"Hot and sour soup"
    },
    listdish : "Masala papad",
    starter :{
        name1: "Panner manuchuri",
        name2: "Paneer chilly",
        name3: "Mushroom Mnachuri",
        name4: "Mushroom chilly"
    },
    maincourse : {
        name1: "Biryani",
        name2: "fried rice",
        name3: "Naan",
        name4: "Schezwan fried rice"
    },
    gravy: {
        name1: "paneer butter masala",
        name2: "mushroom masala",
        name3: "Chicken pulimunchi"
    },
    ambience: "Good"

};
console.log(resturant.gravy.name);
console.log(resturant.maincourse.name4);
