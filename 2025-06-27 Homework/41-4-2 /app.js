let num = +prompt('enter a number');
while (num > 0) {
    for (let count = num; count >= 1; count--) {
        document.write(`${count} <br>`);
    }
    num = +prompt('enter a number');
}