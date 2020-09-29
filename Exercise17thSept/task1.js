"use strict";
let replace = (question, yes, no) => {
    if (question) {
        yes();
    }
    else {
        no();
    }
};
replace (
    "Do you agree ?",
    () => { console.log ("hello");},
    () => { console.log ("You have canceled"); } 
);