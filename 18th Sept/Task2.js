/*
Model bank account as a javascript object.
*/
"use strict";
let bank = {
    AccountNumber: 12345,
    IFSCcode : "MNG23456",
    MNRNumber: "BDR143",
    holder: "Grishma Rao",
    address : {
        addresslocality : "Kulshekar barnch",
        addressRegion : "Bikernakatte",
        state : "Karnataka ",
        postaladdress : 575005 

    },
    branchcode : "0BC"


};
console.log(bank.AccountNumber);