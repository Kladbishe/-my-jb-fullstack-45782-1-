const num1 = +prompt('enter a number');
const num2 = +prompt('enter a number');
const randomNum1 = Math.random() * 101;
const randomNum2 = Math.random() * 101;
function bigLittleNumber(a, b) {
    console.log(a > b ? a : b)
}
bigLittleNumber(num1, num2);
bigLittleNumber(randomNum1, randomNum2);
bigLittleNumber(num1, randomNum2);
