let num = +prompt('enter a number');
let even = 0;
let odd = 0;
while (num >= 0) {
    if (num % 2 === 0) {
        even++
    }
    else {
        odd++
    }
    num = +prompt('enter a number');
}
document.write(`You entered ${even} even numbers and ${odd} odd numbers.`);