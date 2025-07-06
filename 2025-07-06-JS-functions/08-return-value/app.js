
const randomNum1 = getRandomNumber0to100();
const randomNum2 = getRandomNumber0to100();
function bigLittleNumber(a, b) {
    console.log(a > b ? a : b)
}
function getNumericalInputFromUser() {
    return +prompt("enter a number")
}
function getRandomNumber0to100() {
    return Math.random() * 101;
}
const num1 = getNumericalInputFromUser();
const num2 = getNumericalInputFromUser();

bigLittleNumber(num1, num2);
bigLittleNumber(num1, num2);
bigLittleNumber(randomNum1, randomNum2);

function getMichaelLastName() {
    console.log('before returning')
    return "cohen";
    console.log('after returning')
    return "uzan";
}
console.log(getMichaelLastName())
function getMax(a, b) {
    console.log(a > b ? a : b)
    return a > b ? a : b;
}
console.log(getMax(1, 2));