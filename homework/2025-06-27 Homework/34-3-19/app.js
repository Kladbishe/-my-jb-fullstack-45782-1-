let num
let sum = 0;
for (let count = 1; count <= 10; count++) {
    let num = +prompt('enter a number');
    sum += num;
}
document.write(`sum: ${sum} average: ${sum / 10}`)