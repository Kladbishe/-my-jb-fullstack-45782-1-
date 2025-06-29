let num = +prompt('enter a number');
let odd = 0;
while (num > 0) {
    odd = odd + (num % 10)
    num = (num - num % 10) / 10

}
document.write(`sum a number: ${odd}`);