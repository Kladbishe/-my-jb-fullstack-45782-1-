let num = +prompt('enter a number');
let num2 = +prompt('enter a number');
if (num > num2) {
     let max = num
    num = num2
    num2 = max

}
for (let count = num; count <= num2; count++) {
    document.write(`${count} <br>`)
}