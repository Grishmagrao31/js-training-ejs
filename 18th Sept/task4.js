/*
Model shopping list as an object. Each item in the list is also an object.
*/
"use strict";
let shoppinglist = {
    top: {
        type : "Wadrobe",
        size : "M",
        cost: 150
    },
    pant : "denim",
    dress : "off shoulder",
    skirt: "floral",
    shorttop : "Ginger"
};
console.log(shoppinglist.top.size);
console.log(shoppinglist.pant);