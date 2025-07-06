const password = prompt('enter password')

let isSixCharslong = password.length >= 6;
let hasCapitalLatter = password.toLowerCase() !== password;
let hasLowerCaseLetter = password.toUpperCase() !== password;
let hasDigit = false;
let hasSpecialChar = false;


for(const char of password){
    // if('01234567890'.includes(char)) hasDigit = true
    if(number(char) !== NaN) hasDigit = true
    if('/$(_@$&!)^$)!*@'.includes(char)) hasSpecialChar = true
}
if(hasCapitalLatter && hasLowerCaseLetter && hasDigit && hasSpecialChar){
    console.log('great password!')
}