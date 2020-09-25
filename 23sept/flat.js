"use strict";
let arrays = [[1, 2, 3], [4, 5], [6]];
//console.log (arrays.flat());
console.log(arrays.reduce((flat, cur)=>flat.concat(cur , [])));