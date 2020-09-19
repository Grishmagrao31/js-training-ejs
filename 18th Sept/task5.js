/*
Model a credit card as a javascript object.
*/
"use strict";
let credit = {
    Rupay : "Can be used anywhere in India" ,
    Mastercard : " International purpose" ,
    Visa  : {
        expirydate : "3/24" ,
        cardholdername : "SYNDINSTANT DR CARD" ,
        number: 1800236459658,
        cvv : 569,
    },
    debit : "Cards less then 5000 Rs"
};
console.log(credit.debit);
console.log(credit.Visa.number);