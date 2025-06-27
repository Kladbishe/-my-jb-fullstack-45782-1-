const age=+prompt('enter your age')
let price;
// if(age<= 18) price = 20
// else price = 30
price = age <= 18 ? 20 : 30;

alert(`your ticket fee is ${price}`);

