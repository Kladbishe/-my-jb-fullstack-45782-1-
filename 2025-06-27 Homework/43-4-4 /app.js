let num = +prompt('enter a number');
while (num > 0) {
    if (num % 2 === 0) {
        for (let count = num; count >= 1; count -= 2) {
            document.write(`${count} <br>`);
        }
    }
    num = +prompt('enter a number');
}