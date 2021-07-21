"use strict";

var listForPassword = "abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*_:?;|.,";
var temporaryPassword = '';

function generatePassword(passwordLength){
    temporaryPassword = '';
    for (let index = 0; index < passwordLength; index++) {
        temporaryPassword += listForPassword.charAt(Math.floor(Math.random()*listForPassword.length));
        // console.log(temporaryPassword += listForPassword.charAt(Math.floor(Math.random()*listForPassword.length)));

    }
    return temporaryPassword;
}

function printPassword(enterLengthValue) {
    document.passGen.output.value = generatePassword(enterLengthValue);
    // setTimeout(() => {
    //     document.passGen.output.value ="";
    // }, 9000);
}



// var listForCaptcha = "abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&";
// var temporaryPassword = '';

// function generatePassword(passwordLength){
//     temporaryPassword = '';
//     for (let index = 0; index < passwordLength; index++) {
//         temporaryPassword += listForPassword.charAt(Math.floor(Math.random()*listForPassword.length));
//         // console.log(temporaryPassword += listForPassword.charAt(Math.floor(Math.random()*listForPassword.length)));

//     }
//     return temporaryPassword;
// }

// function printPassword(enterLengthValue) {
//     document.passGen.output.value = generatePassword(8);
//     console.log(document.passGen.output.value);
//     // setTimeout(() => {
//     //     document.passGen.output.value ="";
//     // }, 9000);
// }