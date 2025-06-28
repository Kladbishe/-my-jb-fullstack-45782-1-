
let num;
let even = 0;
let odd = 0;
for (let count = 1; count <= 10; count++) {
    num = +prompt('enter a number');
    if (num % 2 === 0) {
        even++
    }
    else {
        odd++
    }
}
document.write(`You entered ${even} even numbers and ${odd} odd numbers.`);