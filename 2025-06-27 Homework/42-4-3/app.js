let num = +prompt('enter a number');
while (num > 0) {
    for (let count = 2; count <= num; count += 2) {
        document.write(`${count} <br>`);

    }
    num = +prompt('enter a number');
}