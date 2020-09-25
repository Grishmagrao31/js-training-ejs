"use strict";
const friends = [
    { id: 1, name: "Sting", nearMe: true },
    { id: 2, name: "Radiohead", nearMe: true },
    { id: 3, name: "NIN", nearMe: false },
    { id: 4, name: "Echo", nearMe: true },
    { id: 5, name: "Zeppelin", nearMe: false }
];
  
/*
names of friends who are near me
*/
let result = friends.filter(each => each.nearMe)
    .map(friends=> friends.name);
console.log(result);                   